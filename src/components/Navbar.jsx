import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="header">
      <Link to="/">
        <img src="/images/logo.PNG" alt="logo" className="brand-logo" />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
