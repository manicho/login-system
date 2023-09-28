import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { Login } from "./components/Login";
import { Register } from "./components/Register";
// import { Login } from "./components/login/Login";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Forgot } from "./components/Forgot";
import { Reset } from "./components/Reset";
import { Login } from "./components/login/Login";
import { RealTimeBar } from "./components/RealTimeBar";

function App() {
  // const [greeting, setGreeting] = useState("");

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.text())
  //     .then(setGreeting);
  // }, []);

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
      <RealTimeBar />
    </BrowserRouter>
  );
}

export default App;
