import { useContext } from "react";
import { TransactionContext } from "./TransactionsContext";

export const useTransactions = () => useContext(TransactionContext).transactions;
export const useTransactionsDispatch = () => useContext(TransactionContext).dispatch;
