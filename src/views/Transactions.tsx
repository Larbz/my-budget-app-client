import { TransactionsBody } from "../components/Transactions/TransactionsBody";
import { TransactionProvider } from "../context/Transactions/TransactionProvider";
import { TransactionsBox } from "../styles/components/Transactions";

export const Transactions = () => {
    return (
        <TransactionProvider>
            <TransactionsBox>
                <h1>Transactions</h1>
                <TransactionsBody />
                {/* <Pagination {...transactions} setPage={setPage} /> */}
            </TransactionsBox>
        </TransactionProvider>
    );
};
