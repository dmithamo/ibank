import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './transactions/transactions.component';

const transactionRoutes: Routes = [
  {
    path: 'transactions',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'all',
        component: TransactionsComponent,
      },
      {
        path: '',
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
];

@NgModule({
  imports: [RouterModule.forChild(transactionRoutes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
