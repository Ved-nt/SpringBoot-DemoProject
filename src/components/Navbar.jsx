import React, { useEffect, useState } from "react";

const Navbar = ({ onSelectCategory, onSearch, cartCount }) => {
  // Get initial theme from localStorage
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light-theme";
  };

  const [theme, setTheme] = useState(getInitialTheme());

  // Toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-glass">
        <div className="container-fluid px-4">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <i className="bi bi-shop fs-4"></i>
            <span className="fw-bold">ShopVibe</span>
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-custom active" href="/">
                  <i className="bi bi-house-door me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="/add_product">
                  <i className="bi bi-plus-circle me-1"></i>Add Product
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-custom dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-grid me-1"></i>Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onSelectCategory("Electronics")}
                    >
                      Electronics
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onSelectCategory("Fashion")}
                    >
                      Fashion
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => onSelectCategory("Books")}
                    >
                      Books
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Right side controls */}
            <div className="d-flex align-items-center gap-2">
              {/* Search */}
              <div className="search-box">
                <i className="bi bi-search search-icon"></i>
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search products..."
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>

              {/* Theme toggle */}
              <button className="theme-btn" onClick={toggleTheme}>
                {theme === "dark-theme" ? (
                  <i className="bi bi-moon-stars-fill"></i>
                ) : (
                  <i className="bi bi-sun-fill"></i>
                )}
              </button>

              {/* Cart */}
              <a href="/cart" className="nav-link cart-icon-btn">
                <i className="bi bi-bag"></i>
                <span className="cart-badge">{cartCount}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
