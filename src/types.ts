export enum ExperimentType {
  NEUTRALIZATION = 'NEUTRALIZATION',
  ELECTROLYSIS = 'ELECTROLYSIS',
  FLAME_TEST = 'FLAME_TEST',
  PRECIPITATION = 'PRECIPITATION',
  SODIUM_WATER = 'SODIUM_WATER',
  CO2_GENERATION = 'CO2_GENERATION',
  DISTILLATION = 'DISTILLATION',
  FILTRATION = 'FILTRATION',
  EVAPORATION = 'EVAPORATION',
  PH_TESTING = 'PH_TESTING',
  THERMITE = 'THERMITE',
  HYDROGEN_TEST = 'HYDROGEN_TEST',
  RUSTING = 'RUSTING',
  FERMENTATION = 'FERMENTATION',
  SLIME = 'SLIME',
  DECOMPOSITION = 'DECOMPOSITION',
  DISPLACEMENT = 'DISPLACEMENT',
  CLOCK_REACTION = 'CLOCK_REACTION',
  AMMONIA_FOUNTAIN = 'AMMONIA_FOUNTAIN',
  ACID_RAIN = 'ACID_RAIN',
  CHROMATOGRAPHY = 'CHROMATOGRAPHY',
  DENSITY_COLUMN = 'DENSITY_COLUMN',
  SAPONIFICATION = 'SAPONIFICATION',
  ENDOTHERMIC = 'ENDOTHERMIC',
  EXOTHERMIC = 'EXOTHERMIC',
  SOLUBILITY = 'SOLUBILITY',
  OXYGEN_TEST = 'OXYGEN_TEST',
  TITRATION = 'TITRATION',
  CRYSTALLIZATION = 'CRYSTALLIZATION',
  SUBLIMATION = 'SUBLIMATION',
}

export interface Experiment {
  id: ExperimentType;
  name: string;
  description: string;
  reaction: string;
  equipment: string[];
  chemicals: string[];
  steps: string[];
  safetyTips: string[];
  explanation: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
  };
}

