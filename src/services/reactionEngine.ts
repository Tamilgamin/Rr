import { ExperimentType } from '../types';

export interface ReactionEffect {
  type: 'color_change' | 'bubbles' | 'smoke' | 'flame' | 'precipitate' | 'heat' | 'sound';
  value?: string | number;
}

export interface Reaction {
  reactants: string[];
  products: string[];
  equation: string;
  effects: ReactionEffect[];
  explanation: string;
}

export const REACTION_DATABASE: Record<string, Reaction> = {
  'HCl+NaOH': {
    reactants: ['HCl', 'NaOH'],
    products: ['NaCl', 'H2O'],
    equation: 'HCl + NaOH → NaCl + H₂O',
    effects: [
      { type: 'color_change', value: '#a855f7' }, // Purple indicator
      { type: 'heat', value: 'Exothermic' }
    ],
    explanation: 'A neutralization reaction where an acid and a base react to form salt and water.'
  },
  'H2O+Electricity': {
    reactants: ['H2O'],
    products: ['H2', 'O2'],
    equation: '2H₂O → 2H₂ + O₂',
    effects: [
      { type: 'bubbles', value: 'Gas evolution' }
    ],
    explanation: 'Electrolysis uses electricity to split water into hydrogen and oxygen gases.'
  },
  'CuSO4+NaOH': {
    reactants: ['CuSO4', 'NaOH'],
    products: ['Cu(OH)2', 'Na2SO4'],
    equation: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄',
    effects: [
      { type: 'precipitate', value: '#3b82f6' }, // Blue precipitate
      { type: 'color_change', value: '#dbeafe' }
    ],
    explanation: 'A double displacement reaction forming an insoluble blue copper(II) hydroxide precipitate.'
  },
  'AgNO3+NaCl': {
    reactants: ['AgNO3', 'NaCl'],
    products: ['AgCl', 'NaNO3'],
    equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    effects: [
      { type: 'precipitate', value: '#ffffff' } // White precipitate
    ],
    explanation: 'Formation of white silver chloride precipitate.'
  },
  'Na+H2O': {
    reactants: ['Na', 'H2O'],
    products: ['NaOH', 'H2'],
    equation: '2Na + 2H₂O → 2NaOH + H₂↑',
    effects: [
      { type: 'bubbles', value: 'Rapid gas evolution' },
      { type: 'flame', value: '#ff9d00' },
      { type: 'heat', value: 'Very Exothermic' }
    ],
    explanation: 'Sodium reacts violently with water, producing hydrogen gas and heat which often ignites the gas.'
  },
  'CaCO3+HCl': {
    reactants: ['CaCO3', 'HCl'],
    products: ['CaCl2', 'H2O', 'CO2'],
    equation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
    effects: [
      { type: 'bubbles', value: 'Effervescence' },
      { type: 'smoke', value: 'CO2 gas' }
    ],
    explanation: 'Calcium carbonate reacts with acid to release carbon dioxide gas.'
  },
  'CaO+H2O': {
    reactants: ['CaO', 'H2O'],
    products: ['Ca(OH)2'],
    equation: 'CaO + H₂O → Ca(OH)₂ + Heat',
    effects: [
      { type: 'heat', value: 'Exothermic' },
      { type: 'smoke', value: 'Steam' }
    ],
    explanation: 'Calcium oxide reacts with water to form calcium hydroxide, releasing significant heat.'
  },
  'Mg+CuSO4': {
    reactants: ['Mg', 'CuSO4'],
    products: ['MgSO4', 'Cu'],
    equation: 'Mg + CuSO₄ → MgSO₄ + Cu',
    effects: [
      { type: 'color_change', value: '#e2e8f0' },
      { type: 'precipitate', value: '#b45309' }
    ],
    explanation: 'Magnesium displaces copper from copper sulfate solution.'
  },
  'H2O2+MnO2': {
    reactants: ['H2O2', 'MnO2'],
    products: ['H2O', 'O2'],
    equation: '2H₂O₂ → 2H₂O + O₂↑',
    effects: [
      { type: 'bubbles', value: 'Oxygen evolution' },
      { type: 'smoke', value: 'Oxygen gas' }
    ],
    explanation: 'Manganese dioxide catalyzes the decomposition of hydrogen peroxide into water and oxygen.'
  },
  'I2+Heat': {
    reactants: ['I2'],
    products: ['I2'],
    equation: 'I₂ (s) → I₂ (g)',
    effects: [
      { type: 'smoke', value: '#a855f7' }
    ],
    explanation: 'Solid iodine sublimes directly into purple gas when heated.'
  },
};

export class ReactionEngine {
  static getReaction(reactants: string[]): Reaction | null {
    const key = reactants.sort().join('+');
    return REACTION_DATABASE[key] || null;
  }

  static getEffects(reactants: string[]): ReactionEffect[] {
    const reaction = this.getReaction(reactants);
    return reaction ? reaction.effects : [];
  }
}
