import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {getCategories} from "../services/categories";
import { Categorie } from '../interfaces/categories';
import { Icon } from "@iconify/react";

export const Categories = () => {
  const { authState} = useContext(AuthContext);
  const { isAuth } = authState;
  const [categories,setCategories]=useState<Categorie[]>([]);
  useEffect(()=>{
    getCategories(isAuth).then(resp=>setCategories(resp));
    // console.log(categories);
  },[])

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",width:"90%",margin:"auto"}}>
        <h1>Categories</h1>
        {!categories?<p>No hay categorias</p>:
            <ul style={{listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"30px"}}>
                {categories.map(cat=>{
                    return (
                        <li>
                            <div style={{display:"flex",flexDirection:"column",gap:"2px",border:"1px solid white",borderRadius:"30px",padding:"10px"}}>
                                <Icon icon={`${cat.icon}`} color="#fff" width="40" height="40" />
                                <span>{cat.name}</span>
                                <span>{cat.icon}</span>
                                <span>{cat.color}</span>
                                <span>{cat.presupuesto}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>


        }
    </div>
  )
}
