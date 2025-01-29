import React, { useState } from "react";
import "./Products.css";

function Products({ products = [] }) {
  const [filters, setFilters] = useState({
    color: "",
    type: "",
    price: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesColor =
      filters.color === "" ||
      product.color?.toLowerCase() === filters.color.toLowerCase();
    const matchesType =
      filters.type === "" ||
      product.category?.toLowerCase() === filters.type.toLowerCase();
    const matchesPrice =
      filters.price === "" ||
      (filters.price === "under100" && parseFloat(product.price) < 100) ||
      (filters.price === "over100" && parseFloat(product.price) >= 100);

    return matchesColor && matchesType && matchesPrice;
  });

  return (
    <>
      {/* Hero Section */}
      <div className="hero-s">
        <div className="hero-text">
          <h1>Welcome to Our Product Page</h1>
          <p>Discover our exclusive collection tailored just for you.</p>
        </div>
      </div>

      {/* return (
    <> */}
      <div className="filter-container">
        <select
          name="color"
          onChange={handleFilterChange}
          value={filters.color}
        >
          <option value="">Filter by Color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="wine">Wine</option>
          <option value="nude">Nude</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
        </select>

        <select
          name="type"
          onChange={handleFilterChange}
          value={filters.category}
        >
          <option value="">Filter by Type</option>
          <option value="Slingback pumps">Slingback pumps</option>
          <option value="Boots">Boots</option>
          <option value="Ankle strap pumps">Ankle strap pumps</option>
          <option value="pointed closed-toe pumps">
            Pointed Closed-Toe Pumps
          </option>
        </select>

        <select
          name="price"
          onChange={handleFilterChange}
          value={filters.price}
        >
          <option value="">Filter by Price</option>
          <option value="under100">Under $100</option>
          <option value="over100">Over $100</option>
        </select>
      </div>

      <div className="product_list"></div>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image_url} alt={product.title} />
              <h2>{product.title}</h2>
              <h2>{product.description}</h2>
              <h2>${product.price}</h2>
              <h2>{product.category}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available for the selected filters.</p>
      )}
    </>
  );
}

export default Products;
