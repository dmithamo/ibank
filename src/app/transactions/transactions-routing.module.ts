import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

const transactionRoutes: Routes = [
  {
    path: 'transactions',
    children: [
      {
        path: 'all',
        component: TransactionsComponent,
      },
      {
        path: 'create',
        component: NewTransactionComponent,
      },
      {
        path: ':id',
        component: TransactionDetailComponent,
      },
    ],
  },
  {
    path: 'transactions',
    redirectTo: '/transactions/all',
  },
];

@NgModule({
  imports: [RouterModule.forChild(transactionRoutes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
