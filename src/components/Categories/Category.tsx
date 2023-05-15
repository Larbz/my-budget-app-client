import { Icon } from "@iconify/react/dist/iconify.js";
import { Category as CategoryInterface } from "../../interfaces/categories";

export const Category = (cat:CategoryInterface) => {
    return (
        <>
            <li>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        border: "1px solid white",
                        borderRadius: "30px",
                        padding: "10px",
                    }}
                >
                    <Icon icon={`${cat.icon}`} color="#fff" width="40" height="40" />
                    <span>{cat.name}</span>
                    <span>{cat.icon}</span>
                    <span>{cat.color}</span>
                    <span>{cat.presupuesto}</span>
                </div>
            </li>
        </>
    );
};
