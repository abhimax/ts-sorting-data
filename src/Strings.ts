export class Strings {
  constructor(public str: string) {}

  get length(): number {
    return this.str.length;
  }
  compare(indexLeft: number, indexRight: number): boolean {
    return (
      this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase()
    );
  }

  swap(indexLeft: number, indexRight: number): void {
    const letters = [...this.str];
    const leftStore = letters[indexLeft];
    letters[indexLeft] = letters[indexRight];
    letters[indexRight] = leftStore;
    this.str = letters.join("");
  }
}
