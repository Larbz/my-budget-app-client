import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useEffect, useState } from "react";
import { Transaction } from "../interfaces/transaction";
import { getTransactions } from "../services/transactions";
import { Table, TableData, TableRow } from "../styles/components/Basic";
import { TransactionsBox } from "../styles/components/Transacionts";
import { useAuth } from "../context";

export const Transactions = () => {
    // const { authState } = useContext(AuthContext);
    // const { isAuth, csrf } = authState;
    const {isAuth,csrf}=useAuth();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        getTransactions(isAuth, csrf).then((resp) => setTransactions(resp));
    },[isAuth,csrf]);
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
                        <th>Type</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th style={{ textAlign: "center" }}>Info</th>
                    </tr>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction._id}>
                            <TableData>{transaction.nameOfTransaction}</TableData>
                            <TableData>{transaction.amount}</TableData>
                            <TableData>{transaction.typeOfTransaction}</TableData>
                            <TableData>{transaction.categoryId.name}</TableData>
                            <TableData>{transaction.date}</TableData>
                            <TableData center>
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    style={{ color: "#ffffff" }}
                                />
                            </TableData>
                        </TableRow>
                    ))}
                </Table>
            )}
        </TransactionsBox>
    );
};
