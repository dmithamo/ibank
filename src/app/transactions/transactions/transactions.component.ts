import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './../../services/transactions.service';
import { Transaction } from './../../utils/mock-transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionsService: TransactionsService) {}

  getTransactions(): void {
    this.transactions = this.transactionsService.getTransactions();
  }

  ngOnInit(): void {
    this.getTransactions();
  }
}
