import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Register } from "./components/Register";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Forgot } from "./components/Forgot";
import { Reset } from "./components/Reset";
import { Login } from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset/:token" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
