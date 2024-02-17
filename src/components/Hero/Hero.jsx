import React from "react";
import styles from "./Hero.module.css";
import RightArrow from "../../assets/images/right-arrow.svg";
import slide1 from "../../assets/images/hero-slider.jpeg";
import slide2 from "../../assets/images/blog-image2.png";
import slide3 from "../../assets/images/blog-image3.jpeg";

const Hero = () => {
  return (
    <>
      <div className={styles.hero_sec}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 col-sm-12">
              <div className={styles.firstColumn}>
                <span className={styles.whiteLine}></span>
                <p className={styles.heroHead}>
                  Empower Your Business{" "}
                  <span className={styles.goldenText}>Finances</span>{" "}
                </p>
                <p className={styles.heroPara}>
                  Your Expert Partner in Swift Business Financing, Bridging
                  Gaps, and Ensuring Success. Thrive with Us!
                </p>
                <div className="d-flex align-items-center gap-2">
                  <span className={styles.goldColor}>Discover More</span>
                  <img src={RightArrow} width="16px" height="9px" alt="Arrow" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className={styles.fbText}>
                <span>Facebook </span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
              <div className={styles.secondColumn}>
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={slide1}
                        className="d-block "
                        width="650px"
                        height="500px"
                        alt="images"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slide2}
                        width="650px"
                        height="500px"
                        alt="images"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slide3}
                        width="650px"
                        height="500px"
                        alt="images"
                      />
                    </div>
                  </div>
                  <div className={styles.sliderPrevIcon}>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}

                      <img
                        src={RightArrow}
                        width="36px"
                        height="9px"
                        alt="Arrow"
                      />

                      <span className="visually-hidden">Previous</span>
                    </button>
                  </div>
                  <div className={styles.sliderNextIcon}>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}

                      <img
                        src={RightArrow}
                        width="36px"
                        height="9px"
                        alt="Arrow"
                      />

                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
