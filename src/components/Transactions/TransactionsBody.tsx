import { faCircleInfo, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { ActionTypes } from "../../context/Auth/AuthReducer";
import { useTransactions, useTransactionsDispatch } from "../../context/Transactions";
import { TransactionTypes } from "../../context/Transactions/TransactionsReducer";
import { TransactionResponse } from "../../interfaces/transaction";
import { getTransactions } from "../../services/transactions";
import { Table, TableData, TableRow } from "../../styles/components/Basic";
import {
    InputSearchFilter,
    TransactionsBodyBox,
    TransactionsFilters,
    TransactionsTableBox,
} from "../../styles/components/Transactions";
import { Pagination } from "./Pagination";
import { TransactionsTable } from "./TransactionsTable";

export const TransactionsBody = () => {
    const { jwt, csrf } = useAuth();
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useTransactionsDispatch();
    const { currentPage, totalPages, totalResults } = useTransactions();
    const [searchParams, setSearchParams] = useSearchParams();
    const handleGetTransactions = async () => {
        dispatch({
            type: TransactionTypes.SET_LOADING_TRANSACTIONS,
            payload: { loadingTransactions: true },
        });
        const urlParams = new URLSearchParams();
        urlParams.append("page", page as unknown as string);
        if (searchValue != "") {
            urlParams.append("name", searchValue);
        }
        urlParams.append("limit", 30 as unknown as string);
        const res = await getTransactions(jwt, csrf, urlParams.toString());
        // console.log(queryClientTransaction.data);
        if (!res) {
            urlParams.set("page", "1");
            console.log(setSearchParams(urlParams.toString()));
            setSearchParams(urlParams.toString());
            setPage(1);
            dispatch({
                type: TransactionTypes.SET_CURRENT_PAGE,
                payload: { currentPage: 1 },
            });
            // queryClientTransaction.remove();
        } else {
            setSearchParams(urlParams.toString());
            dispatch({
                type: TransactionTypes.ADD_TRANSACTIONS,
                payload: {
                    transactions: res.data,
                    currentPage: res.currentPage,
                    totalPages: res.totalPages,
                    totalResults: res.totalResults,
                },
            });
        }
        dispatch({
            type: TransactionTypes.SET_LOADING_TRANSACTIONS,
            payload: { loadingTransactions: false },
        });
        return res;
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        queryClientTransaction.refetch("transactions");
    };

    const [page, setPage] = useState<number>(1);

    const queryClientTransaction = useQuery<TransactionResponse>(
        ["transactions"],
        handleGetTransactions,
        {
            staleTime: 60000,
            retry: 1,
        }
    );
    useEffect(() => {
        queryClientTransaction.refetch("transactions");
    }, [page]);

    return (
        <TransactionsBodyBox>
            <TransactionsFilters>
                <form onSubmit={onSubmit}>
                    <InputSearchFilter
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
                <Pagination page={page} setPage={setPage} />
            </TransactionsFilters>
            <TransactionsTableBox>
                <TransactionsTable />
            </TransactionsTableBox>
        </TransactionsBodyBox>
    );
};
