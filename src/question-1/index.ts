import { title } from "process";

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
export interface Quote  {

     title:string;
     category:string;

  

    };

export function analyseQuotes(quotes:Quote[]): Record<string, number> 
{

    let objectResult={};
    let quoteCategory= quotes;


//for(let i = quotes.length-1; i>=0; i--){

for(let i=0; i<quotes.length; i++){

    objectResult[quotes[i].category] =+ 1;
}

return objectResult


}






    






