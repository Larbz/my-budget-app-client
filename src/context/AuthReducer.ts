import { Auth } from "../interfaces/auth";

type AuthAction = 
    |{type:"login",payload:{isAuth:string,csrf:string}}

export const authReducer = (state:Auth,action:AuthAction):Auth=>{
    switch (action.type){
        case "login":{
            return {
                ...state,
                isAuth:action.payload.isAuth,
                csrf:action.payload.csrf
            }
        }
    }
}