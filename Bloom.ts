export interface Plant {
  id: string;
  name: string;
  description: string;
  plantedDate: string;
  category: "habit" | "goal" | "mindset";
  status: "seed" | "sprout" | "growing" | "blooming";
  waterCount: number;
  lastWatered?: string;
}

export interface BloomingItem {
  id: string;
  plantId: string;
  name: string;
  progress: number;
  streak: number;
  nextAction: string;
}

export interface BloomingPost {
  id: string;
  userId: string;
  type: 'bloom';
  photoUrl?: string;
  caption: string;
  timestamp: number;
  reactions: {
    growth: number; // 🌱
    applause: number; // 👏
    love: number; // 💜
  };
  isShared: boolean;
}

export interface WisdomQuote {
  id: string;
  text: string;
  author?: string;
}

export interface PruningItem {
  id: string;
  name: string;
  reason: string;
  prunedDate: string;
  lesson: string;
}

export interface PruningPost {
  id: string;
  userId: string;
  type: 'prune';
  habitName: string;
  whyItMatters: string;
  strategy?: string;
  severity: 'Low' | 'Medium' | 'High';
  timestamp: number;
  date: string;
  isShared: boolean;
}
