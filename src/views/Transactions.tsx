import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Transaction } from "../interfaces/transaction";
import { getTransactions } from "../services/transactions";
import { TransactionsBox, TransactionsUl } from "../styles/components/Transacionts";
import { Table, TableData, TableRow } from "../styles/components/Basic";

export const Transactions = () => {
    const { authState } = useContext(AuthContext);
    const { isAuth, csrf } = authState;
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        getTransactions(isAuth, csrf).then((resp) => setTransactions(resp));
    }, []);
    return (
        <TransactionsBox>
            <h1>Transactions</h1>
            {!transactions ? (
                <p>No hay transacciones</p>
            ) : (
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                    </tr>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction._id}>
                            <TableData>{transaction.nameOfTransaction}</TableData>
                            <TableData>{transaction.amount}</TableData>
                            <TableData>{transaction.date}</TableData>
                            <TableData>{transaction.typeOfTransaction}</TableData>
                            <TableData>{transaction.categoryId.name}</TableData>
                        </TableRow>
                    ))}
                </Table>
            )}
        </TransactionsBox>
    );
};
