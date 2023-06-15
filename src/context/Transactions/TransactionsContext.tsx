import { Dispatch, createContext } from "react";
import { TransactionsProviderProps } from "../../interfaces/transaction";
import { TransactionAction } from "./TransactionsReducer";

export type TransactionContextProps = {
    transactions: TransactionsProviderProps;
    dispatch: Dispatch<TransactionAction>;
};

export const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);
