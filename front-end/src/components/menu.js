import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../temp/context";

export default function Menu() {

  return (
    <Menubar>
      <SellersContainer>
        
      </SellersContainer>
    </Menubar>
  )
}

const Menubar = styled.div`
  width: 20%;
  height: 100%;
  background-color: var(--theme-black);
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 100%;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
  } 
`

const SellersContainer = styled.div`
  width: 80%;
  height: 40%;
  background-color: var(--theme);
  border-radius: 10px;
  margin-top: 20%;
  .remains {
    width: 80%;
    margin-top: 2px;
    background-color: var(--theme);;
    border: none;
    border-radius: 5px;
  }
  p {
    width: 100%;
    position: relative;
  }
  span {
    position: absolute;
    right: 0;
  }
`