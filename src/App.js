import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import NavBar from "./components/NavBar";
import CheckOut from "./components/CheckOut";
import SearchResult from "./components/SerachResult";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />
        <Route path={"/search"} element={<SearchResult />} />
        <Route path={"/product"} element={<ProductPage />} />
        <Route path={"/checkout"} element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
