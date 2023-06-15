import { Reducer } from "react";
import { Transaction, TransactionsProviderProps } from "./../../interfaces/transaction";

export const INITIAL_STATE = {
    transactions: [],
    totalResults: 0,
    currentPage: 0,
    totalPages: 0,
    loadingTransactions: false,
};

export enum TransactionTypes {
    ADD_TRANSACTIONS = "add",
    SET_LOADING_TRANSACTIONS = "setLoadingTransactions",
    SET_CURRENT_PAGE = "setCurrentPage"
}
export type TransactionAction =
    | {
          type: TransactionTypes.ADD_TRANSACTIONS;
          payload: {
              transactions: Transaction[];
              totalResults: number;
              currentPage: number;
              totalPages: number;
          };
      }
    | {
          type: TransactionTypes.SET_LOADING_TRANSACTIONS;
          payload: {
              loadingTransactions: boolean;
          };
      }
    |
    {
        type:TransactionTypes.SET_CURRENT_PAGE;
        payload:{
            currentPage:number;
        }
    }

export const transactionReducer: Reducer<TransactionsProviderProps, TransactionAction> = (
    state,
    action
) => {
    switch (action.type) {
        case TransactionTypes.ADD_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.payload.transactions,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                totalResults: action.payload.totalResults,
            };
        }
        case TransactionTypes.SET_LOADING_TRANSACTIONS: {
            return {
                ...state,
                loadingTransactions: action.payload.loadingTransactions,
            };
        }
        case TransactionTypes.SET_CURRENT_PAGE:{
            return{
                ...state,
                currentPage:action.payload.currentPage
            }
        }
    }
};
