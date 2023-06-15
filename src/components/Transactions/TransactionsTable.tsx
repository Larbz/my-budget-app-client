import React from "react";
import { useTransactions } from "../../context/Transactions";
import { Table, TableData, TableRow } from "../../styles/components/Basic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTruckLoading } from "@fortawesome/free-solid-svg-icons";

export const TransactionsTable = () => {
    const { transactions,loadingTransactions } = useTransactions();
        if (loadingTransactions) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight:"200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FontAwesomeIcon icon={faTruckLoading} spin size="2xl" />
            </div>
        );
    }
    return (
        <>
            {!transactions ? (
                <p>No hay transacciones</p>
            ) : (
                <>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th style={{ textAlign: "center" }}>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <TableRow key={transaction._id}>
                                    <TableData>{transaction.nameOfTransaction}</TableData>
                                    <TableData>{transaction.amount}</TableData>
                                    <TableData>{transaction.typeOfTransaction}</TableData>
                                    <TableData>{transaction.category.name}</TableData>
                                    <TableData>
                                        {new Intl.DateTimeFormat("en-GB").format(
                                            new Date(transaction.date)
                                        )}
                                    </TableData>
                                    <TableData center>
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            style={{ color: "#ffffff" }}
                                        />
                                    </TableData>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </>
    );
};
