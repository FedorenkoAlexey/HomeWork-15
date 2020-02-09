import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./Users/users.component";
import { CurrencyPipe } from "./pipes/currency.pipe";
import { UpperPipe } from "./pipes/upper.pipe";
import { BalanceColorDirective } from "./attribDirect/balanceColor.directive";
import { ZoomDirective } from "./attribDirect/zoom.directive";
import { ClickColorDirective } from "./attribDirect/click-color.directive";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CurrencyPipe,
    UpperPipe,
    BalanceColorDirective,
    ZoomDirective,
    ClickColorDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
