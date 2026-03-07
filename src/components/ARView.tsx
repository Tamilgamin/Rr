import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, RotateCcw, Info, HelpCircle, X, CheckCircle2, AlertTriangle, Zap, MessageSquare, Mic } from 'lucide-react';
import { Experiment, ExperimentType } from '../types';
import { AIAssistant } from './AIAssistant';
import { ReactionEngine, ReactionEffect } from '../services/reactionEngine';
import { LabEquipmentAssets, Beaker, TestTube, ConicalFlask, BunsenBurner, ReagentBottle, Pipette, Burette, Funnel, EvaporatingDish } from './LabEquipment';

interface ARViewProps {
  experiment: Experiment;
  onBack: () => void;
}

export default function ARView({ experiment, onBack }: ARViewProps) {
  const [step, setStep] = useState(0);
  const [isReactionComplete, setIsReactionComplete] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResult, setQuizResult] = useState<boolean | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);
  const [isInAR, setIsInAR] = useState(false);
  const [arMode, setArMode] = useState<'webxr' | 'arjs' | null>(null);
  const [isWebXRSupported, setIsWebXRSupported] = useState<boolean | null>(null);

  // Experiment specific states
  const [liquidColor, setLiquidColor] = useState('#ffffff');
  const [showBubbles, setShowBubbles] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);
  const [showFlame, setShowFlame] = useState(false);
  const [showPrecipitate, setShowPrecipitate] = useState(false);
  const [precipitateColor, setPrecipitateColor] = useState('#fff');
  const [flameColor, setFlameColor] = useState('#33f');
  const [isAnimating, setIsAnimating] = useState(false);
  const [temperature, setTemperature] = useState(25);
  const [reactionEquation, setReactionEquation] = useState('');

  useEffect(() => {
    // Check for WebXR support
    const checkWebXR = async () => {
      const nav = navigator as any;
      if (nav.xr) {
        try {
          const supported = await nav.xr.isSessionSupported('immersive-ar');
          setIsWebXRSupported(supported);
        } catch (e) {
          setIsWebXRSupported(false);
        }
      } else {
        setIsWebXRSupported(false);
      }
    };
    checkWebXR();

    // Register custom components
    if (window.AFRAME) {
      if (!window.AFRAME.components['ar-hit-test-custom']) {
        window.AFRAME.registerComponent('ar-hit-test-custom', {
          init: function () {
            this.xrHitTestSource = null;
            this.viewerSpace = null;
            this.refSpace = null;

            this.el.sceneEl.renderer.xr.addEventListener('sessionstart', async () => {
              const session = this.el.sceneEl.renderer.xr.getSession();
              this.viewerSpace = await session.requestReferenceSpace('viewer');
              this.refSpace = await session.requestReferenceSpace('local');
              
              try {
                this.xrHitTestSource = await session.requestHitTestSource({ 
                  space: this.viewerSpace,
                  entityTypes: ['plane'] 
                });
              } catch (e) {
                this.xrHitTestSource = await session.requestHitTestSource({ space: this.viewerSpace });
              }
            });
          },
          tick: function () {
            if (!this.xrHitTestSource) return;
            const frame = this.el.sceneEl.frame;
            if (!frame) return;

            const hitTestResults = frame.getHitTestResults(this.xrHitTestSource);
            if (hitTestResults.length > 0) {
              const hit = hitTestResults[0];
              const pose = hit.getPose(this.refSpace);
              this.el.setAttribute('position', pose.transform.position);
              this.el.setAttribute('visible', true);
            } else {
              this.el.setAttribute('visible', false);
            }
          }
        });
      }
    }

    // Initialize experiment state
    setLiquidColor('#e2e8f0');
    setReactionEquation(experiment.reaction);

    const placeObject = () => {
      if (isPlaced || !isInAR) return;
      
      const reticle = document.querySelector('#reticle');
      const labBench = document.querySelector('#lab-bench');
      
      if (reticle && labBench && reticle.getAttribute('visible')) {
        const position = reticle.getAttribute('position');
        labBench.setAttribute('position', position);
        labBench.setAttribute('visible', 'true');
        reticle.setAttribute('visible', 'false');
        setIsPlaced(true);
      }
    };

    const handleXRSelect = () => {
      placeObject();
    };

    const handleWindowClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      placeObject();
    };

    const sceneEl = document.querySelector('a-scene') as any;
    if (sceneEl) {
      sceneEl.addEventListener('enter-vr', () => {
        const session = sceneEl.xrSession;
        if (session) {
          session.addEventListener('select', handleXRSelect);
        }
      });
    }

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
      if (sceneEl && sceneEl.xrSession) {
        sceneEl.xrSession.removeEventListener('select', handleXRSelect);
      }
    };
  }, [experiment, isPlaced, isInAR]);

  const startARSession = async () => {
    if (isWebXRSupported) {
      const sceneEl = document.querySelector('a-scene') as any;
      if (sceneEl) {
        try {
          await sceneEl.enterAR();
          setIsInAR(true);
          setArMode('webxr');
        } catch (err: any) {
          console.error('Failed to enter AR:', err);
          // Fallback to AR.js if WebXR fails
          setIsInAR(true);
          setArMode('arjs');
          setIsPlaced(true); // In AR.js marker mode, we consider it "placed" on the marker
        }
      }
    } else {
      // Use AR.js fallback
      setIsInAR(true);
      setArMode('arjs');
      setIsPlaced(true);
    }
  };

  const handleAction = () => {
    if (isAnimating) return;
    
    if (step < experiment.steps.length - 1) {
      setIsAnimating(true);
      
      const reagent = document.querySelector('#reagent-bottle');
      if (reagent) {
        // Pouring Animation
        reagent.setAttribute('animation__move', 'property: position; to: 0 0.15 0; dur: 1000; easing: easeInOutQuad');
        reagent.setAttribute('animation__tilt', 'property: rotation; to: 0 0 45; dur: 500; delay: 1000; easing: easeInOutQuad');

        setTimeout(() => {
          setStep(s => s + 1);
          
          // Trigger liquid fill
          const liquid = document.querySelector('#liquid') as any;
          if (liquid) liquid.emit('pour');

          // Process Reaction Logic
          const currentChemicals = experiment.chemicals.slice(0, step + 2);
          const reaction = ReactionEngine.getReaction(currentChemicals);
          
          if (reaction) {
            reaction.effects.forEach(effect => {
              switch (effect.type) {
                case 'color_change':
                  setLiquidColor(effect.value as string);
                  break;
                case 'bubbles':
                  setShowBubbles(true);
                  break;
                case 'smoke':
                  setShowSmoke(true);
                  break;
                case 'flame':
                  setShowFlame(true);
                  setFlameColor(effect.value as string);
                  break;
                case 'precipitate':
                  setShowPrecipitate(true);
                  setPrecipitateColor(effect.value as string);
                  break;
                case 'heat':
                  if (effect.value === 'Endothermic') {
                    setTemperature(prev => prev - 20);
                  } else {
                    setTemperature(prev => prev + 20);
                  }
                  break;
              }
            });
            setIsReactionComplete(true);
          }

          // Return Animation
          reagent.setAttribute('animation__tiltback', 'property: rotation; to: 0 0 0; dur: 500; easing: easeInOutQuad');
          reagent.setAttribute('animation__return', 'property: position; to: 0.2 0.05 0; dur: 1000; delay: 500; easing: easeInOutQuad');

          setTimeout(() => setIsAnimating(false), 1500);
        }, 1500);
      } else {
        setStep(s => s + 1);
        setIsAnimating(false);
      }
    } else {
      setShowQuiz(true);
    }
  };

  const resetExperiment = () => {
    setStep(0);
    setIsReactionComplete(false);
    setShowQuiz(false);
    setQuizResult(null);
    setShowBubbles(false);
    setShowSmoke(false);
    setShowFlame(false);
    setTemperature(25);
    setIsPlaced(false);
    setIsAnimating(false);
    setLiquidColor('#e2e8f0');
  };

  return (
    <div className={`fixed inset-0 z-30 pointer-events-none ${!isInAR ? 'bg-black' : ''}`}>
      <div className="absolute inset-0 z-0">
        <a-scene 
          webxr={arMode === 'webxr' ? "requiredFeatures: local; optionalFeatures: hit-test, dom-overlay; overlayElement: #root" : "enabled: false"}
          arjs={arMode === 'arjs' ? "sourceType: webcam; debugUIEnabled: false; trackingMethod: best;" : ""}
          vr-mode-ui="enabled: false"
          renderer="colorManagement: true; alpha: true;"
          background="transparent: true"
          embedded={arMode === 'arjs'}
        >
          <LabEquipmentAssets />

          {arMode === 'webxr' && (
            <a-entity id="reticle" ar-hit-test-custom visible="false">
              <a-ring rotation="-90 0 0" radius-inner="0.04" radius-outer="0.06" material="color: #10b981; opacity: 0.8; shader: flat"></a-ring>
            </a-entity>
          )}

          {/* AR.js Marker Fallback */}
          {arMode === 'arjs' ? (
            <a-marker preset="hiro">
              <a-entity id="lab-bench" scale="2 2 2">
                {/* Lab Bench Content */}
                {experiment.id === ExperimentType.FLAME_TEST || experiment.id === ExperimentType.SUBLIMATION ? (
                  <BunsenBurner position="0 0 0" active={step > 0} flameColor={flameColor} />
                ) : null}

                <a-entity position="0 0 0">
                  {experiment.equipment.includes('Beaker') && (
                    <Beaker position="0 0 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.8 : 0.4} />
                  )}
                  {experiment.equipment.includes('Test Tube') && (
                    <TestTube position="0 0.05 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.6 : 0.3} />
                  )}
                  {experiment.equipment.includes('Conical Flask') && (
                    <ConicalFlask position="0 0 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.5 : 0.2} />
                  )}
                  {experiment.equipment.includes('Burette') && (
                    <Burette position="-0.1 0 0" />
                  )}
                  {experiment.equipment.includes('Funnel') && (
                    <Funnel position="0 0.15 0" />
                  )}
                  {experiment.equipment.includes('Evaporating Dish') && (
                    <EvaporatingDish position="0 0.1 0" />
                  )}
                </a-entity>

                <a-entity id="reagent-bottle" position="0.2 0.05 0">
                  <ReagentBottle label={experiment.chemicals[step] || 'REAGENT'} />
                </a-entity>

                {showBubbles && (
                  <a-entity position="0 0.05 0" particle-system="preset: bubble; color: #fff; size: 0.01; particleCount: 20"></a-entity>
                )}
                {showSmoke && (
                  <a-entity position="0 0.1 0" particle-system="preset: dust; color: #ccc; size: 0.02; particleCount: 30"></a-entity>
                )}
                {showPrecipitate && (
                  <a-cylinder 
                    radius="0.035" 
                    height="0.02" 
                    position="0 0.01 0" 
                    material={`color: ${precipitateColor}; opacity: 0.9; transparent: true`}
                  ></a-cylinder>
                )}
              </a-entity>
            </a-marker>
          ) : (
            <a-entity id="lab-bench" visible="false">
              {/* Main Equipment based on experiment */}
              {experiment.id === ExperimentType.FLAME_TEST || experiment.id === ExperimentType.SUBLIMATION ? (
                <BunsenBurner position="0 0 0" active={step > 0} flameColor={flameColor} />
              ) : null}

              <a-entity position="0 0 0">
                {experiment.equipment.includes('Beaker') && (
                  <Beaker position="0 0 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.8 : 0.4} />
                )}
                {experiment.equipment.includes('Test Tube') && (
                  <TestTube position="0 0.05 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.6 : 0.3} />
                )}
                {experiment.equipment.includes('Conical Flask') && (
                  <ConicalFlask position="0 0 0" liquidColor={liquidColor} liquidHeight={step > 0 ? 0.5 : 0.2} />
                )}
                {experiment.equipment.includes('Burette') && (
                  <Burette position="-0.1 0 0" />
                )}
                {experiment.equipment.includes('Funnel') && (
                  <Funnel position="0 0.15 0" />
                )}
                {experiment.equipment.includes('Evaporating Dish') && (
                  <EvaporatingDish position="0 0.1 0" />
                )}
              </a-entity>

              {/* Reagent Bottle */}
              <a-entity id="reagent-bottle" position="0.2 0.05 0">
                <ReagentBottle label={experiment.chemicals[step] || 'REAGENT'} />
              </a-entity>

              {/* Visual Effects */}
              {showBubbles && (
                <a-entity position="0 0.05 0" particle-system="preset: bubble; color: #fff; size: 0.01; particleCount: 20"></a-entity>
              )}
              {showSmoke && (
                <a-entity position="0 0.1 0" particle-system="preset: dust; color: #ccc; size: 0.02; particleCount: 30"></a-entity>
              )}
              {showPrecipitate && (
                <a-cylinder 
                  radius="0.035" 
                  height="0.02" 
                  position="0 0.01 0" 
                  material={`color: ${precipitateColor}; opacity: 0.9; transparent: true`}
                ></a-cylinder>
              )}
            </a-entity>
          )}

          <a-entity camera position="0 1.6 0"></a-entity>
        </a-scene>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col pointer-events-auto">
        <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent text-white">
          <button onClick={onBack} className="p-2 rounded-full bg-white/10 backdrop-blur-md">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="font-bold text-lg">{experiment.name}</h2>
            <p className="text-xs opacity-80">{arMode === 'arjs' ? 'Point at Hiro Marker' : isPlaced ? 'Experiment Active' : 'Scan Table & Tap'}</p>
          </div>
          <button onClick={() => setShowInfo(true)} className="p-2 rounded-full bg-white/10 backdrop-blur-md">
            <Info className="w-6 h-6" />
          </button>
        </div>

        {!isPlaced && (
          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence>
              {!isInAR ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-xs"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                  <p className="text-neutral-500 text-sm mb-6">
                    {isWebXRSupported ? 'Scan your table surface to begin.' : 'WebXR not supported. Using marker-based AR. Point your camera at a Hiro marker.'}
                  </p>
                  <button onClick={startARSession} className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg">
                    {isWebXRSupported ? 'Enter Lab' : 'Start Marker AR'}
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-64 h-64 border-4 border-dashed border-white/40 rounded-3xl flex items-center justify-center">
                  <p className="text-white text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">Scan Table & Tap to Place</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-auto p-6 space-y-4">
          <AnimatePresence>
            {isPlaced && !showQuiz && (
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step {step + 1} of {experiment.steps.length}</span>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{temperature}°C</span>
                  </div>
                  <p className="text-neutral-800 font-medium leading-relaxed">{experiment.steps[step]}</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={handleAction} className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-transform">
                    {step === experiment.steps.length - 1 ? 'Take Quiz' : 'Next Action'}
                  </button>
                  <button onClick={resetExperiment} className="p-4 bg-neutral-100 text-neutral-600 rounded-2xl hover:bg-neutral-200 transition-colors">
                    <RotateCcw className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AIAssistant />

      {/* Modals (Info, Quiz) */}
      <AnimatePresence>
        {showInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowInfo(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl overflow-hidden">
              <button onClick={() => setShowInfo(false)} className="absolute top-4 right-4 p-2 text-neutral-400"><X className="w-6 h-6" /></button>
              <h3 className="text-2xl font-bold mb-2">Experiment Info</h3>
              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 mb-4 text-center font-mono text-sm font-bold text-blue-700">{reactionEquation}</div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">{experiment.explanation}</p>
              
