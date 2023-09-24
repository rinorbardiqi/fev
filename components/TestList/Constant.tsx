export const tests = () => {
  return Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    score: Math.floor(Math.random() * 100),
    label: `Test ${i}`,
  }));
};
