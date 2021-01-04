/**
 * Supermarket challenge
 *
 * Build the following objects
 *  - Product
 *  - Bag
 *  - Transaction
 *  - Supermarket
 *
 * A "Product" has two attributes ("name" and "price")
 *  - Add a constructor that received these two attributes
 *
 *
 * A "Bag" has one attribute ("products") that is an array of products.
 * Add the following methods to the Bag object:
 *  - "totalSpent" - this should be a getter and it should return the total price of all products existing in the bag.
 *  - "add" - add a new product to the bag
 *
 *
 * A "Transaction" contains two attributes:
 *  - "bag" - a bag;
 *  - "time" - a datetime when the transaction was made;
 *
 * Add a constructor that received only a bag. the time should be the date time when the transaction is created.
 *
 *
 * The "Supermarket"
 *  - "transactions" - stores a list of transactions
 *  - "limitWithoutDiscount" - the limit spent where the user won't have any discount
 *  - "discountPercentage" - a discount percentage if the "total spent" is greater than the "limitWithoutDiscount"
 *
 * Add a constructor that receives the limitWithoutDiscount and the discountPercentage.
 * Add the following methods:
 * - "registerTransaction" - this method should receive a bag and register a new transaction with that bag
 * - "hasDiscount" - this method should receive a transaction and check whether the transactions had a discount or not
 * - "totalDiscount" - this method should receive a transaction and check the total discount for that transaction
 * - "numberOfTransactionsWithDiscount" - this should be a getter that returns the number of transactions without discount
 * - "totalDiscountInSupermarket" - this should be a getter that returns the total discount applied in the supermarket
 *
 */

 export class Product{

    name:string;
    price:number;

    constructor (name,price){
        name = this.name
        price = this.price
    }


 }

 export class Bag {

  products:Product[]=[];

  add(product:Product){

    this.products.push(product)

  }

  totalSpent(){

 let total:number;

    for (let i=0; i< this.products.length; i++){
        total+= this.products[i].price
    }

    return total
  }

 }

export class Transaction{

  bag:Bag;
  

  constructor (bag:Bag){
    bag = this.bag
   let date = new Date();
   let time = date.getTime();
  }


}


export class Supermarket{

  transactions=[];
  limitWithoutDiscount:number;
  discountPercentage:number;

  constructor(limitWithoutDiscount:number,discountPercentage:number){

  limitWithoutDiscount = this.limitWithoutDiscount;
  discountPercentage = this.discountPercentage;

  }
  
  registerTransaction(bag:Bag){

this.transactions.push(bag)
return this.transactions
  }

  hasDiscount(transaction:Transaction){


   
  }

 
 totalDiscount(transaction:Transaction){

  


  }

  numberOfTransactionsWithDiscount(){
return 0
  }

  totalDiscountInSupermarket(b){
    return b
  }

}