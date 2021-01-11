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
 * - "numberOfTransactionsWithDiscount" - this should be a getter that returns the number of transactions with discount
 * - "totalDiscountInSupermarket" - this should be a getter that returns the total discount applied in the supermarket
 *
 */

export class Product{

  name:string;
  price:number;

  constructor (name,price){
      this.name = name
      this.price = price
  }


}

export class Bag {

products:Product[]=[];

add(product:Product){

  this.products.push(product)

}

get totalSpent(){

let total:number;

  for (let i=0; i< this.products.length; i++){
      total+= this.products[i].price
  }

  return total
}

}

export class Transaction {

bag:Bag;


constructor (bag:Bag){

  this.bag = bag;
 let date = new Date();
 let time = date.getTime();
 
}



}


export class Supermarket{


transactions:Transaction[]= [];
limitWithoutDiscount:number;
discountPercentage:number;
priceWithDiscount:number;
discountValue:number;




constructor(limitWithoutDiscount:number,discountPercentage:number){

limitWithoutDiscount = this.limitWithoutDiscount;
discountPercentage = this.discountPercentage;

}

registerTransaction(transaction){

this.transactions.push(transaction)
return this.transactions
}

hasDiscount(transaction:Transaction):boolean{

if (this.limitWithoutDiscount>transaction.bag.totalSpent){
return true
} 


}



totalDiscount(transaction:Transaction){

if(this.hasDiscount){

  this.priceWithDiscount = transaction.bag.totalSpent-(transaction.bag.totalSpent*this.discountPercentage);


  this.discountValue=transaction.bag.totalSpent-this.priceWithDiscount

}


}


get numberOfTransactionsWithDiscount(){
 

  let arr=[]

   for(let i = 0; i<this.transactions.length; i++){

    if(this.hasDiscount(this.transactions[i]))
   arr.push(this.transactions[i])

 }

return arr.length

}

get totalDiscountInSupermarket(){
 
return


 }


}

