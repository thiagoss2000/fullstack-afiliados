import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import logout from "../utils/clearLocallhost";
import { useContext } from "react";
import { AuthContext } from "../temp/context";

export default function Header() {
  const { reload, setReload } = useContext(AuthContext);

  const userName = localStorage.getItem("username");

  return (
    <DivHeader>
      
      <h2>{userName}</h2>
      <button onClick={() => {logout(); setReload(!reload)}} className="logout"><MdLogout className="iconLogout"/></button>
    </DivHeader>
  )
}

const DivHeader = styled.div`
  width: 100%;
  height: 5%;
  background-color: var(--theme);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 1px solid var(--theme-black);
  button {
    width: 10%;
    height: 80%;
    margin-inline-start: 40px;
  }
  h2 {
    position: absolute;
    right: 4%;
    font-size: 2em;
  }
  .logout {
    width: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    right: 1%;
  }
  .iconLogout {
    font-size: 200%;
  }
`