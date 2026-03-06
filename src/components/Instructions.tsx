import { motion } from 'motion/react';
import { ChevronLeft, Camera, Scan, Beaker, CheckCircle2 } from 'lucide-react';

interface InstructionsProps {
  onBack: () => void;
}

export default function Instructions({ onBack }: InstructionsProps) {
  const steps = [
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: "Allow Camera Access",
      desc: "The app needs your camera to detect the AR marker."
    },
    {
      icon: <Scan className="w-6 h-6 text-purple-500" />,
      title: "Scan Your Table",
      desc: "Slowly move your phone to scan a flat surface like a table or floor."
    },
    {
      icon: <Beaker className="w-6 h-6 text-emerald-500" />,
      title: "Tap to Place",
      desc: "When a ring appears on the table, tap the screen to place your beaker and start."
    }
  ];

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className="min-h-screen bg-white p-6 relative z-20"
    >
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-neutral-500 font-medium hover:text-neutral-900 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <h2 className="text-3xl font-bold mb-8">How it works</h2>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100">
              {step.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
        <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
          <CheckCircle2 className="w-5 h-5" />
          Pro Tip
        </div>
        <p className="text-emerald-600 text-sm leading-relaxed">
          Ensure you are in a well-lit environment for the best marker tracking performance.
        </p>
      </div>
    </motion.div>
  );
}
