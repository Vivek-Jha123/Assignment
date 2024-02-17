import React from "react";
import styles from "./Investment.module.css";

const Investment = () => {
  return (
    <>
      <div className={`container ${styles.investSec}`}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
        <span className={styles.line4}></span>
        <span className={styles.line5}></span>
        <p className={styles.Head}>
          INVEST IN
          <span className={styles.goldenText}> DUBAI</span>
        </p>
        <p className={styles.para}>
          We provide our investors with fully-managed, high-yield investment
          products catering to all levels of risk appetite. Our team has the
          expertise to provide all of our investors with the education, guidance
          and support required to maximize profits both from a short and
          long-term perspective through their entire investment journey.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h4 className={styles.boxHead}>High Fixed Returns</h4>
            <p className={styles.boxPara}>
              Build your wealth with a personalised, diversified portfolio with
              expert advice.{" "}
            </p>
            <span className={styles.goldenLine}></span>
          </div>

          <div className={styles.box}>
            <h4 className={styles.boxHead}>Outperforming Market</h4>
            <p className={styles.boxPara}>
              Earn returns that are greater than the market average with minimal
              risk and a broader risk profile, we've proudly been beating the
              market since 2016 for our clients.
            </p>
            <span className={styles.goldenLine}></span>
          </div>

          <div className={styles.box}>
            <h4 className={styles.boxHead}>Get Funded</h4>
            <p className={styles.boxPara}>
              Operating under a model of profit sharing, we make money when our
              investors make money and our success depends on your success.
            </p>
            <span className={styles.goldenLine}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;
