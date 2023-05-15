import {
    faCircleDollarToSlot,
    faGear,
    faHouse,
    faMoneyBillTransfer,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, HOME, TRANSACTIONS } from "../config/path";
import {
    Indicator,
    SidebarBox,
    SidebarLi,
    SidebarUl,
} from "../styles/components/Sidebar";

export interface Props {
    active: boolean;
}

export const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const changeLocation = (path: string) => {
        navigate(path);
    };
    const check = (path: string) => {
        return location.pathname == path;
    };
    return (
        <SidebarBox>
            <SidebarUl>
                <SidebarLi
                    onClick={() => changeLocation(HOME)}
                    active={check(HOME) || false}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faHouse}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </div>
                        <span>Home</span>
                        {/* <Indicator active={check(HOME) || false} /> */}
                    </div>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(TRANSACTIONS)}
                    active={check(TRANSACTIONS) || false}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" />
                        </div>
                        <span>Transactions</span>
                    </div>
                </SidebarLi>
                <SidebarLi onClick={() => changeLocation(HOME)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCircleDollarToSlot}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </div>
                        <span>Gastos Recurrentes</span>
                    </div>
                </SidebarLi>
                <SidebarLi
                    onClick={() => changeLocation(CATEGORIES)}
                    active={check(CATEGORIES) || false}
                    distance={3}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faTags}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </div>
                        <span>Categories</span>
                        {/* <Indicator active={check(CATEGORIES) || false} /> */}
                    </div>
                </SidebarLi>
                <SidebarLi onClick={() => changeLocation(HOME)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                width: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faGear}
                                style={{ color: "#ffffff" }}
                                size="2xl"
                            />
                        </div>
                        <span>Ajustes</span>
                    </div>
                </SidebarLi>
                <Indicator className="indicator" />
            </SidebarUl>
        </SidebarBox>
    );
};
