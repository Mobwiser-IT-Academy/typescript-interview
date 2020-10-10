/**
 * Question 1 - Export a function called "analyseQuotes" that receives an array of quotes and
 * counts the number of counts by category.
 *
 * Note:
 *  Create an interface for the "Quote" object and the function should receive a Quote[] object.
 *  This interface should also be exported.
 *
 * Example:
 * const quotes = [
 *  {title: 'random quote', category: 'Sports'},
 *  {title: 'random quote 2', category: 'Politics'},
 *  {title: 'random quote 3', category: 'Motivational'},
 * ];
 * console.log(analyseQuotes(quotes));
 * > {'Sports': 1, 'Politcs': 1, 'Motivational': 1}
 */
export interface Quote {
  title: string;
  category: string;
}

export function analyseQuotes(quotes: Quote[]): Record<string, number> {
  const counter: Record<string, number> = {};
  for (const quote of quotes) {
    if (!counter[quote.category]) {
      counter[quote.category] = 0;
    }
    counter[quote.category] += 1;
  }
  return counter;
}