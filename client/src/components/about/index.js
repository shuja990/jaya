import React from "react";
import img1 from "../../images/about.png";
import VideoModal from "../ModalVideo";
import "./style.css";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="wpo-about-area section-padding">
      <div className="container">
        <div className="row">
          <div className="wpo-section-title">
            <span>What We Do?</span>
            <h2>Jamaican American Youth Alliance</h2>
          </div>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap">
              <p className="col-lg-6 col-md-12 col-sm-12">
                Jamaican American Youth Alliance, otherwise known as JAYA, is a
                New York based 501 (c) (3) Jamaica diaspora membership
                organisation that targets 1st- 4th generation young Jamaicans in
                the USA (18-35 years). The idea for the organisation was
                conceptualized by Patrick Maitland, former Community Relations
                Officer at the Consulate General of Jamaica in New York and
                Dominic Christopher, Founder of Deh Abroad and Bickle, Inc. out
                of a clear need for a youth organisation that supports the needs
                of the diaspora by centering them in the discussions around
                Jamaica's national development. Jénine Shepherd was appointed
                Founding President in November of 2019 to bring the organisation
                to life and plan our roadmap. JAYA was then incorporated in
                January of 2020 and since then has held numerous forums with
                heads of government in Jamaica and the USA that has reached an
                average of 10,000 participants, fundraised for COVID-19 relief
                in Jamaica and collaborated with Jamaican embassies to fundraise
                for repatriation flights of Jamaicans stranded in Europe due to
                the COVID-19 pandemic.
              </p>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="">
                <img src={img1} alt="" />
              </div>
            </div>

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
            <p className="col-lg-12 col-md-12 col-sm-12">
                JAYA boasts an impressive membership of US politicians,
                academics, entrepreneurs, activists, athletes, journalists and
                many others who are all at the forefront of their fields and
                most importantly, love Jamaica and want to empower other
                Jamaicans. Through our social programming we help persons in the
                diaspora to connect with each other and get in touch with the
                Jamaican culture. Through our lobbying, forums and education
                campaigns, we help to raise awareness around the issues that
                affect the persons in our community among key decision makers
                and the general public. Our mentoring and networking initiatives
                help young Jamaicans progress professionally so that they too
                will pay it forward and help Jamaica to grow.{" "}
              </p>
              <div className="btns">
                <a href="/donate" className="theme-btn" onClick={ClickHandler}>
                  Donate Now
                </a>
                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
