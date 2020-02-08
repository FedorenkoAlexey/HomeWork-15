import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UsersComponent } from "./Users/users.component";
import { CurrencyPipe } from "./pipes/currency.pipe";
import { UpperPipe } from "./pipes/upper.pipe";

@NgModule({
  declarations: [AppComponent, UsersComponent, CurrencyPipe, UpperPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
