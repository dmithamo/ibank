export interface Transaction {
  id: number | string;
  title: string;
  amount: number;
  type: 'DEBIT' | 'CREDIT';
  timestamp: Date;
}

export const TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    title: 'Transfer funds to Mpesa',
    amount: 10000,
    type: 'DEBIT',
    timestamp: new Date(),
  },
  {
    id: 2,
    title: 'Deposit at ATM',
    amount: 20000,
    type: 'CREDIT',
    timestamp: new Date(),
  },
  {
    id: 3,
    title: 'Deposit at ATM',
    amount: 10000,
    type: 'CREDIT',
    timestamp: new Date(),
  },
];
