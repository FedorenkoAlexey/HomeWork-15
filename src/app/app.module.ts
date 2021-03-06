import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./Users/users.component";
import { CurrencyPipe } from "./pipes/currency.pipe";
import { UpperPipe } from "./pipes/upper.pipe";
import { BalanceColorDirective } from "./attribDirect/balanceColor.directive";
import { ZoomDirective } from "./attribDirect/zoom.directive";
import { ClickColorDirective } from "./attribDirect/click-color.directive";
import { MyIfDirective } from "./structDirect/myIf.directive";
import { TimeoutDirective } from "./structDirect/timeout.directive";
import { RepeatDirective } from "./structDirect/repeat.directive";
import { FibonacciPipe } from "./pipes/fibonacci.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CurrencyPipe,
    UpperPipe,
    FibonacciPipe,
    BalanceColorDirective,
    ZoomDirective,
    ClickColorDirective,
    MyIfDirective,
    TimeoutDirective,
    RepeatDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
