import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { TransactionDetailComponent } from "./transaction-list/transaction-detail/transaction-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionDetailComponent
  ],
  imports: [BrowserModule, HttpClientModule, SharedModule, AppRoutingModule],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
