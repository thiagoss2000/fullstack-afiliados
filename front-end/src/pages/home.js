import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Menu from "../components/menu";
import { AuthContext } from "../temp/context";

export default function Home() {  
  const navigate = useNavigate();
  const { setPage, reload, setReload } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.tokenUser) return navigate("/");

  }, [reload]);

  return (
    <DivHome>
      <Header />
      <Contain>
        
      </Contain>
      <Menu />
    </DivHome>
  );
}

const DivHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
  position: relative;
`
const Contain = styled.div`
  border-radius: 20px;
  margin-left: 5%;
  margin-top: 4%;
  width: 70%;
  height: 80%;
  background-color: #555;
  .barr {
    margin: auto;
    width: 98%;
    height: 4%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cont {
    border-radius: 10px;
    margin: auto;
    width: 99%;
    height: 95%;
    background-color: #333;
    overflow: auto;
  }
  .info {
    width: 100%;
    height: 25px;
    background-color: #fff;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    width: 30%;
    text-align: center;
  }
  p {
    width: 30%;
    max-height: 80%;
    text-align: center;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
