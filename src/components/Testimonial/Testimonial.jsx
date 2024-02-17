import React from "react";
import styles from "./Testimonial.module.css";
import user1 from "../../assets/images/user1.jpeg";
import user2 from "../../assets/images/user2.jpeg";
import quotes from "../../assets/images/quotes.svg";
import star from "../../assets/images/star.svg";

const Testimonial = () => {
  return (
    <>
      <div className={`container ${styles.testimonialSec}`}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
        <span className={styles.line4}></span>
        <span className={styles.line5}></span>

        <h4 className={styles.goldenText}> TESTIMONIALS</h4>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className={styles.testimonialSlides}>
                <span className={styles.testimonialLine}></span>
                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user1} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>Danial H</p>
                    <p className={styles.profession}>CEO GetNextDesign</p>
                  </div>
                </div>

                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user2} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>John H</p>
                    <p className={styles.profession}>Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.testimonialSlides}>
                <span className={styles.testimonialLine}></span>
                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user1} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>Danial H</p>
                    <p className={styles.profession}>CEO GetNextDesign</p>
                  </div>
                </div>

                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user2} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>John H</p>
                    <p className={styles.profession}>Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.testimonialSlides}>
                <span className={styles.testimonialLine}></span>
                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user1} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>Danial H</p>
                    <p className={styles.profession}>CEO GetNextDesign</p>
                  </div>
                </div>

                <div className={styles.testimonialFirstBox}>
                  <div className={styles.testimonialFirstBoxUserImage}>
                    <img src={user2} width="75px" height="75px" alt="" />
                  </div>
                  <div className={styles.testimonialFirstBoxContent}>
                    <img src={quotes} width="33px" height="24px" alt="" />
                    <div className={styles.starGroup}>
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                      <img src={star} width="23px" height="26px" alt="star" />
                    </div>
                    <p className={styles.testimonialPara}>
                      Is be upon sang fond must shew. Really boy law county she
                      unable her sister. Feet you off its like like six. Among
                      sex are leave law built now.
                    </p>
                    <p className={styles.author}>John H</p>
                    <p className={styles.profession}>Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
