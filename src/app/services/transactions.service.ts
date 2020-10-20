import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TRANSACTIONS } from './../utils/mock-transactions';

export interface TransactionServiceResponse {
  transactions: Transaction[];
  isSuccess: boolean;
  message: string;
}

export interface Transaction {
  id: number | string;
  title: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  timestamp: Date;
}
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactionsUrl = 'api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<TransactionServiceResponse> {
    return this.http.get<TransactionServiceResponse>(this.transactionsUrl).pipe(
      tap((res) => {
        console.log(res, '<<<THE RESPONSE');
      }),
      catchError(
        this.handleError<TransactionServiceResponse>('getTransactions', null)
      )
    );
  }

  getByID(id: number | string): Observable<TransactionServiceResponse> {
    return this.http
      .get<TransactionServiceResponse>(`${this.transactionsUrl}/${id}`)
      .pipe(
        tap((res) => {
          console.log(res, '<<<THE RESPONSE');
        }),
        catchError(
          this.handleError<TransactionServiceResponse>(`getByID::${id}`, null)
        )
      );
  }

  handleError<T>(operation = 'transactionService', result?: any) {
    return (error: any): Observable<any> => {
      // TODO: Log error to some place with persistent
      console.error(error);

      if (operation === 'getTransactions') {
        // HIJACK FOR TESTING PURPOSES
        return of(this.constructRes(TRANSACTIONS, error.message, true));
      }
      if (operation.includes('getByID')) {
        // HIJACK FOR TESTING PURPOSES
        const id = Number(operation.split('::')[1]);
        return of(
          this.constructRes([TRANSACTIONS[id - 1]], error.message, true)
        );
      }
      return of(this.constructRes([], error.message, false));
    };
  }

  constructRes(
    data: Transaction[],
    message: string,
    isSuccess: boolean
  ): TransactionServiceResponse {
    return {
      transactions: data,
      isSuccess,
      message,
    };
  }
}
