import { analyseQuotes, Quote } from "../src/question-1";

test("validate question 1", () => {
  const quotes: Quote[] = [
    { title: "random quote", category: "Sports" },
    { title: "random quote 2", category: "Politics" },
    { title: "random quote 3", category: "Motivational" },
  ];
  const expectedResult = {
    Sports: 1,
    Politics: 1,
    Motivational: 1,
  };
  expect(analyseQuotes(quotes)).toEqual(expectedResult);
});
