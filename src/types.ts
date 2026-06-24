export interface Character {
  id: string;
  name: string;
  humanAge: number;
  trueAge: string;
  rank: string;
  humanAppearance: string;
  trueAppearance: string;
  personality: string;
  mentalState: string;
  inventory: string;
  likes: string;
  dislikes: string;
  features: string;
  stats: {
    strength: number;
    intelligence: number;
  };
  classifiedInfo: {
    role: string;
    tendency: string;
    preferences: string;
  };
  color: string;
  rutCycle: string;
  imageUrl?: string;
}

export interface WorldRule {
  title: string;
  description: string;
  details?: string[];
  icon: string;
}

export interface Location {
  name: string;
  surface: string;
  truth: string;
  description: string;
}
