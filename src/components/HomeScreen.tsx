import { motion } from 'motion/react';
import { Beaker, Play, BookOpen, Info } from 'lucide-react';

interface HomeScreenProps {
  onStart: () => void;
  onInstructions: () => void;
}

export default function HomeScreen({ onStart, onInstructions }: HomeScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative z-20 bg-white"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-sm">
          <Beaker className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-2">
          AR Chem Lab
        </h1>
        <p className="text-neutral-500 max-w-xs mx-auto">
          Explore the world of chemistry through augmented reality.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={onStart}
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-emerald-600 text-white rounded-2xl font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors"
        >
          <Play className="w-5 h-5 fill-current" />
          Start Experiment
        </button>

        <button
          onClick={onStart}
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white border border-neutral-200 text-neutral-700 rounded-2xl font-semibold hover:bg-neutral-50 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          Choose Experiment
        </button>

        <button
          onClick={onInstructions}
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-white border border-neutral-200 text-neutral-700 rounded-2xl font-semibold hover:bg-neutral-50 transition-colors"
        >
          <Info className="w-5 h-5" />
          Instructions
        </button>
      </div>

      <div className="absolute bottom-8 text-xs text-neutral-400 font-mono uppercase tracking-widest">
        v1.0.0 • Mobile AR Lab
      </div>
    </motion.div>
  );
}
