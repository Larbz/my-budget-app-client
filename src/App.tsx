import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { BASE, CATEGORIES, HOME, LOGIN } from "./config/path";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { Home } from "./views/Home";
import { Categories } from "./views/Categories";

function App() {
    return (
        <>
            <Routes>
                <Route path={BASE} element={<PublicRoute/>}>
                    <Route path={BASE} element={<Login/>}/>
                    {/* <Route path={LOGIN} index element={<Login />} /> */}
                </Route>
                <Route path={BASE} element={<PrivateRoute />}>
                    <Route path={HOME} element={<Profile />} />
                    <Route path={CATEGORIES} element={<Categories/>}/>
                </Route>
                {/* <Route path="*" element={<Profile/>}/> */}
            </Routes>
        </>
    );
}

export default App;
