import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src="/images/logo.PNG" className="brand-logo" alt="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 8888 Brakeman Dr Waxhaw, NC 28173
        </p>
        <p>
          <strong>Phone:</strong> +1 (980) 829-6987
        </p>
        <p>
          <strong>Hours:</strong> 8:00am - 10:00pm Mon - Sat
        </p>
      </div>
      <div className="col">
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact Page</Link>
      </div>
      <div className="col">
        <h4>Follow us</h4>
        <div className="icon">
          <a href="https://www.facebook.com/?_rdr">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.pinterest.com/">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="https://x.com/i/flow/login">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &copy;2025; Designed by{" "}
          <span className="designer">Andrea Merlos</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
