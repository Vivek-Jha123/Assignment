import React from "react";
import Logo from "../../assets/images/logo.png";
import DownVector from "../../assets/images/down-vector.png";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg  d-flex align-items-center justify-content-between">
          <div className={`container-fluid ${styles.logoParentDiv}`}>
            <img src={Logo} width="301px" height="73px" alt="Logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <RxHamburgerMenu
                size="30px"
                style={{
                  color: "white",
                  border: "1px solid #ddd",
                  padding: "5px",
                }}
              />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav   ">
              <li>
                COMPANY
                <span className={styles.active}></span>
              </li>
              <li>
                INVESTORS
                <img src={DownVector} alt="Vector" />
              </li>
              <li>
                PRODUCTS
                <img src={DownVector} alt="Vector" />
              </li>
              <li>JOURNAL</li>
              <li>REACH US</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
