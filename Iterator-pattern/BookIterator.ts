import { Book } from "./Book";
import { Iterator } from "./Iterator";

export class BookIterator implements Iterator {
  private bookList: Book[] = [];
  private currentIndex: number = 0;

  constructor(bookList: Book[]) {
    this.bookList = bookList;
  }

  public hasNext(): boolean {
    if (this.currentIndex < this.bookList.length) {
      return true;
    }
    return false;
  }

  public next(): Book|null {
    if (this.hasNext()) {
      return this.bookList[this.currentIndex++];
    }
    return null;
  }
}