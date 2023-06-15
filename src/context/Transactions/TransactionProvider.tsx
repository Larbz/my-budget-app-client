import { useReducer } from "react";
import { TransactionContext } from "./TransactionsContext";
import { INITIAL_STATE, transactionReducer } from "./TransactionsReducer";
interface props {
    children: JSX.Element | JSX.Element[];
}

export const TransactionProvider = ({ children }: props) => {
    const [transactions, dispatch] = useReducer(transactionReducer, INITIAL_STATE);

    // const setAuth = (isAuth: string,csrf:string) => {
    //     dispatch({ type: "login", payload: {isAuth:isAuth,csrf:csrf}});
    // };

    return (
        <TransactionContext.Provider value={{ transactions, dispatch }}>
            {children}
        </TransactionContext.Provider>
    );
};

// export const useAuth = ()=>useContext(AuthContext).authState
// export const useDispatch = ()=>useContext(AuthContext).dispatch
