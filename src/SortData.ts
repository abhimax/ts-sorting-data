import { Numbers } from "./Numbers";

export class SortData {
  constructor(public data: Numbers) {}
  sort(): void {
    const length = this.data.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.data.compare(j, j + 1)) {
          this.data.swap(j, j + 1);
        }
      }
    }
  }
}
