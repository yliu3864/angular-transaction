import { Component, OnInit } from "@angular/core";
import { TransactionService } from "../services/transaction.service";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.scss"]
})
export class TransactionListComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private datepipe: DatePipe
  ) {}
  dataSource: any;
  displayedColumns: string[] = ["ID", "Date", "Comments", "Action"];
  ngOnInit() {
    this.getAllTransaction();
  }

  getAllTransaction() {
    this.transactionService.listAllTransaction().subscribe(res => {
      this.dataSource = res;
      this.dataSource.forEach(transaction => {
        transaction.date = this.datepipe.transform(
          transaction.date,
          "dd/MM/yyyy"
        );
      });
    });
  }

  goToDetail(id: string) {
    this.router.navigate(["/transaction-list/1"]);
  }
}
