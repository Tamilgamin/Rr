import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Beaker, BookOpen, Play, Info, RotateCcw, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ExperimentType, EXPERIMENTS, Experiment } from './types';

// Components
import HomeScreen from './components/HomeScreen';
import Instructions from './components/Instructions';
import ExperimentSelector from './components/ExperimentSelector';
import ARView from './components/ARView';

export default function App() {
  const [view, setView] = useState<'home' | 'instructions' | 'selector' | 'ar'>('home');
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);

  const startExperiment = (exp: Experiment) => {
    setSelectedExperiment(exp);
    setView('ar');
  };

  const resetApp = () => {
    setView('home');
    setSelectedExperiment(null);
  };

  return (
    <div className={`min-h-screen ${view === 'ar' ? 'bg-transparent' : 'bg-neutral-50'} text-neutral-900 overflow-hidden`}>
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <HomeScreen 
            onStart={() => setView('selector')} 
            onInstructions={() => setView('instructions')} 
          />
        )}

        {view === 'instructions' && (
          <Instructions onBack={() => setView('home')} />
        )}

        {view === 'selector' && (
          <ExperimentSelector 
            onSelect={startExperiment} 
            onBack={() => setView('home')} 
          />
        )}

        {view === 'ar' && selectedExperiment && (
          <ARView 
            experiment={selectedExperiment} 
            onBack={() => setView('selector')} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
