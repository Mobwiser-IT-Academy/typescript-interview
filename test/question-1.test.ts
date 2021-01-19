import { analyseQuotes, Quote } from "../src/question-1";

test("validate question 1", () => {
  const quotes: Quote[] = [
    { title: "random quote", category: "Sports" },
    { title: "random quote 2", category: "Politics" },
    { title: "random quote 3", category: "Motivational" },
    { title: "random quote 4", category: "Sports" },
  ];
  const expectedResult = {
    Sports: 2,
    Politics: 1,
    Motivational: 1,
  };
  expect(analyseQuotes(quotes)).toEqual(expectedResult);
});
