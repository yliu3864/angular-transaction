import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { TransactionDetailComponent } from "./transaction-list/transaction-detail/transaction-detail.component";

const routes: Routes = [
  { path: " ", redirectTo: "/transaction-list", pathMatch: "full" },
  {
    path: "transaction-list",
    component: TransactionListComponent
  },
  { path: "transaction-list/:id", component: TransactionDetailComponent },
  { path: "**", redirectTo: "/transaction-list" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
