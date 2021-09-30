import React, {useRef} from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)

  }
  return (
    <div className="header-wrapper fixed">
      <div className="top-menu border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand">
            <div className="shiping-title text-uppercase font-13 d-none d-sm-flex">
              Welcome to Rosenics store!
            </div>
          </nav>
        </div>
      </div>
      <div className="header-content pb-3 pb-md-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 col-md-auto">
              <div className="d-flex align-items-center">
                <div
                  className="mobile-toggle-menu d-lg-none px-lg-2"
                  data-trigger="#navbar_main"
                >
                  <i className="bx bx-menu"></i>
                </div>
                <div className="logo d-none d-lg-flex">
                  <a href="index.html">
                    <img
                      src="assets/images/logo-icon.png"
                      className="logo-icon"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-md order-4 order-md-2">
              <div className="input-group flex-nowrap px-xl-4">
                <input
                  type="text"
                  className="form-control w-100" 
                  placeholder={props.placeholder}
                  ref={inputEl}
                  value={props.term}
                  onChange={getSearchTerm}
                />
                {" "}
                <span className="input-group-text cursor-pointer bg-transparent">
                  <i className="bx bx-search"></i>
                </span>
              </div>
            </div>
            <div className="col-4 col-md-auto order-3 d-none d-xl-flex align-items-center">
              <div className="fs-1 text-white">
                <i className="bx bx-headphone"></i>
              </div>
              <div className="ms-2">
                <p className="mb-0 font-13">CALL US NOW</p>
                <h5 className="mb-0">+234 9126096902</h5>
              </div>
            </div>
            <div className="col-4 col-md-auto order-2 order-md-4">
              <div className="top-cart-icons float-end">
                <nav className="navbar navbar-expand">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        to="/sign-in"
                        className="nav-link cart-link"
                      >
                        <i className="bx bx-user"></i>
                      </Link>
                    </li>
					{"  "}

                    <li className="nav-item">
                      <Link
                        to="/cart"
                        className="nav-link  position-relative cart-link"
                      >
                        {props.countCartItems ? (
                          <span className="alert-count">
                            {props.countCartItems}
                          </span>
                        ) : (
                          ""
                        )}
                        <i className="bx bx-shopping-bag"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-menu border-top">
        <div className="container">
          <nav
            id="navbar_main"
            className="mobile-offcanvas navbar navbar-expand-lg"
          >
            <div className="offcanvas-header">
              <button className="btn-close float-end"></button>
              <h5 className="py-2"></h5>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                {" "}
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/products">
                  Product{" "}
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/contact">
                  Contact Us{" "}
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/account-dashboard">
                  My Account{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
