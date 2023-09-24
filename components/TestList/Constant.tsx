export const tests = () => {
  return Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    score: Math.floor(Math.random() * 100),
    label: `Test ${i + 1}`,
  }));
};
export const FilterTest = [
  {
    label: "Të gjitha",
    id: 1,
    active: true,
  },
  {
    label: "Të përfunduara",
    id: 2,
    active: false,
  },
  {
    label: "Për t’u plotësuar",
    id: 3,
    active: false,
  },
];
