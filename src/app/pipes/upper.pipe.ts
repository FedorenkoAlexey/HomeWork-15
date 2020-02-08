import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myUpperCase"
})
export class UpperPipe implements PipeTransform {
  transform(user: string, args?: any): string {
    return user.toUpperCase();
  }
}
