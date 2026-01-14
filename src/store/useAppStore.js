import { create } from "zustand";

const useAppStore = create(() => ({
  roadmaps: [
    {
      id: 1,
      title: "React",
      description: "Learn react in 2026",
      sections: [
        {
          id: 101,
          title: "Basics",
          topics: [
            {
              id: 1001,
              title: "Functional Components",
              status: "mastered",
              confidence: 5,
              lastStudiedAt: null,
            },
            {
              id: 1002,
              title: "JSX",
              status: "mastered",
              confidence: 5,
              lastStudiedAt: null,
            },
          ],
        },
        {
          id: 102,
          title: "Hooks",
          topics: [
            {
              id: 2001,
              title: "useState",
              status: "mastered",
              confidence: 5,
              lastStudiedAt: null,
            },
            {
              id: 2002,
              title: "useEffect",
              status: "revising",
              confidence: 3,
              lastStudiedAt: null,
            },
          ],
        },
      ],
    },
  ],
}));

export default useAppStore;
