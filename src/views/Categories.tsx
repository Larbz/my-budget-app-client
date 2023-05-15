import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {getCategories} from "../services/categories";
import { Category as CategoryInterface } from '../interfaces/categories';
import { CategoriesBox, CategoriesUl } from '../styles/components/Categories';
import { Category } from '../components/Categories/Category';

export const Categories = () => {
  const { authState} = useContext(AuthContext);
  const { isAuth,csrf } = authState;
  const [categories,setCategories]=useState<CategoryInterface[]>([]);
  useEffect(()=>{
    getCategories(isAuth,csrf).then(resp=>setCategories(resp));
    // console.log(categories);
  },[])

  return (
    <CategoriesBox>
        <h1>Categories</h1>
        {!categories?<p>No hay categorias</p>:
            <CategoriesUl>
                {categories.map((cat)=>
                        <Category key={cat.name} {...cat}/>
                    )
                }
            </CategoriesUl>


        }
    </CategoriesBox>
  )
}
