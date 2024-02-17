import React from "react";
import styles from "./Contact.module.css";
import contact1 from "../../assets/images/contact1.png";
import contact2 from "../../assets/images/contact2.png";
import contact3 from "../../assets/images/contact3.png";
import phone from "../../assets/images/phone.svg";
import mail from "../../assets/images/Mail.svg";
import map from "../../assets/images/map.svg";
import forbes from "../../assets/images/forbes.png";
import outlook from "../../assets/images/outlook.png";
import fortune from "../../assets/images/fortune.png";

const Contact = () => {
  return (
    <>
      <div className={styles.contactSec}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-6 col-sm-12 ${styles.contentColumn}`}>
              <p className={styles.Head}>
                Let's Get In
                <span className={styles.goldenText}> Touch With Us</span>
              </p>

              <div className="d-flex gap-4 mb-3">
                <img src={phone} width="27px" height="21px" alt="" />
                <p className={styles.contactDetails}>+971-05 44 33 88 66</p>
              </div>

              <div className="d-flex gap-4 mb-3">
                <img src={mail} width="27px" height="21px" alt="" />
                <p className={styles.contactDetails}>
                  info@unifiedinvestments.ae
                </p>
              </div>

              <div className="d-flex gap-4 mb-3">
                <img src={map} width="27px" height="21px" alt="" />
                <p className={styles.contactDetails}>
                  Unified Investments, 2nd floor, Al Amal St - Business
                  Bay-Dubai, United Arab Emirates
                </p>
              </div>
            </div>
            <div className={`col-lg-6 col-sm-12 ${styles.imageColumn}`}>
              <img src={contact1} width="452px" height="422px" alt="image" />
              <div className={styles.secondImage}>
                <img src={contact2} width="452px" height="422px" alt="image" />
              </div>
              <div className={styles.thirdImage}>
                <img src={contact3} width="452px" height="422px" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <section className={styles.mediaSectionBox}>
          <div className={styles.mediaSectionBoxContent}>
            <p className={styles.mediaSectionBoxPara}>
              Media & <br />
              Publications
            </p>
            <img src={forbes} width="294px" height="108px" alt="" />
            <img src={fortune} width="278px" height="102px" alt="" />
            <img src={outlook} width="266px" height="102px" alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
