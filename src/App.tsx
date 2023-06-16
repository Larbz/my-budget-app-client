import { useContext, useEffect, useState } from "react";
import {
    RedirectFunction,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Sidebar } from "./components/Sidebar";
import {
    BASE,
    CATEGORIES,
    HOME,
    LOGIN,
    RECURRENT_PAYMENTS,
    SETTINGS,
    TRANSACTIONS,
} from "./config/path";
import { useAuthDispatch } from "./context/Auth";
import { AuthContext } from "./context/Auth/AuthContext";
import { ActionTypes } from "./context/Auth/AuthReducer";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { updateJWT } from "./services/auth";
import { Main } from "./styles/components/Basic";
import { Categories } from "./views/Categories";
import { Home } from "./views/Home";
import { RecurrentPayments } from "./views/RecurrentPayments";
import { Settings } from "./views/Settings";
import { Transactions } from "./views/Transactions";

function App() {
    const { authState } = useContext(AuthContext);
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const { jwt, csrf } = authState;
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const showSidebar = location.pathname != "/login" && location.pathname != "/";
    // console.log(location.pathname)
    console.log(showSidebar);
    const start = async () => {
        setLoading(true);
        const { jwt, csrf } = await updateJWT();
        dispatch({
            type: ActionTypes.LOGIN,
            payload: {
                jwt: jwt as string,
                csrf: csrf as string,
                
            },
        });
        setLoading(false);
        console.log(jwt);
    };
    useEffect(() => {
        // start()
        if (!jwt) {
            navigate(LOGIN); // Redirige al usuario a la ruta de inicio de sesión
        }
      
    }, []);
    console.log(location.pathname);
    return (
        <Main variant={showSidebar}>
            {/* {(jwt || csrf) && <Sidebar />} */}
            {showSidebar && <Sidebar />}
            {loading ? (
                <p>loading</p>
            ) : (
                <Routes>
                    <Route path={BASE} element={<PublicRoute />}>
                        <Route path={LOGIN} element={<Login />} />
                    </Route>
                    <Route path={BASE} element={<PrivateRoute />}>
                        <Route path={HOME} element={<Home />} />
                        <Route path={CATEGORIES} element={<Categories />} />
                        <Route path={TRANSACTIONS} element={<Transactions />} />
                        <Route
                            path={RECURRENT_PAYMENTS}
                            element={<RecurrentPayments />}
                        />
                        <Route path={SETTINGS} element={<Profile />} />
                    </Route>
                </Routes>
            )}
        </Main>
    );
}

export default App;
