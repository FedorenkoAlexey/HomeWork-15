import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myFibonacci"
})
export class FibonacciPipe implements PipeTransform {
  transform(num: number, args?: any): string {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return `id:${b}`;
  }
}
