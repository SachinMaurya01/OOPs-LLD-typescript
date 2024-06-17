import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// const sorter3 = new Sorter(linkedList);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
console.log(numbersCollection);
console.log(charactersCollection);
linkedList.print();