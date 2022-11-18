import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Menu from "../components/menu";
import ViewMoviment from "../components/viewMoviment";
import { AuthContext } from "../temp/context";
import logout from "../utils/clearLocallhost";

export default function Home() {  
  const navigate = useNavigate();
  const { reload, setSellers, sellerSelected, setDataList } = useContext(AuthContext);
  const URL = "http://localhost:5000/";
  const headers = { authorization: JSON.parse(localStorage.getItem("tokenUser")) }
  const params = { seller: sellerSelected };

  useEffect(() => {
    if (!localStorage.tokenUser) return navigate("/");
    
    const promise = axios.get(`${URL}transactions`, { headers, params });
    promise.then(({ data }) => {
      setSellers(data.sellers);
      setDataList(data.transactions);
    });
    promise.catch((error) => {
      if (error.response.status === 401) {
        if (window.confirm("É necessario autenticar novamente...")) {
          logout();
          navigate("/");
        }
      } else {
        alert(error.response.data);
      }
    });

  }, [reload, sellerSelected]);

  return (
    <DivHome>
      <Header />
      <ViewMoviment />
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
