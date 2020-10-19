import { Injectable } from '@angular/core';
import { Transaction, TRANSACTIONS } from '../utils/mock-transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor() {}
  getTransactions(): Transaction[] {
    return TRANSACTIONS;
  }

  getByID(id: number | string): Transaction {
    return TRANSACTIONS.find((t) => t.id === Number(id));
  }
}
