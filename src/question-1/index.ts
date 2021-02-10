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
interface Quote {
    readonly title : string,
    readonly category : string
}

function analyseQuotes(quote : Quote[]) : Object {
    let count : Object = {};
    for(let i = 0; i<quote.length; i++) {
        if(count.hasOwnProperty(quote[i].category)) {
            count[quote[i].category] += 1;
        } else {
            count[quote[i].category] = 1;
        }
    }
    return count;
}

export { Quote, analyseQuotes}