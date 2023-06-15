import { useContext, useEffect, useState } from "react";
import { Category } from "../components/Categories/Category";
import { AuthContext } from "../context/Auth/AuthContext";
import { Category as CategoryInterface } from "../interfaces/categories";
import { getCategories } from "../services/categories";
import { CategoriesBox, CategoriesUl } from "../styles/components/Categories";

export const Categories = () => {
    const { authState } = useContext(AuthContext);
    const { jwt, csrf } = authState;
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    useEffect(() => {
        getCategories(jwt, csrf).then((resp) => setCategories(resp));
        // console.log(categories);
    }, [jwt, csrf]);

    return (
        <CategoriesBox>
            <h1>Categories</h1>
            {!categories ? (
                <p>No hay categorias</p>
            ) : (
                <CategoriesUl>
                    {categories.map((cat) => (
                        <Category key={cat.name} {...cat} />
                    ))}
                </CategoriesUl>
            )}
        </CategoriesBox>
    );
};
