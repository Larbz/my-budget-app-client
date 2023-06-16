import {
    faCircleDollarToSlot,
    faGear,
    faHouse,
    faMoneyBillTransfer,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import {
    CATEGORIES,
    HOME,
    LOGIN,
    RECURRENT_PAYMENTS,
    SETTINGS,
    TRANSACTIONS,
} from "../config/path";
import { useAuth, useAuthDispatch } from "../context/Auth";
import { ActionTypes } from "../context/Auth/AuthReducer";
import { logout } from "../services/auth";
import {
    Indicator,
    SidebarBox,
    SidebarIconGroup,
    SidebarLi,
    SidebarLiGroup,
    SidebarSpan,
    SidebarUl,
} from "../styles/components/Sidebar";
// import { Logout } from "../interfaces/logout";

export interface Props {
    active: boolean;
}

export const Sidebar = () => {
    const dispatch = useAuthDispatch();
    // const { jwt, csrf } = useAuth();
    // const [log,setLog]=useState<Logout>();
    const location = useLocation();
    const navigate = useNavigate();
    const changeLocation = (path: string) => {
        navigate(path);
    };
    const check = (path: string) => {
        return location.pathname == path;
    };
    const handleLogout = async () => {
        await logout();
        dispatch({
            type: ActionTypes.LOGOUT,
        });
        navigate(LOGIN);
    };
    return (
        <SidebarBox>
            <SidebarUl>
                <SidebarLi
                    onClick={() => changeLocation(HOME)}
                    active={check(HOME) || false}
                >
                    <SidebarLiGroup>
                        <SidebarIconGroup>
                            <FontAwesomeIcon
                                icon={faHouse}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </SidebarIconGroup>
                        <SidebarSpan>Home</SidebarSpan>
                    </SidebarLiGroup>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(TRANSACTIONS)}
                    active={check(TRANSACTIONS) || false}
                >
                    <SidebarLiGroup>
                        <SidebarIconGroup>
                            <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" />
                        </SidebarIconGroup>
                        <SidebarSpan>Transactions</SidebarSpan>
                    </SidebarLiGroup>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(RECURRENT_PAYMENTS)}
                    active={check(RECURRENT_PAYMENTS) || false}
                >
                    <SidebarLiGroup>
                        <SidebarIconGroup>
                            <FontAwesomeIcon
                                icon={faCircleDollarToSlot}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </SidebarIconGroup>
                        <SidebarSpan>Gastos Recurrentes</SidebarSpan>
                    </SidebarLiGroup>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(CATEGORIES)}
                    active={check(CATEGORIES) || false}
                >
                    <SidebarLiGroup>
                        <SidebarIconGroup>
                            <FontAwesomeIcon
                                icon={faTags}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </SidebarIconGroup>
                        <SidebarSpan>Categories</SidebarSpan>
                        {/* <Indicator active={check(CATEGORIES) || false} /> */}
                    </SidebarLiGroup>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(SETTINGS)}
                    active={check(SETTINGS) || false}
                >
                    <SidebarLiGroup>
                        <SidebarIconGroup>
                            <FontAwesomeIcon
                                icon={faGear}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </SidebarIconGroup>
                        <SidebarSpan>Ajustes</SidebarSpan>
                    </SidebarLiGroup>
                </SidebarLi>
                <Indicator className="indicator" />
            </SidebarUl>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </SidebarBox>
    );
};
