import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTransactions, useTransactionsDispatch } from "../../context/Transactions";
import { TransactionTypes } from "../../context/Transactions/TransactionsReducer";
import { CirclePagination, InputPagination } from "../../styles/components/Transactions";

interface MyProps {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ page, setPage }: MyProps) => {
    const { currentPage, totalPages } = useTransactions();
    const [altPage, setThisPage] = useState<number>(page);
    const dispatch = useTransactionsDispatch();
    // setThisPage(currentPage);
    // console.log(page);
    const showInPagination = 3; // only works for odd numbers greater than 1
    const limit = showInPagination - 1;
    const adder = Math.floor(showInPagination / 2);
    const arrPages = [];
    if (totalPages <= 7) {
        arrPages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else if (currentPage - 1 < limit) {
        arrPages.push(...Array.from({ length: showInPagination }, (_, i) => i + 1));
        arrPages.push("...");
        arrPages.push(totalPages);
    } else if (currentPage - 1 >= limit) {
        arrPages.push(1);
        arrPages.push("...");
        if (currentPage + adder <= totalPages) {
            arrPages.push(
                ...Array.from(
                    { length: showInPagination },
                    (_, i) => i + currentPage - adder
                )
            );
        } else {
            arrPages.push(
                ...Array.from(
                    { length: showInPagination },
                    (_, i) =>
                        i +
                        currentPage -
                        showInPagination +
                        (totalPages - currentPage) +
                        1
                )
            );
        }
        if (totalPages - currentPage <= limit - 1 && currentPage + adder < totalPages) {
            arrPages.push(totalPages);
        } else if (currentPage + adder < totalPages) {
            if (totalPages - (currentPage + adder) > 1) {
                arrPages.push("...");
                arrPages.push(totalPages);
            } else {
                arrPages.push(totalPages);
            }
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value as unknown as number;
        // const numericValue = input.replace(/\D/g, "");
        // const page = parseInt(numericValue);
        // const page = event.target.value as unknown as number;
        if (input < 1) {
            setThisPage(1);
        } else if (input > totalPages) {
            setThisPage(totalPages);
        } else {
            setThisPage(input);
        }
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPage(altPage as number);
        dispatch({
            type: TransactionTypes.SET_CURRENT_PAGE,
            payload: { currentPage: altPage as number },
        });
    };
    const getInputWidth = (value: number): number => {
        const numberToString = value.toString();
        return numberToString.length;
    };

    useEffect(() => {
        setThisPage(page);
    }, [currentPage]);

    if (!currentPage) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                    }}
                >
                    <CirclePagination selected={true}>1</CirclePagination>
                </div>
                <form onSubmit={onSubmit}>
                    <InputPagination
                        type="text"
                        inputMode="numeric"
                        value={page}
                        onChange={handleChange}
                        width={getInputWidth(page)}
                        disabled={true}
                    />
                </form>
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "30px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    // marginTop: "20px",
                    alignItems: "center",
                }}
            >
                {arrPages.map((it) => {
                    return (
                        <CirclePagination
                            selected={it == currentPage}
                            onClick={() => {
                                setPage(it as number);
                                setThisPage(it as number);
                                dispatch({
                                    type: TransactionTypes.SET_CURRENT_PAGE,
                                    payload: { currentPage: it as number },
                                });
                            }}
                            selectable={it === "..."}
                        >
                            {it}
                        </CirclePagination>
                    );
                })}
            </div>
            <form onSubmit={onSubmit}>
                <InputPagination
                    type="number"
                    inputMode="numeric"
                    value={altPage}
                    onChange={handleChange}
                    width={getInputWidth(altPage)}
                />
            </form>
        </div>
    );
};
