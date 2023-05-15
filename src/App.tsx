import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { BASE, CATEGORIES, HOME, LOGIN, TRANSACTIONS } from "./config/path";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { Home } from "./views/Home";
import { Categories } from "./views/Categories";
import { Sidebar } from "./components/Sidebar";
import { Transactions } from "./views/Transactions";

function App() {
    return (
        <>
            <Sidebar/>
            <Routes>
                <Route path={BASE} element={<PublicRoute/>}>
                    <Route path={BASE} element={<Login/>}/>
                    {/* <Route path={LOGIN} index element={<Login />} /> */}
                </Route>
                <Route path={BASE} element={<PrivateRoute />}>
                    <Route path={HOME} element={<Home />} />
                    <Route path={CATEGORIES} element={<Categories/>}/>
                    <Route path={TRANSACTIONS} element={<Transactions/>}/>
                </Route>
                {/* <Route path="*" element={<Profile/>}/> */}
            </Routes>
        </>
    );
}

export default App;
