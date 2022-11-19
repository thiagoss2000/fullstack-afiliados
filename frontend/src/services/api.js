import { useContext } from "react";
import { AuthContext } from "../temp/context";

function ignInUser(event) {
  const { setPage, reload, setReload } = useContext(AuthContext);

  event.preventDefault();
  setLoading(true);
  const promise = axios.post(`${URL}sign-in`, user);
  promise.then(({ data }) => {
    tokenObject = JSON.stringify(data.token);
    localStorage.setItem("tokenUser", tokenObject);
    localStorage.setItem("username", data.username);

    setLoading(false);
    navigate("/home");
  });
  promise.catch((error) => {
    alert(error.response.data);
    console.log(error.response.data)
    setLoading(false);
  });
}