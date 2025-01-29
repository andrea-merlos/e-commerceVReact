import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/products" element={<Products products={data} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
