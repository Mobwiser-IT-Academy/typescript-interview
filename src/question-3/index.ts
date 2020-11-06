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
export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export class Bag {
  products: Product[] = [];

  public get totalSpent() {
    return this.products.reduce((total: number, product: Product) => {
      total += product.price;
      return total;
    }, 0);
  }

  public add(product: Product) {
    this.products.push(product);
  }
}

export class Transaction {
  bag: Bag;
  time: Date;

  constructor(bag) {
    this.bag = bag;
    this.time = new Date();
  }
}

export class Supermarket {
  transactions: Transaction[] = [];
  limitWithoutDiscount: number;
  discountPercentage: number;
  constructor(limitWithoutDiscount: number, discountPercentage: number) {
    this.limitWithoutDiscount = limitWithoutDiscount;
    this.discountPercentage = discountPercentage;
  }

  public registerTransaction(bag: Bag) {
    this.transactions.push(new Transaction(bag));
  }

  public hasDiscount(transaction: Transaction): boolean {
    return transaction.bag.totalSpent >= this.limitWithoutDiscount;
  }

  public totalDiscount(transaction: Transaction): number {
    return this.hasDiscount(transaction)
      ? transaction.bag.totalSpent * this.discountPercentage
      : 0;
  }

  public get numberOfTransactionsWithDiscount() {
    return this.transactions.reduce(
      (total: number, transaction: Transaction) => {
        if (this.hasDiscount(transaction)) {
          total++;
        }
        return total;
      },
      0,
    );
  }

  public get totalDiscountInSupermarket() {
    return this.transactions.reduce(
      (total: number, transaction: Transaction) =>
        (total += this.totalDiscount(transaction)),
      0,
    );
  }
}
