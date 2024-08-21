import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Navbar/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/"} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
