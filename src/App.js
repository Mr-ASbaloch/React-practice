// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
