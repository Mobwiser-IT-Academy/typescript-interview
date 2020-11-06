import {Supermarket, Product, Bag} from '../src/question-3';

describe('validate question 3', () => {
  let supermarket: Supermarket;
  const soyMilk = new Product('Soy milk', 0.3);
  const rice = new Product('Rice', 0.45);
  const banana = new Product('Banana', 2);
  const beans = new Product('Beans', 1);
  const eggs = new Product('Eggs', 2.34);
  const beer = new Product('Beer', 6);
  const wine = new Product('Wine', 5);
  beforeAll(() => {
    const limitWithoutDiscount = 10;
    const discountPercentage = 0.1;
    supermarket = new Supermarket(limitWithoutDiscount, discountPercentage);

    /**
     * Total: 11,9
     * Discount 1,19
     */
    const bag1 = new Bag();
    addToBag(bag1, rice, 2);
    addToBag(bag1, banana, 4);
    addToBag(bag1, beans, 3);
    supermarket.registerTransaction(bag1);

    /**
     * Total: 25,36
     * Discount 2,536
     */
    const bag2 = new Bag();
    addToBag(bag2, wine, 2);
    addToBag(bag2, beer, 1);
    addToBag(bag2, eggs, 4);
    supermarket.registerTransaction(bag2);

    /**
     * Total: 0,6
     * Discount 0
     */
    const bag3 = new Bag();
    addToBag(bag3, soyMilk, 2);
    supermarket.registerTransaction(bag3);

    /**
     * Total: 10
     * Discount 1
     */
    const bag4 = new Bag();
    addToBag(bag4, wine, 2);
    supermarket.registerTransaction(bag4);
  });
  it('RQ0 - Check number of transactions with discount', () => {
    expect(supermarket.numberOfTransactionsWithDiscount).toBe(3);
  });

  it('RQ1 - Check total discount in the supermarket', () => {
    expect(supermarket.totalDiscountInSupermarket).toBe(4.726);
  });

  function addToBag(bag: Bag, product: Product, quantity: number) {
    for (let i = 0; i < quantity; ++i) {
      bag.add(product);
    }
  }
});
