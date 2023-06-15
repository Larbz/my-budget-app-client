import { faCircleInfo, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { useTransactions, useTransactionsDispatch } from "../../context/Transactions";
import { TransactionTypes } from "../../context/Transactions/TransactionsReducer";
import { TransactionResponse } from "../../interfaces/transaction";
import { getTransactions } from "../../services/transactions";
import { Table, TableData, TableRow } from "../../styles/components/Basic";
import { TransactionsBodyBox } from "../../styles/components/Transactions";
import { Pagination } from "./Pagination";
import { TransactionsTable } from "./TransactionsTable";

export const TransactionsBody = () => {
    const { jwt, csrf } = useAuth();
    const dispatch = useTransactionsDispatch();
    const { currentPage, totalPages, totalResults, loadingTransactions } =
        useTransactions();
    const [transactions, setTransactions] = useState<TransactionResponse>(
        {} as TransactionResponse
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const handleGetTransactions = async () => {
        dispatch({
            type: TransactionTypes.SET_LOADING_TRANSACTIONS,
            payload: { loadingTransactions: true },
        });
        // setLoading(true);
        const res = await getTransactions(jwt, csrf, page);
        setTransactions(res);
        dispatch({
            type: TransactionTypes.ADD_TRANSACTIONS,
            payload: {
                transactions: res.data,
                currentPage: res.currentPage,
                totalPages: res.totalPages,
                totalResults: res.totalResults,
            },
        });
        // setLoading(false);
        dispatch({
            type: TransactionTypes.SET_LOADING_TRANSACTIONS,
            payload: { loadingTransactions: false },
        });

        console.log(currentPage, totalPages, totalResults);
        // getTransactions(jwt, csrf, page)
        //     .then((resp) => setTransactions(resp))
        //     .finally(() => setLoading(false));
    };

    useEffect(() => {
        handleGetTransactions();
    }, [page]);
    // if (loading) {
    //     return (
    //         <div
    //             style={{
    //                 width: "100%",
    //                 height: "100%",
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //             }}
    //         >
    //             <FontAwesomeIcon icon={faTruckLoading} spin size="2xl" />
    //         </div>
    //     );
    // }

    return (
        <>
            <Pagination
                setPage={setPage}
            />
            <TransactionsBodyBox>
                <TransactionsTable />
            </TransactionsBodyBox>
        </>
    );
};
