import React from "react";
import ms1 from "../../images/mission/icon1.png";
import ms2 from "../../images/mission/icon2.png";
import ms3 from "../../images/mission/icon3.png";
import ms4 from "../../images/mission/icon4.png";
import "./style.css";
import ShowMoreText from "react-show-more-text";

const Mission = (props) => {
  return (
    <div className={`wpo-mission-area ${props.subclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="" style={{ textAlign: "center" }}>
              <h2>
                We believe the empowerment of the diaspora is crucial to
                Jamaica's national development and it is our job to do so
              </h2>
            </div>
          </div>
        </div>
        <div className="wpo-mission-wrap">
          <div className="row-mission">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-grid">
              <div className="wpo-mission-item">
                <div className="wpo-mission-icon-5">
                  <img src={ms1} alt="" />
                </div>
                <div className="wpo-mission-content">
                  <h2>Our Mission</h2>
                  <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    // onClick={this.executeOnClick}
                    expanded={false}
                    width={280}
                    truncatedEndingComponent={"... "}
                  >
                    <p style={{textAlign:"center"}}>
                      Uplifting each other and Jamaicans on the mainland by
                      providing mentorship, networking opportunities and
                      advocacy around issues affecting the diaspora.
                    </p>
                  </ShowMoreText>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-grid">
              <div className="wpo-mission-item">
                <div className="wpo-mission-icon-6">
                  <img src={ms1} alt="" />
                </div>
                <div className="wpo-mission-content">
                  <h2>Our Vision</h2>
                  <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    // onClick={this.executeOnClick}
                    expanded={false}
                    width={280}
                    truncatedEndingComponent={"... "}
                  >
                  <p style={{textAlign:"left"}}>
                    To help Jamaica achieve Vision 2030 through the development
                    of the diaspora
                  </p>
                  </ShowMoreText>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Title</h2>
                                    <p>Decription</p>
                                </div>
                            </div>
                        </div> */}
            {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Title</h2>
                                    <p>Description</p>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
