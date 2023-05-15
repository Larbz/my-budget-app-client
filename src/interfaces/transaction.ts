import { Category } from "./categories";

export interface Transaction {
    _id: string;
    nameOfTransaction: string;
    amount: number;
    date: string;
    typeOfTransaction: string;
    categoryId: Category;
    userId: string;
    // format():string;
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
