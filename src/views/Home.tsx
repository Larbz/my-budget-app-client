import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Main } from "../styles/components/Basic";

export const Home = () => {
  const { authState } = useContext(AuthContext);
  console.log(authState)
  return (
    <Main>
    </Main>
  )
}
