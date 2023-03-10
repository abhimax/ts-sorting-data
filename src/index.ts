import { Numbers } from "./Numbers";
//import { SortData } from "./SortData";
import { Strings } from "./Strings";

const dateArray = [
  new Date(2010, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

//Array sort
const years = dateArray.map((date) => {
  return date.getFullYear();
});
const numbersData = new Numbers(years);
//const sortData = new SortData(numbersData);
numbersData.sort();
console.log(numbersData);

const dataStrings = new Strings("ABhiMan");
//const dataSorting = new SortData(dataStrings);
dataStrings.sort();
console.log(dataStrings);
