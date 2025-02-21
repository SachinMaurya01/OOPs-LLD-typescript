export class Book {
  private bookName: string;
  private price: Number;

  constructor(bookName: string, price: Number) {
    this.bookName = bookName;
    this.price = price;
  }

  public getBookName(): string {
    return this.bookName;
  }

  public getPrice(): Number {
    return this.price;
  }

  public toString(): string {
    return `Book: ${this.bookName}, Price: ${this.price}`;
  }
}