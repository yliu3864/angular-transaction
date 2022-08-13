import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TransactionService } from "src/app/services/transaction.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-transaction-detail",
  templateUrl: "./transaction-detail.component.html",
  styleUrls: ["./transaction-detail.component.scss"]
})
export class TransactionDetailComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    private transactionService: TransactionService,
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private router: Router
  ) {}

  id: string;
  detailForm: FormGroup;
  data;

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    this.initDetailForm();
    this.getDetail(this.id);
  }

  getDetail(id: string) {
    this.transactionService.getTransactionDetail(id).subscribe(res => {
      console.log(res);
      this.data = res;
      let formated_date = this.datepipe.transform(this.data.date, "dd/MM/yyyy");
      this.detailForm.controls["id"].setValue(res.id);
      this.detailForm.controls["date"].setValue(formated_date);
      this.detailForm.controls["comment"].setValue(res.comment);
    });
  }

  initDetailForm() {
    this.detailForm = this.fb.group({
      id: [],
      date: [],
      comment: ["", [Validators.required, Validators.pattern("^[A-Za-z0-9]+$")]]
    });
  }

  updateComment() {
    let copy = Object.assign({}, this.detailForm.value);
    let date = new Date();
    copy.date = date;
    this.transactionService.updateTransactionDetail(copy).subscribe(
      res => {
        this.router.navigate(["/transaction-list"]);
      },
      err => {}
    );
  }
}
