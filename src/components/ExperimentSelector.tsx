import { motion } from 'motion/react';
import { ChevronLeft, FlaskConical, Zap, Flame, ChevronRight, Droplets, Pipette, Gem, Wind } from 'lucide-react';
import { Experiment, EXPERIMENTS, ExperimentType } from '../types';

interface ExperimentSelectorProps {
  onSelect: (exp: Experiment) => void;
  onBack: () => void;
}

export default function ExperimentSelector({ onSelect, onBack }: ExperimentSelectorProps) {
  const experimentList = Object.values(EXPERIMENTS);

  const getIcon = (type: ExperimentType) => {
    switch (type) {
      case ExperimentType.NEUTRALIZATION: return <FlaskConical className="w-6 h-6 text-blue-500" />;
      case ExperimentType.ELECTROLYSIS: return <Zap className="w-6 h-6 text-yellow-500" />;
      case ExperimentType.FLAME_TEST: return <Flame className="w-6 h-6 text-orange-500" />;
      case ExperimentType.PRECIPITATION: return <FlaskConical className="w-6 h-6 text-purple-500" />;
      case ExperimentType.SODIUM_WATER: return <Zap className="w-6 h-6 text-red-500" />;
      case ExperimentType.CO2_GENERATION: return <FlaskConical className="w-6 h-6 text-emerald-500" />;
      case ExperimentType.SOLUBILITY: return <Droplets className="w-6 h-6 text-blue-500" />;
      case ExperimentType.TITRATION: return <Pipette className="w-6 h-6 text-indigo-500" />;
      case ExperimentType.CRYSTALLIZATION: return <Gem className="w-6 h-6 text-cyan-500" />;
      case ExperimentType.SUBLIMATION: return <Wind className="w-6 h-6 text-purple-400" />;
      default: return <FlaskConical className="w-6 h-6 text-neutral-400" />;
    }
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="min-h-screen bg-white p-6 relative z-20 overflow-y-auto"
    >
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-neutral-500 font-medium hover:text-neutral-900 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <h2 className="text-3xl font-bold mb-2">Choose Experiment</h2>
      <p className="text-neutral-500 mb-8">Select a lab to begin your virtual session.</p>

      <div className="space-y-4">
        {experimentList.map((exp) => (
          <button
            key={exp.id}
            onClick={() => onSelect(exp)}
            className="w-full flex items-center gap-4 p-5 bg-neutral-50 rounded-3xl border border-neutral-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group text-left"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-neutral-100 group-hover:border-emerald-100">
              {getIcon(exp.id)}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{exp.name}</h3>
              <p className="text-neutral-500 text-sm line-clamp-1">{exp.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-emerald-500 transition-colors" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
