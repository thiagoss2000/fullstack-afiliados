import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../temp/context";

export default function ViewMoviment() {
  const { dataList } = useContext(AuthContext);
  let costTotal = 0;

  return (
    <Contain>
      <div className="barr">
          <h3>Moviment</h3>
      </div>
      <div className="cont">
        {dataList.map((e, i) => { 
          const dateIso = new Date(e.date.slice(0, 19));
          const type = e.types.id;
          let price = e.price/100;
          if (type == 1 || type == 2 || type == 4) {
            costTotal += price;
            price = `+ ${price.toFixed(2)}`;
          } else if (type == 3) {
            costTotal -= price;
            price = `- ${price.toFixed(2)}`
          }   
          
          return (                
            <div key={i} className="info">
              <p>{`
                ${('0' + dateIso.getDate()).slice(-2)}/
                ${('0' + (dateIso.getMonth()+1)).slice(-2)}/
                ${dateIso.getFullYear()}
              `}</p>
              <p>{e.product}</p>
              <p>{e.types.description}</p>
              <p>{e.name}</p>
              <p>{`$ ${price}`}</p>
            </div>               
          )
        })}
        <div className="total">
          <p>TOTAL:</p>
          <p>{`$ ${costTotal.toFixed(2)}`}</p>
        </div>
      </div>
    </Contain> 
  )
}

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
  .total {
    width: 100%;
    height: 25px;
    background-color: #fdd;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
