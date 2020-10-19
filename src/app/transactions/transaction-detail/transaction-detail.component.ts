import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from './../../services/transactions.service';
import { Transaction } from './../../utils/mock-transactions';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
})
export class TransactionDetailComponent implements OnInit {
  transactionID: string;
  transaction: Transaction = undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((p) => {
      this.transactionID = p.get('id');
    });

    this.transaction = this.transactionsService.getByID(this.transactionID);
  }

  goToTransactions() {
    this.router.navigate(['../', 'all'], { relativeTo: this.activeRoute });
  }
}
