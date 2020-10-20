import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Transaction,
  TransactionServiceResponse,
  TransactionsService,
} from './../../services/transactions.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
})
export class TransactionDetailComponent implements OnInit {
  transactionID: string;
  transaction: Transaction = undefined;
  errorMessage: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((p) => {
      this.transactionID = p.get('id');
    });

    this.transactionsService
      .getByID(this.transactionID)
      .subscribe((res: TransactionServiceResponse) => {
        if (res.isSuccess) {
          this.transaction = res.transactions[0];
          return;
        }

        this.errorMessage = res.message;
      });
  }

  goToTransactions() {
    this.router.navigateByUrl('/transactions/all');
  }
}
