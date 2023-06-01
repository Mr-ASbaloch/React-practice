// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import PageNotFound from "./component/PageNotFound";
import Product from "./component/Product";
import Shirt from "./component/Shirt";
import Jeans from "./component/Jeans";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/Product" element={<Product />}>
          <Route path="shirts" element={<Shirt />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
