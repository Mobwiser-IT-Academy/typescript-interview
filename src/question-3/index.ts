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
class Product {
    name : string;
    price : number;

    constructor(name : string, price : number) {
        this.name = name;
        this.price = price;
    }
}

class Bag {
    products : Product[] = [];

    totalSpent() : number {
        let total : number = 0;
        for(let i = 0; i<this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
    }

    add(product : Product) : void {
        this.products.push(product);
    }
}

class Transaction {
    bag : Bag;
    time : Date;

    constructor(bag : Bag) {
        this.bag = bag;
        this.time = new Date();
    }
}

class Supermarket {
    transactions : Transaction[] = [];
    limitWithoutDiscount : number;
    discountPercentage : number;

    constructor(limitWithoutDiscount : number, discountPercentage : number) {
        this.discountPercentage = discountPercentage;
        this.limitWithoutDiscount = limitWithoutDiscount;
    }

    registerTransaction(bag : Bag) : void {
        let transaction = new Transaction(bag);
        this.transactions.push(transaction);
    }

    hasDiscount(transaction : Transaction) : boolean {
        return transaction.bag.totalSpent() >= this.limitWithoutDiscount;
    }

    totalDiscount(transaction : Transaction) : number {
        if(this.hasDiscount(transaction)) {
            return transaction.bag.totalSpent() * this.discountPercentage;
        }
        return 0;
    }

    numberOfTransactionsWithDiscount() : number {
        let total : number = 0;
        for(let i = 0; i<this.transactions.length; i++) {
            if(this.hasDiscount(this.transactions[i])) {
                total += 1;
            }
        }
        return total;
    }

    totalDiscountInSupermarket() : number {
        let totalDiscount : number = 0;
        for(let  i = 0; i<this.transactions.length; i++) {
            totalDiscount += this.totalDiscount(this.transactions[i]);
        }
        return totalDiscount;
    }
}


export { Product, Supermarket, Bag, Transaction };