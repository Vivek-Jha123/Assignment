import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/Mail.svg";
import insta from "../../assets/images/insta.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footerSec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <img src={logo} width="273px" height="56px" alt="logo" />
              <p className={styles.footerPara}>
                Interior Design Center Inc. A USA Based Photo Editing Company in
                Tokyo, Japan. Corporation NO. 524172-2, Check Here.
              </p>
              <div className="d-flex gap-3 align-items-baseline">
                <img src={phone} width="15px" height="14px" alt="" />
                <p className={styles.contactDetails}>+971-05 44 33 88 66</p>
              </div>
              <div className="d-flex gap-3 align-items-baseline">
                <img src={mail} width="15px" height="14px" alt="" />
                <p className={styles.contactDetails}>+971-05 44 33 88 66</p>
              </div>
            </div>
            <div className={`col-lg-3 col-sm-6 ${styles.footerSecondColumn}`}>
              <h3 className={styles.footerMenuHead}>Menu</h3>
              <p className={styles.footerSubPara}>Company</p>
              <p className={styles.footerSubPara}>Investors</p>
              <p className={styles.footerSubPara}>Products</p>
              <p className={styles.footerSubPara}>Jopunral</p>
              <p className={styles.footerSubPara}>Reach Us</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h3 className={styles.footerMenuHead}>Useful link</h3>
              <p className={styles.footerSubPara}>Home</p>
              <p className={styles.footerSubPara}>Company</p>
              <p className={styles.footerSubPara}>Privacy Policy</p>
              <p className={styles.footerSubPara}>Terms and Conditions</p>
              <p className={styles.footerSubPara}>Return & Refund</p>
            </div>
            <div className="col-2 col-sm-12">
              <h3 className={styles.footerMenuHead}>Follow Us</h3>
              <div className="d-flex gap-3 mb-3">
                <img src={insta} width="30px" height="28px" alt="" />
                <img src={facebook} width="30px" height="28px" alt="" />
                <img src={linkedin} width="30px" height="28px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
