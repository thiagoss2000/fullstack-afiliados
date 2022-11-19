import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../temp/context";

export default function Menu() {
  const { sellers, setSellerSelected } = useContext(AuthContext);

  return (
    <Menubar>
      <SellersContainer>
      <div className="barrRemain">
        <h3>Sellers</h3>
        </div>
        {sellers.map((e, i) => {
          return(
            <div className="names"
              key={i}
              onClick={() => setSellerSelected(e.name)}
            >
              <p>{e.name}</p>
            </div>
          )
        })}
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
  height: 80%;
  background-color: var(--theme);
  border-radius: 10px;
  margin-top: 20%;
  .names {
    width: 90%;
    margin-top: 2px;
    background-color: var(--theme-black);;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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