class SortData {
  constructor(public data: number[]) {}
  sort(): void {
    throw new Error("Method not implemented.");
  }
}

const dateArray = [
  new Date(2010, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

const years = dateArray.map((date) => {
  return date.getFullYear();
});
const sortData = new SortData(years);
sortData.sort();
console.log(years);
