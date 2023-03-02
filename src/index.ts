class SortData {
  constructor(public data: number[]) {}
  sort(): void {
    const { length } = this.data;
    console.log("BEFORE >>", this.data);
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.data[j] > this.data[j + 1]) {
          const left = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = left;
        }
      }
    }
    console.log("SORTED >>", this.data);
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
//console.log(years);
