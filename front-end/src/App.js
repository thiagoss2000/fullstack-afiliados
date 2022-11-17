import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { AuthProvider } from "./temp/context";

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );    
}