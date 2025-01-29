import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header">
      <Link to="/">
        <img src="/images/logo.PNG" alt="logo" className="brand-logo" />
      </Link>

      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul id="navbar">
          <li>
            <Link className="active" to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>
    </header>
  );
};

export default Navbar;
