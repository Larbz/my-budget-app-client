import { faCircleInfo, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BiLoader } from "react-icons/bi";
import { useTransactions } from "../../context/Transactions";
import { Table, TableData, TableHeader, TableRow } from "../../styles/components/Basic";
import { Rotate } from "../../styles/components/Rotate";
export const TransactionsTable = () => {
    const { transactions, loadingTransactions } = useTransactions();
    if (loadingTransactions) {
        return (
            <>
                <Rotate size={"3em"}>
                    <BiLoader size="3em" />
                </Rotate>
            </>
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
                                <TableHeader center>Name</TableHeader>
                                <TableHeader center>Type</TableHeader>
                                <TableHeader center>Category</TableHeader>
                                <TableHeader center>Date</TableHeader>
                                <TableHeader center>Amount</TableHeader>
                                <TableHeader center>Info</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <TableRow key={transaction._id}>
                                    <TableData>{transaction.nameOfTransaction}</TableData>
                                    <TableData center>{transaction.typeOfTransaction}</TableData>
                                    <TableData center>{transaction.category.name}</TableData>
                                    <TableData center>
                                        {new Intl.DateTimeFormat("en-GB").format(
                                            new Date(transaction.date)
                                        )}
                                    </TableData>
                                    <TableData center>{transaction.amount}</TableData>
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
