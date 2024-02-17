import React from "react";
import styles from "./Blog.module.css";
import BlogImage2 from "../../assets/images/blog-image2.png";
import BlogImage3 from "../../assets/images/blog-image3.jpeg";
import BlogImage1 from "../../assets/images/hero-slider.jpeg";

const Blog = () => {
  return (
    <>
      <div className={`container ${styles.blogSec}`}>
        <p className={styles.Head}>
          OUR
          <span className={styles.goldenText}> BLOGS</span>
        </p>
        <p className={styles.para}>
          We provide our investors with fully-managed, high-yield investment
          products catering to all levels of risk appetite. Our team has the
          expertise to provide all of our investors with the education, guidance
          and support required to maximize profits both from a short and
          long-term perspective through their entire investment journey.
        </p>

        <div className={`row ${styles.blogFirstRow}`}>
          <div className={`col-lg-5 col-sm-12 ${styles.blogFirstColumn}`}>
            <div className={styles.firstColumnImageBox}>
              <img src={BlogImage1} width="523px" height="522px" alt="" />

              <div className={styles.firstColumnImageBoxContent}>
                <div className={styles.dateContent}>
                  <p className={styles.dateContentHead}>DEVELOPMENT</p>
                  <p className={styles.dateContentDate}>11March 2023</p>
                </div>
                <h3 className={styles.firstColumnImageBoxContentHead}>
                  Best Website to research for your next project
                </h3>
                <p className={styles.firstColumnImageBoxContentPara}>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs{" "}
                </p>
                <p className={styles.readMoreText}>Read More...</p>
              </div>
            </div>
          </div>
          <div className={`col-lg-7 col-sm-12 ${styles.blogFirstColumn}`}>
            <div className={`row ${styles.blogFirstRow}`}>
              <div className={`col-6 ${styles.blogFirstColumn}`}>
                <img src={BlogImage2} width="319px" height="261px" alt="" />
              </div>
              <div className={`col-6 ${styles.blogFirstColumn}`}>
                <div className={styles.blogBox}>
                  <div className={styles.dateContentSecondColumn}>
                    <p className={styles.dateContentSecondColumnHead}>
                      DEVELOPMENT
                    </p>
                    <p className={styles.dateContentSecondColumnDate}>
                      11March 2023
                    </p>
                  </div>

                  <h3 className={styles.secondColumnImageBoxContentHead}>
                    Best Website to research for your next project
                  </h3>
                  <p className={styles.secondColumnImageBoxContentPara}>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs{" "}
                  </p>
                  <p className={styles.secondreadMoreText}>Read More...</p>
                </div>
              </div>
            </div>
            <div className={`row ${styles.blogFirstRow}`}>
              <div className={`col-6 ${styles.blogFirstColumn}`}>
                <div className={styles.blogBox}>
                  <div className={styles.dateContentSecondColumn}>
                    <p className={styles.dateContentSecondColumnHead}>
                      DEVELOPMENT
                    </p>
                    <p className={styles.dateContentSecondColumnDate}>
                      11March 2023
                    </p>
                  </div>

                  <h3 className={styles.secondColumnImageBoxContentHead}>
                    Best Website to research for your next project
                  </h3>
                  <p className={styles.secondColumnImageBoxContentPara}>
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity to beta test. Override the digital divide
                    with additional clickthroughs{" "}
                  </p>
                  <p className={styles.secondreadMoreText}>Read More...</p>
                </div>
              </div>
              <div className={`col-6 ${styles.blogFirstColumn}`}>
                <img src={BlogImage3} width="319px" height="261px" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className={styles.exploreButton}>Explore More</div>
        </div>
      </div>
    </>
  );
};

export default Blog;
