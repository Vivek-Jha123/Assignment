import React from "react";
import styles from "./Business.module.css";
import Office from "../../assets/images/office.png";

const Business = () => {
  return (
    <>
      <div className={styles.BusinessSection}>
        <img src={Office} width="100%" height="647px" alt="" />
        <div className={styles.BusinessSectionContent}>
          <h3 className={styles.BusinessSectionHead}>
            We are Dedicated{" "}
            <span style={{ color: "white" }}> to the Expansion of</span> your
            Business
          </h3>

          <div className={styles.buttons}>
            <div className={styles.firstButton}>
              {" "}
              <span style={{ color: "#906312" }}>FOR</span> INDIVIDUAL
            </div>
            <div className={styles.secondButton}>
              <span style={{ color: "#906312" }}>FOR</span> CORPORATE
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className={styles.connectButton}>Let's Connect</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
