export const getAllTopics = (roadmaps) => {
  return roadmaps.flatMap((roadmap) =>
    roadmap.sections.flatMap((section) => section.topics)
  );
};

export const getActiveTopics = (roadmaps) => {
  return getAllTopics(roadmaps).filter(
    (topic) =>
      topic.status === "learning" || topic.status === "revising"
  );
};


export const getWeakTopics = (roadmaps) => {
  return getAllTopics(roadmaps).filter(
    (topic) => topic.confidence <= 2
  );
};


export const getRoadmapProgress = (roadmap) => {
  const topics = roadmap.sections.flatMap(
    (section) => section.topics
  );

  const masteredCount = topics.filter(
    (topic) => topic.status === "mastered"
  ).length;

  return Math.round((masteredCount / topics.length) * 100);
};

