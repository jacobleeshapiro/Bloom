import { Plant, BloomingItem, PruningItem } from "@/types/bloom";

export const mockPlants: Plant[] = [
  {
    id: "1",
    name: "Morning Meditation",
    description: "5 minutes of mindfulness to start the day",
    plantedDate: "2025-01-01",
    category: "habit",
    status: "growing",
    waterCount: 8,
    lastWatered: "2025-01-09",
  },
  {
    id: "2",
    name: "Read 20 Pages Daily",
    description: "Expand knowledge through consistent reading",
    plantedDate: "2025-01-05",
    category: "habit",
    status: "sprout",
    waterCount: 3,
    lastWatered: "2025-01-08",
  },
  {
    id: "3",
    name: "Learn Spanish",
    description: "Practice 15 minutes on language app",
    plantedDate: "2024-12-28",
    category: "goal",
    status: "blooming",
    waterCount: 12,
    lastWatered: "2025-01-09",
  },
];

export const mockBloomingItems: BloomingItem[] = [
  {
    id: "b1",
    plantId: "3",
    name: "Learn Spanish",
    progress: 75,
    streak: 12,
    nextAction: "Complete today's lesson",
  },
  {
    id: "b2",
    plantId: "1",
    name: "Morning Meditation",
    progress: 60,
    streak: 8,
    nextAction: "Tomorrow morning at 7 AM",
  },
];

export const mockPruningItems: PruningItem[] = [
  {
    id: "p1",
    name: "Late Night Social Media",
    reason: "Disrupting sleep schedule",
    prunedDate: "2025-01-07",
    lesson: "Setting boundaries creates space for growth",
  },
  {
    id: "p2",
    name: "Perfectionism in Projects",
    reason: "Preventing completion",
    prunedDate: "2025-01-05",
    lesson: "Progress over perfection nurtures real growth",
  },
];
