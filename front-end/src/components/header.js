import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import logout from "../utils/clearLocallhost";
import { useContext, useState } from "react";
import { AuthContext } from "../temp/context";
import axios from "axios";

export default function Header() {
  const { reload, setReload } = useContext(AuthContext);
  const userName = localStorage.getItem("username");
  const [filesElement, setFilesElement] = useState('');
  const URL = "http://localhost:5000/";
  const headers = {
    authorization: JSON.parse(localStorage.getItem("tokenUser")),
    'Content-Type': 'multipart/form-data'
  };
  const formData = new FormData();

  function submitFile() {
    console.log(filesElement)
    formData.append('file', filesElement);
    const promise = axios.post(`${URL}`, formData, { headers });
    promise.then(() => {
      alert('Upload concluído!');
      setReload(!reload);
    });
    promise.catch((error) => {
      alert(error.response.data);
    });

  }

  return (
    <DivHeader>
      <form onSubmit={(event) => {event.preventDefault()}}>
        <input type="file" required name="list" onChange={e => setFilesElement(e.target.files[0])} />
        <button type="submit" onClick={() => (filesElement!==''? submitFile() : '')}>Submit</button>
      </form>
      <h2>{userName}</h2>
      <button claname="logout" onClick={() => {logout(); setReload(!reload)}} className="logout"><MdLogout className="iconLogout"/></button>
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
  .logout {
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
  form {
    margin-left: 10px;
    height: 80%;
    display: flex;
    align-items: center;
  }
`