import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    TransactionDetailComponent,
    NewTransactionComponent,
    TransactionsComponent,
  ],
  imports: [CommonModule, TransactionsRoutingModule],
})
export class TransactionsModule {}
