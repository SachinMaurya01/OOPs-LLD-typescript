import { Book } from "./Book";
import { BookIterator } from "./BookIterator";


class IteratorPattern {
  static main(): void {
    const Book1 = new Book('Book1', 100);
    const Book2 = new Book('Book2', 200);
    const Book3 = new Book('Book3', 300);
    const bookList = [Book1, Book2, Book3];
    const bookIterator = new BookIterator(bookList);
    while (bookIterator.hasNext()) {
      const book = bookIterator.next();
      console.log(book?.toString());
    }
  }
}

IteratorPattern.main();