import { SortData } from "./SortData";

export class Numbers extends SortData {
  constructor(public number: number[]) {
    super();
  }

  compare(indexLeft: number, indexRight: number): boolean {
    return this.number[indexLeft] > this.number[indexRight];
  }

  swap(indexLeft: number, indexRight: number): void {
    const storeLeft = this.number[indexLeft];
    this.number[indexLeft] = this.number[indexRight];
    this.number[indexRight] = storeLeft;
  }

  get length(): number {
    return this.number.length;
  }
}