export const EXPERIMENTS: Record<ExperimentType, Experiment> = {
  [ExperimentType.NEUTRALIZATION]: {
    id: ExperimentType.NEUTRALIZATION,
    name: 'Acid-Base Neutralization',
    description: 'Observe the reaction between Hydrochloric Acid (HCl) and Sodium Hydroxide (NaOH).',
    reaction: 'HCl + NaOH → NaCl + H₂O',
    equipment: ['Beaker', 'Dropper', 'pH indicator'],
    chemicals: ['HCl', 'NaOH'],
    steps: [
      'Tap the HCl bottle to add acid to the beaker.',
      'Tap the NaOH bottle to add base.',
      'Observe the color change and bubbles.'
    ],
    safetyTips: [
      'Wear safety goggles.',
      'Handle acids and bases with care.',
      'Wash hands after the experiment.'
    ],
    explanation: 'When an acid reacts with a base, they neutralize each other, forming salt (NaCl) and water (H₂O). The indicator changes color to show the pH change.',
    quiz: {
      question: 'What are the products of a neutralization reaction?',
      options: ['Acid and Base', 'Salt and Water', 'Gas and Heat', 'Metal and Oxygen'],
      correctIndex: 1
    }
  },
  [ExperimentType.ELECTROLYSIS]: {
    id: ExperimentType.ELECTROLYSIS,
    name: 'Electrolysis of Water',
    description: 'Split water into Hydrogen and Oxygen gases using electricity.',
    reaction: '2H₂O → 2H₂ + O₂',
    equipment: ['Beaker', 'Electrodes', 'Battery'],
    chemicals: ['H2O', 'Sulfuric Acid (catalyst)'],
    steps: [
      'Tap the battery to start the current.',
      'Observe bubbles forming at the electrodes.',
      'Identify the Hydrogen and Oxygen gases.'
    ],
    safetyTips: [
      'Keep electrical components away from excess water.',
      'Do not touch electrodes while the battery is connected.'
    ],
    explanation: 'Electrolysis uses an electric current to drive a non-spontaneous chemical reaction. Water is decomposed into its constituent elements: hydrogen and oxygen.',
    quiz: {
      question: 'Which gas is produced in twice the volume of the other during water electrolysis?',
      options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
      correctIndex: 1
    }
  },
  [ExperimentType.FLAME_TEST]: {
    id: ExperimentType.FLAME_TEST,
    name: 'Flame Test',
    description: 'Identify metal ions by the color they emit when heated in a flame.',
    reaction: 'Excitation of electrons by heat energy.',
    equipment: ['Bunsen Burner', 'Nichrome Loop', 'Watch Glass'],
    chemicals: ['Copper Sulfate', 'Strontium Chloride', 'Barium Chloride'],
    steps: [
      'Tap a metal salt bottle.',
      'Move the loop into the flame.',
      'Observe the characteristic flame color.'
    ],
    safetyTips: [
      'Be careful with open flames.',
      'Use tongs to handle hot objects.'
    ],
    explanation: 'When metal ions are heated, their electrons jump to higher energy levels. As they fall back down, they release energy as light of specific colors.',
    quiz: {
      question: 'What color does Copper (Cu²⁺) typically produce in a flame test?',
      options: ['Red', 'Yellow', 'Green/Blue', 'Purple'],
      correctIndex: 2
    }
  },
  [ExperimentType.PRECIPITATION]: {
    id: ExperimentType.PRECIPITATION,
    name: 'Silver Chloride Precipitation',
    description: 'Form an insoluble solid by mixing two clear solutions.',
    reaction: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    equipment: ['Test Tube', 'Rack', 'Dropper'],
    chemicals: ['Silver Nitrate', 'Sodium Chloride'],
    steps: [
      'Add Silver Nitrate to the test tube.',
      'Add Sodium Chloride solution.',
      'Observe the white precipitate forming.'
    ],
    safetyTips: ['Silver nitrate can stain skin and clothes.'],
    explanation: 'A precipitation reaction occurs when two soluble salts react to form an insoluble solid called a precipitate.',
    quiz: {
      question: 'What is the color of the Silver Chloride precipitate?',
      options: ['Blue', 'White', 'Yellow', 'Black'],
      correctIndex: 1
    }
  },
  [ExperimentType.SODIUM_WATER]: {
    id: ExperimentType.SODIUM_WATER,
    name: 'Sodium and Water Reaction',
    description: 'Observe the vigorous reaction of sodium metal with water.',
    reaction: '2Na + 2H₂O → 2NaOH + H₂↑',
    equipment: ['Trough', 'Tongs', 'Safety Screen'],
    chemicals: ['Sodium Metal', 'Water', 'Phenolphthalein'],
    steps: [
      'Add water to the trough.',
      'Add a drop of phenolphthalein.',
      'Carefully add a small piece of sodium.',
      'Observe the fizzing and purple trail.'
    ],
    safetyTips: ['Extremely reactive. Use very small pieces. Wear full protection.'],
    explanation: 'Sodium reacts with water to produce sodium hydroxide (a base) and hydrogen gas. The reaction is highly exothermic.',
    quiz: {
      question: 'What gas is produced when sodium reacts with water?',
      options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Chlorine'],
      correctIndex: 1
    }
  },
  [ExperimentType.CO2_GENERATION]: {
    id: ExperimentType.CO2_GENERATION,
    name: 'Carbon Dioxide Generation',
    description: 'React calcium carbonate with acid to produce CO2 gas.',
    reaction: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
    equipment: ['Conical Flask', 'Delivery Tube', 'Gas Jar'],
    chemicals: ['Calcium Carbonate', 'Hydrochloric Acid'],
    steps: [
      'Place marble chips (CaCO3) in the flask.',
      'Add HCl through the thistle funnel.',
      'Observe the effervescence and collect gas.'
    ],
    safetyTips: ['Handle acid with care.'],
    explanation: 'Carbonates react with acids to produce carbon dioxide gas, which can be identified by turning limewater milky.',
    quiz: {
      question: 'How can you test for Carbon Dioxide gas?',
      options: ['Glowing splint', 'Limewater test', 'Pop test', 'Blue litmus'],
      correctIndex: 1
    }
  },
  [ExperimentType.DISTILLATION]: {
    id: ExperimentType.DISTILLATION,
    name: 'Simple Distillation',
    description: 'Separate a solvent from a solution using boiling and condensation.',
    reaction: 'Physical separation based on boiling points.',
    equipment: ['Round-bottom Flask', 'Condenser', 'Bunsen Burner', 'Thermometer'],
    chemicals: ['Salt Water', 'Anti-bumping granules'],
    steps: [
      'Heat the salt water in the flask.',
      'Observe steam entering the condenser.',
      'Collect pure water in the receiving flask.'
    ],
    safetyTips: ['Glassware gets very hot. Ensure all joints are secure.'],
    explanation: 'Distillation works by evaporating a liquid and then condensing the vapor back into a liquid in a separate container.',
    quiz: {
      question: 'What is the purpose of the condenser in distillation?',
      options: ['To heat the liquid', 'To cool and condense vapor', 'To filter solids', 'To measure temperature'],
      correctIndex: 1
    }
  },
  [ExperimentType.PH_TESTING]: {
    id: ExperimentType.PH_TESTING,
    name: 'pH Testing Experiment',
    description: 'Measure the acidity or alkalinity of various household substances.',
    reaction: 'Interaction with pH indicators.',
    equipment: ['Spot Plate', 'pH Paper', 'Universal Indicator'],
    chemicals: ['Lemon Juice', 'Soap Solution', 'Vinegar', 'Baking Soda'],
    steps: [
      'Place samples in the spot plate.',
      'Add a drop of universal indicator to each.',
      'Compare colors with the pH scale.'
    ],
    safetyTips: ['Some substances may be irritating to skin.'],
    explanation: 'The pH scale measures how acidic or basic a substance is, ranging from 0 to 14.',
    quiz: {
      question: 'What pH value represents a neutral substance?',
      options: ['0', '7', '14', '1'],
      correctIndex: 1
    }
  },
  [ExperimentType.THERMITE]: {
    id: ExperimentType.THERMITE,
    name: 'Thermite Reaction Simulation',
    description: 'A highly exothermic reaction between a metal oxide and a more reactive metal.',
    reaction: 'Fe₂O₃ + 2Al → 2Fe + Al₂O₃ + Heat',
    equipment: ['Crucible', 'Sand Tray', 'Magnesium Ribbon'],
    chemicals: ['Iron(III) Oxide', 'Aluminum Powder'],
    steps: [
      'Mix iron oxide and aluminum powder.',
      'Insert magnesium ribbon as a fuse.',
      'Ignite and observe the molten iron.'
    ],
    safetyTips: ['Extremely dangerous. High temperatures. Virtual simulation only.'],
    explanation: 'The thermite reaction is a redox reaction where aluminum reduces iron oxide to molten iron, releasing massive amounts of heat.',
    quiz: {
      question: 'Which metal is used to reduce iron oxide in the thermite reaction?',
      options: ['Copper', 'Aluminum', 'Gold', 'Silver'],
      correctIndex: 1
    }
  },
  [ExperimentType.RUSTING]: {
    id: ExperimentType.RUSTING,
    name: 'Rust Formation Experiment',
    description: 'Investigate the conditions required for iron to rust.',
    reaction: '4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃',
    equipment: ['Test Tubes', 'Rack', 'Stopper'],
    chemicals: ['Iron Nails', 'Water', 'Oil', 'Calcium Chloride'],
    steps: [
      'Set up tubes with: water+air, boiled water+oil, dry air.',
      'Observe over time (accelerated in AR).',
      'Identify which nail rusts.'
    ],
    safetyTips: ['Nails can be sharp.'],
    explanation: 'Rusting requires both oxygen and water. Preventing contact with either will stop rust from forming.',
    quiz: {
      question: 'What two substances are necessary for iron to rust?',
      options: ['Water and Nitrogen', 'Oxygen and Water', 'Oil and Air', 'Salt and Water'],
      correctIndex: 1
    }
  },
  [ExperimentType.FERMENTATION]: {
    id: ExperimentType.FERMENTATION,
    name: 'Fermentation Reaction',
    description: 'Convert sugar into alcohol and CO2 using yeast.',
    reaction: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
    equipment: ['Conical Flask', 'One-way Valve', 'Limewater Jar'],
    chemicals: ['Sugar Solution', 'Yeast'],
    steps: [
      'Mix sugar and yeast in the flask.',
      'Seal with a valve.',
      'Observe bubbles and limewater turning milky.'
    ],
    safetyTips: ['Pressure can build up if not vented.'],
    explanation: 'Fermentation is an anaerobic process where yeast breaks down glucose into ethanol and carbon dioxide.',
    quiz: {
      question: 'What are the products of yeast fermentation?',
      options: ['Water and Oxygen', 'Ethanol and CO2', 'Sugar and Acid', 'Salt and Water'],
      correctIndex: 1
    }
  },
  [ExperimentType.SLIME]: {
    id: ExperimentType.SLIME,
    name: 'Polymer Slime Creation',
    description: 'Cross-link polymer chains to create a non-Newtonian fluid.',
    reaction: 'PVA + Borate → Cross-linked Polymer',
    equipment: ['Beaker', 'Stirring Rod'],
    chemicals: ['PVA Glue', 'Borax Solution', 'Food Coloring'],
    steps: [
      'Add glue to the beaker.',
      'Add food coloring.',
      'Slowly add borax while stirring.',
      'Observe the change in viscosity.'
    ],
    safetyTips: ['Do not ingest. Wash hands after handling.'],
    explanation: 'Borate ions cross-link the long chains of polyvinyl alcohol (PVA) to form a semi-solid polymer slime.',
    quiz: {
      question: 'What type of substance is slime?',
      options: ['Solid', 'Gas', 'Non-Newtonian Fluid', 'Pure Element'],
      correctIndex: 2
    }
  },
  [ExperimentType.DECOMPOSITION]: {
    id: ExperimentType.DECOMPOSITION,
    name: 'Catalytic Decomposition of H2O2',
    description: 'Rapidly break down hydrogen peroxide using a catalyst.',
    reaction: '2H₂O₂ → 2H₂O + O₂↑',
    equipment: ['Graduated Cylinder', 'Tray'],
    chemicals: ['Hydrogen Peroxide', 'Potassium Iodide', 'Dish Soap'],
    steps: [
      'Add H2O2 and soap to the cylinder.',
      'Add Potassium Iodide (catalyst).',
      'Observe the "Elephant Toothpaste" effect.'
    ],
    safetyTips: ['Concentrated H2O2 can burn skin. Use gloves.'],
    explanation: 'Potassium iodide speeds up the decomposition of hydrogen peroxide, releasing oxygen gas that gets trapped in soap bubbles.',
    quiz: {
      question: 'What is the role of Potassium Iodide in this reaction?',
      options: ['Reactant', 'Product', 'Catalyst', 'Solvent'],
      correctIndex: 2
    }
  },
  [ExperimentType.DISPLACEMENT]: {
    id: ExperimentType.DISPLACEMENT,
    name: 'Copper Displacement Reaction',
    description: 'A more reactive metal displaces a less reactive one from its salt.',
    reaction: 'Fe + CuSO₄ → FeSO₄ + Cu',
    equipment: ['Beaker', 'Sandpaper'],
    chemicals: ['Copper(II) Sulfate', 'Iron Nail'],
    steps: [
      'Add blue copper sulfate to the beaker.',
      'Clean the iron nail and place it in.',
      'Observe the red-brown copper coating.'
    ],
    safetyTips: ['Copper sulfate is harmful if swallowed.'],
    explanation: 'Iron is more reactive than copper, so it displaces copper ions from the solution, which then deposit as metal on the nail.',
    quiz: {
      question: 'Why does the iron nail turn red-brown?',
      options: ['It rusts', 'Copper metal deposits on it', 'It burns', 'It dissolves'],
      correctIndex: 1
    }
  },
  [ExperimentType.CLOCK_REACTION]: {
    id: ExperimentType.CLOCK_REACTION,
    name: 'Iodine Clock Reaction',
    description: 'A reaction where a sudden color change occurs after a delay.',
    reaction: 'Complex series of redox reactions.',
    equipment: ['Beakers', 'Timer'],
    chemicals: ['Solution A (Starch/Iodide)', 'Solution B (H2O2)'],
    steps: [
      'Mix solutions A and B.',
      'Start the timer.',
      'Observe the sudden change to dark blue.'
    ],
    safetyTips: ['Handle chemicals with care.'],
    explanation: 'The color change occurs when the limiting reactant is consumed, allowing iodine to react with starch.',
    quiz: {
      question: 'What causes the sudden color change in the clock reaction?',
      options: ['Temperature change', 'Consumption of a limiting reactant', 'Stirring', 'Light exposure'],
      correctIndex: 1
    }
  },
  [ExperimentType.AMMONIA_FOUNTAIN]: {
    id: ExperimentType.AMMONIA_FOUNTAIN,
    name: 'Ammonia Fountain Experiment',
    description: 'Demonstrate the high solubility of ammonia gas in water.',
    reaction: 'NH₃ + H₂O → NH₄⁺ + OH⁻',
    equipment: ['Round-bottom Flask', 'Trough', 'Glass Tube'],
    chemicals: ['Ammonia Gas', 'Water', 'Phenolphthalein'],
    steps: [
      'Fill the flask with ammonia gas.',
      'Invert it over water containing indicator.',
      'Observe the purple fountain effect.'
    ],
    safetyTips: ['Ammonia gas is pungent and irritating. Use in a fume hood.'],
    explanation: 'Ammonia dissolves rapidly in water, creating a partial vacuum that sucks more water into the flask.',
    quiz: {
      question: 'Why does the water rush into the flask in the ammonia fountain?',
      options: ['Gravity', 'High solubility of ammonia creating a vacuum', 'Pressure from outside', 'Heat'],
      correctIndex: 1
    }
  },
  [ExperimentType.ACID_RAIN]: {
    id: ExperimentType.ACID_RAIN,
    name: 'Acid Rain Simulation',
    description: 'Observe the effect of acidic water on marble and plants.',
    reaction: 'CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂',
    equipment: ['Beakers', 'Spray Bottle'],
    chemicals: ['Sulfuric Acid (dilute)', 'Marble chips', 'Small plant'],
    steps: [
      'Spray "acid rain" on marble chips.',
      'Observe the fizzing and erosion.',
      'Observe the effect on the plant over time.'
    ],
    safetyTips: ['Handle dilute acid with care.'],
    explanation: 'Acid rain reacts with carbonate rocks like marble and limestone, causing them to dissolve and erode.',
    quiz: {
      question: 'What type of rock is most affected by acid rain?',
      options: ['Granite', 'Basalt', 'Marble', 'Sandstone'],
      correctIndex: 2
    }
  },
  [ExperimentType.CHROMATOGRAPHY]: {
    id: ExperimentType.CHROMATOGRAPHY,
    name: 'Paper Chromatography',
    description: 'Separate the components of black ink.',
    reaction: 'Physical separation based on solubility and affinity.',
    equipment: ['Filter Paper', 'Beaker', 'Glass Rod'],
    chemicals: ['Black Ink', 'Water/Ethanol'],
    steps: [
      'Place a dot of ink on the filter paper.',
      'Suspend the paper in the solvent.',
      'Observe the different colors separating.'
    ],
    safetyTips: ['Ethanol is flammable.'],
    explanation: 'Different pigments in the ink travel at different speeds up the paper based on their solubility in the solvent.',
    quiz: {
      question: 'What property is used to separate pigments in chromatography?',
      options: ['Density', 'Boiling point', 'Solubility and affinity', 'Magnetism'],
      correctIndex: 2
    }
  },
  [ExperimentType.DENSITY_COLUMN]: {
    id: ExperimentType.DENSITY_COLUMN,
    name: 'Density Column Experiment',
    description: 'Layer liquids of different densities.',
    reaction: 'Physical layering based on density.',
    equipment: ['Graduated Cylinder'],
    chemicals: ['Honey', 'Dish Soap', 'Water', 'Vegetable Oil', 'Ethanol'],
    steps: [
      'Carefully pour honey into the cylinder.',
      'Layer soap, then water, then oil, then ethanol.',
      'Observe the distinct layers.'
    ],
    safetyTips: ['Do not mix too vigorously.'],
    explanation: 'Liquids that do not mix will layer themselves according to their density, with the densest at the bottom.',
    quiz: {
      question: 'Which liquid would be at the bottom of a density column?',
      options: ['Water', 'Oil', 'Honey', 'Ethanol'],
      correctIndex: 2
    }
  },
  [ExperimentType.SAPONIFICATION]: {
    id: ExperimentType.SAPONIFICATION,
    name: 'Soap Formation',
    description: 'Make soap from oil and a strong base.',
    reaction: 'Fat + NaOH → Glycerol + Soap',
    equipment: ['Beaker', 'Heating Plate', 'Stirring Rod'],
    chemicals: ['Vegetable Oil', 'Sodium Hydroxide', 'Salt'],
    steps: [
      'Heat oil and NaOH solution while stirring.',
      'Add salt to "salt out" the soap.',
      'Filter and dry the solid soap.'
    ],
    safetyTips: ['Sodium hydroxide is caustic. Use protection.'],
    explanation: 'Saponification is the hydrolysis of fats or oils under basic conditions to produce glycerol and the salt of a fatty acid (soap).',
    quiz: {
      question: 'What are the two main reactants in soap making?',
      options: ['Acid and Base', 'Oil and Sodium Hydroxide', 'Sugar and Yeast', 'Salt and Water'],
      correctIndex: 1
    }
  },
  [ExperimentType.ENDOTHERMIC]: {
    id: ExperimentType.ENDOTHERMIC,
    name: 'Endothermic Reaction',
    description: 'A reaction that absorbs heat from the surroundings.',
    reaction: 'Ba(OH)₂·8H₂O + 2NH₄SCN → Ba(SCN)₂ + 2NH₃ + 10H₂O',
    equipment: ['Beaker', 'Wooden Block', 'Thermometer'],
    chemicals: ['Barium Hydroxide', 'Ammonium Thiocyanate'],
    steps: [
      'Mix the two solids in a beaker.',
      'Place the beaker on a wet wooden block.',
      'Observe the temperature drop and the beaker freezing to the block.'
    ],
    safetyTips: ['Ammonia gas is produced. Use in a ventilated area.'],
    explanation: 'Endothermic reactions absorb energy, causing the temperature of the surroundings to decrease.',
    quiz: {
      question: 'What happens to the temperature in an endothermic reaction?',
      options: ['It increases', 'It stays the same', 'It decreases', 'It fluctuates'],
      correctIndex: 2
    }
  },
  [ExperimentType.EXOTHERMIC]: {
    id: ExperimentType.EXOTHERMIC,
    name: 'Exothermic Reaction',
    description: 'A reaction that releases heat into the surroundings.',
    reaction: 'CaO + H₂O → Ca(OH)₂ + Heat',
    equipment: ['Beaker', 'Thermometer'],
    chemicals: ['Calcium Oxide (Quicklime)', 'Water'],
    steps: [
      'Add water to the beaker.',
      'Add calcium oxide.',
      'Observe the temperature rise and steam.'
    ],
    safetyTips: ['Quicklime is caustic. The reaction can get very hot.'],
    explanation: 'Exothermic reactions release energy, usually in the form of heat, to the surroundings.',
    quiz: {
      question: 'What is a common sign of an exothermic reaction?',
      options: ['Temperature drop', 'Temperature rise', 'Color change only', 'No change'],
      correctIndex: 1
    }
  },
  [ExperimentType.HYDROGEN_TEST]: {
    id: ExperimentType.HYDROGEN_TEST,
    name: 'Hydrogen Gas Test',
    description: 'Identify hydrogen gas using the "pop" test.',
    reaction: '2H₂ + O₂ → 2H₂O',
    equipment: ['Test Tube', 'Splint', 'Lighter'],
    chemicals: ['Zinc', 'Hydrochloric Acid'],
    steps: [
      'React zinc with HCl in a test tube.',
      'Collect gas by holding another tube over it.',
      'Bring a burning splint to the mouth of the tube.',
      'Listen for the characteristic "pop" sound.'
    ],
    safetyTips: ['Hydrogen is highly flammable.'],
    explanation: 'Hydrogen gas reacts explosively with oxygen in the air when ignited, producing a small "pop" sound.',
    quiz: {
      question: 'What sound does hydrogen make when ignited in a test tube?',
      options: ['Hiss', 'Pop', 'Bang', 'Whistle'],
      correctIndex: 1
    }
  },
  [ExperimentType.FILTRATION]: {
    id: ExperimentType.FILTRATION,
    name: 'Filtration Experiment',
    description: 'Separate an insoluble solid from a liquid.',
    reaction: 'Physical separation.',
    equipment: ['Filter Paper', 'Funnel', 'Beaker', 'Conical Flask'],
    chemicals: ['Sand', 'Water'],
    steps: [
      'Mix sand and water in a beaker.',
      'Fold filter paper and place in funnel.',
      'Pour the mixture through the filter.',
      'Observe the clear filtrate and the residue.'
    ],
    safetyTips: ['Do not tear the filter paper.'],
    explanation: 'Filtration uses a porous barrier to separate solid particles from a liquid.',
    quiz: {
      question: 'What is the liquid that passes through the filter called?',
      options: ['Residue', 'Filtrate', 'Solvent', 'Solute'],
      correctIndex: 1
    }
  },
  [ExperimentType.EVAPORATION]: {
    id: ExperimentType.EVAPORATION,
    name: 'Evaporation of Salt Water',
    description: 'Recover a dissolved solid from a solution.',
    reaction: 'Physical separation.',
    equipment: ['Evaporating Dish', 'Bunsen Burner', 'Tripod', 'Wire Gauze'],
    chemicals: ['Salt Solution'],
    steps: [
      'Pour salt solution into the dish.',
      'Heat until the water evaporates.',
      'Observe the salt crystals remaining.'
    ],
    safetyTips: ['Be careful of "spitting" as the solid dries.'],
    explanation: 'Evaporation removes the solvent as vapor, leaving the non-volatile solute behind.',
    quiz: {
      question: 'What remains in the dish after evaporation of salt water?',
      options: ['Pure water', 'Salt crystals', 'Nothing', 'Steam'],
      correctIndex: 1
    }
  },
  [ExperimentType.SOLUBILITY]: {
    id: ExperimentType.SOLUBILITY,
    name: 'Solubility Experiment',
    description: 'Investigate how temperature affects the solubility of salt.',
    reaction: 'Physical dissolution.',
    equipment: ['Beakers', 'Heating Plate', 'Thermometer'],
    chemicals: ['Sodium Chloride', 'Water'],
    steps: [
      'Add salt to cold water until no more dissolves.',
      'Heat the water.',
      'Observe more salt dissolving as temperature rises.'
    ],
    safetyTips: ['Be careful with hot water.'],
    explanation: 'For most solids, solubility increases as the temperature of the solvent increases.',
    quiz: {
      question: 'How does increasing temperature usually affect the solubility of a solid in water?',
      options: ['Decreases it', 'Increases it', 'No effect', 'Makes it zero'],
      correctIndex: 1
    }
  },
  [ExperimentType.OXYGEN_TEST]: {
    id: ExperimentType.OXYGEN_TEST,
    name: 'Oxygen Gas Test',
    description: 'Identify oxygen gas using a glowing splint.',
    reaction: 'C + O₂ → CO₂',
    equipment: ['Test Tube', 'Splint', 'Lighter'],
    chemicals: ['Hydrogen Peroxide', 'Manganese Dioxide'],
    steps: [
      'Decompose H2O2 using MnO2 in a test tube.',
      'Light a splint and blow it out so it glows.',
      'Insert the glowing splint into the tube.',
      'Observe the splint relighting.'
    ],
    safetyTips: ['Oxygen supports combustion. Be careful with fire.'],
    explanation: 'Oxygen gas is a strong oxidizer and will cause a glowing splint to burst back into flame.',
    quiz: {
      question: 'What happens to a glowing splint in the presence of pure oxygen?',
      options: ['It goes out', 'It relights', 'It turns blue', 'It explodes'],
      correctIndex: 1
    }
  },
  [ExperimentType.TITRATION]: {
    id: ExperimentType.TITRATION,
    name: 'Acid-Base Titration',
    description: 'Determine the concentration of an unknown acid using a standard base.',
    reaction: 'HCl + NaOH → NaCl + H₂O',
    equipment: ['Burette', 'Conical Flask', 'Pipette'],
    chemicals: ['HCl (unknown)', 'NaOH (standard)', 'Phenolphthalein'],
    steps: [
      'Fill the burette with NaOH.',
      'Add HCl and indicator to the flask.',
      'Slowly add NaOH until a faint pink color persists.',
      'Record the volume used.'
    ],
    safetyTips: ['Handle burette carefully. Use a funnel to fill.'],
    explanation: 'Titration is a technique where a solution of known concentration is used to determine the concentration of an unknown solution.',
    quiz: {
      question: 'What is the point where the indicator changes color called?',
      options: ['Starting point', 'End point', 'Neutral point', 'Boiling point'],
      correctIndex: 1
    }
  },
  [ExperimentType.CRYSTALLIZATION]: {
    id: ExperimentType.CRYSTALLIZATION,
    name: 'Copper Sulfate Crystallization',
    description: 'Produce large, pure crystals from a saturated solution.',
    reaction: 'Physical phase change.',
    equipment: ['Beaker', 'Heating Plate', 'Thread', 'Pencil'],
    chemicals: ['Copper Sulfate', 'Distilled Water'],
    steps: [
      'Prepare a hot saturated solution of copper sulfate.',
      'Filter the solution into a clean beaker.',
      'Suspend a seed crystal using a thread.',
      'Allow to cool slowly over several days.'
    ],
    safetyTips: ['Copper sulfate is toxic. Do not touch crystals with bare hands.'],
    explanation: 'Crystallization occurs as a saturated solution cools and the solvent can no longer hold all the solute, causing it to deposit in a regular geometric pattern.',
    quiz: {
      question: 'What happens to solubility as a solution cools during crystallization?',
      options: ['It increases', 'It decreases', 'It stays the same', 'It becomes infinite'],
      correctIndex: 1
    }
  },
  [ExperimentType.SUBLIMATION]: {
    id: ExperimentType.SUBLIMATION,
    name: 'Sublimation of Iodine',
    description: 'Observe a solid turning directly into a gas.',
    reaction: 'I₂ (s) → I₂ (g)',
    equipment: ['Evaporating Dish', 'Glass Funnel', 'Cotton Wool', 'Bunsen Burner'],
    chemicals: ['Iodine Crystals'],
    steps: [
      'Place iodine crystals in the dish.',
      'Invert a funnel over the dish and plug with cotton.',
      'Heat gently.',
      'Observe purple vapors and crystals forming on the funnel walls.'
    ],
    safetyTips: ['Iodine vapors are toxic. Perform in a fume hood.'],
    explanation: 'Sublimation is the transition of a substance directly from the solid to the gas phase without passing through the intermediate liquid phase.',
    quiz: {
      question: 'What is the process called when a solid turns directly into a gas?',
      options: ['Evaporation', 'Melting', 'Sublimation', 'Condensation'],
      correctIndex: 2
    }
  },
};
