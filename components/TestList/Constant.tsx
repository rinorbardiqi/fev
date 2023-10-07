import { ResultType } from "../../util/databaseType";

export const updateScores = (filterId: number, data?: ResultType[]) => {
  const testsArray = Array.from({ length: 80 }).map((_, index) => ({
    id: index + 1,
    score: 0,
    label: `Test ${index + 1}`,
  }));
  enum FilterData {
    ALL = 1,
    FINISHED = 2,
    FAILED = 3,
  }
  const updatedTests = testsArray
    .map((testData) => {
      const matchingTest = data?.find((item) => item.test === testData.id);
      if (!matchingTest) {
        return filterId === FilterData.FINISHED ? undefined : testData;
      }
      switch (filterId) {
        case FilterData.ALL:
          return {
            ...testData,
            score: matchingTest.perc,
          };

        case FilterData.FINISHED:
          if (matchingTest.perc > 84) {
            return {
              ...testData,
              score: matchingTest.perc,
            };
          }
          break;
        case FilterData.FAILED:
          if (matchingTest.perc < 85) {
            return {
              ...testData,
              score: matchingTest.perc,
            };
          }
          break;
        default:
          return testData;
      }
    })
    .filter(Boolean) as { id: number; score: number; label: string }[];

  return updatedTests;
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
