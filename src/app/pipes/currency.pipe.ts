import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myCurrency"
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value ? `$ ${value}.00` : "";
  }
}
