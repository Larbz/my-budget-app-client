import { Category } from "./categories";

export interface TransactionResponse {
    res: boolean;
    totalResults: number;
    currentPage: number;
    totalPages: number;
    data: Transaction[];
}
export interface Transaction {
    _id: string;
    nameOfTransaction: string;
    amount: number;
    date: string;
    typeOfTransaction: string;
    category: Category;
    userId: string;
    day: number;
    month: number;
    year: number;
}

export interface TransactionsProviderProps {
    transactions: Transaction[];
    totalResults: number;
    currentPage: number;
    totalPages: number;
    loadingTransactions:boolean;
}

// export class Transaction implements ITransaction {
//     _id: string;
//     nameOfTransaction: string;
//     amount: number;
//     date: string;
//     typeOfTransaction: string;
//     categoryId: Category;
//     userId: string;
//     constructor(
//         _id: string,
//         nameOfTransaction: string,
//         amount: number,
//         date: string,
//         typeOfTransaction: string,
//         categoryId: Category,
//         userId: string
//     ) {
//         this._id = _id;
//         this.nameOfTransaction = nameOfTransaction;
//         this.amount = amount;
//         this.date = this.format();
//         this.typeOfTransaction = typeOfTransaction;
//         this.categoryId = categoryId;
//         this.userId = userId;
//     }
//     format(){
//         return "asd"
//     }
// }
