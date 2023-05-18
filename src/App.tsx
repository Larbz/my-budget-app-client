import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Sidebar } from "./components/Sidebar";
import {
    BASE,
    CATEGORIES,
    HOME,
    RECURRENT_PAYMENTS,
    SETTINGS,
    TRANSACTIONS,
} from "./config/path";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { Categories } from "./views/Categories";
import { Home } from "./views/Home";
import { RecurrentPayments } from "./views/RecurrentPayments";
import { Settings } from "./views/Settings";
import { Transactions } from "./views/Transactions";

function App() {
    const { authState } = useContext(AuthContext);
    const { isAuth, csrf } = authState;
    return (
        <>
            {(isAuth || csrf) && <Sidebar />}
            <Routes>
                <Route path={BASE} element={<PublicRoute />}>
                    <Route path={BASE} element={<Login />} />
                </Route>
                <Route path={BASE} element={<PrivateRoute />}>
                    <Route path={HOME} element={<Home />} />
                    <Route path={CATEGORIES} element={<Categories />} />
                    <Route path={TRANSACTIONS} element={<Transactions />} />
                    <Route path={RECURRENT_PAYMENTS} element={<RecurrentPayments />} />
                    <Route path={SETTINGS} element={<Settings />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
