import { type Expense } from '../types/expenses.types';

export const generate7DaysExpensesMock = (): Expense[] => {
  const expenses: Expense[] = [];
  for (let i = 0; i < 7; i++) {
    expenses.push({
      amount: Number((Math.random() * 1000).toFixed(2)),
      date: new Date(new Date().setDate(new Date().getDate() - i)).toString(),
    });
  }
  return expenses;
}