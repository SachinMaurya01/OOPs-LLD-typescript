import { Aggregator } from "./Aggregator";
import { Book } from "./Book";
import { BookIterator } from "./BookIterator";
import { Iterator } from "./Iterator";

export class Library implements Aggregator {
  private bookList: Book[] = [];

  constructor(bookList: Book[]) {
    this.bookList=bookList;
  }

  public createIterator(): Iterator {
    return new BookIterator(this.bookList);
  }

}