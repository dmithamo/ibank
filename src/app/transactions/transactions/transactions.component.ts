import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './../../services/transactions.service';
import { Transaction } from './../../utils/mock-transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  errorMessage: string = '';

  constructor(private transactionsService: TransactionsService) {}

  getTransactions(): void {
    this.transactionsService.getTransactions().subscribe((res) => {
      if (res.isSuccess) {
        this.transactions = res.transactions;
        return;
      }
      this.errorMessage = res.message;
    });
  }

  ngOnInit(): void {
    this.getTransactions();
  }
}
