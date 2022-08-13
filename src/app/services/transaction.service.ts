import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable({
  providedIn: "root"
})
export class TransactionService {
  private hearders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  private readonly domain = "http://localhost:3001/transaction";
  constructor(private http: HttpClient) {}

  listAllTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.domain, {
      headers: this.hearders
    });
  }

  getTransactionDetail(id: string): Observable<Transaction> {
    const uri = `${this.domain}/${id}`;
    return this.http.get<Transaction>(uri, {
      headers: this.hearders
    });
  }

  updateTransactionDetail(playload: Transaction): Observable<any> {
    const url = `${this.domain}/${playload.id}`;
    return this.http.put(url, playload);
  }
}
