import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Pricing = () => {
  return (
    <React.Fragment>
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12" >
                <div className="price-heading clearfix">
                  <h1>Petition for Membership</h1>
                </div>
                <p>
                  Become a member and gain access to networking and mentorship
                  opportunities. Our network encompasses mentors who serve as
                  Senior Executives of Fortune 500 Corporations, Government
                  officials in the USA and Jamaica, entrepreneurs, athletes,
                  healthcare professionals, engineers, academic researchers,
                  heads of international organisations and technology leads. Our
                  members also get discounts at select resorts, car rental
                  companies and restaurants as part of our partnership with
                  PriceCut ! ​<br />
                  ​<br />
                  Check out our membership packages! ​<br />
                  ​<br />​ NOTE: We are currently not accepting applications for
                  new members, but go ahead and take a look at our packages
                  ahead of the next application cycle. Click the "Petition Now"
                  button under the desired membership package to sign up to be
                  notified of when applications open.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="generic_content clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Silver</span>
                      </div>
                    </div>

                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">499</span>
                        <span className="cent">.99</span>
                        <span className="month">/YEAR</span>
                      </span>
                    </div>
                  </div>

                  <div className="generic_feature_list">
                    <ul>
                      <li>10% discount on hotel stay with partner hotels</li>
                      <li>5% discount at partner restaurants</li>
                      <li>5 recommendations</li>
                      <li>10% discount on all JAYA networking events</li>
                    </ul>
                  </div>

                  <div className="generic_price_btn clearfix">
                    <a herf="">Petition Now</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="generic_content active clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Gold</span>
                      </div>
                    </div>

                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">1499</span>
                        <span className="cent">.99</span>
                        <span className="month">/YEAR</span>
                      </span>
                    </div>
                  </div>

                  <div className="generic_feature_list">
                    <ul>
                      <li>10% discount at partner restaurants</li>
                      <li>10% discount on hotel stay with partner hotels</li>
                      <li>15 recommendations</li>
                      <li>10% discount at partner car rental companies</li>
                      <li>10% discount on all JAYA networking events</li>
                      <li>15% discount on JAYA pixie events</li>
                      <li>One guest at 30% discount for a JAYA pixie event</li>
                    </ul>
                  </div>

                  <div className="generic_price_btn clearfix">
                    <a href="">Petition Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="generic_content clearfix">
                  <div className="generic_head_price clearfix">
                    <div className="generic_head_content clearfix">
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Platinum</span>
                      </div>
                    </div>

                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">1999</span>
                        <span className="cent">.99</span>
                        <span className="month">/YEAR</span>
                      </span>
                    </div>
                  </div>
                  <div className="generic_feature_list">
                    <ul>
                      <li>10% discount at partner restaurants</li>
                      <li>15% discount on hotel stay with partner hotels</li>
                      <li>Unlimited recommendations</li>
                      <li>15% discount with partner food deliveries</li>
                      <li>
                        20% discount on flights to Jamaica with partner airlines
                      </li>
                      <li>10% discount at partner car rental companies</li>
                      <li>25% discount on all JAYA networking events</li>
                      <li>20% discount on JAYA pixie events</li>
                      <li>
                        Two guests at 30% discount each for JAYA pixie event
                      </li>
                      <li>
                        Two guests to attend a JAYA networking event for FREE
                      </li>
                    </ul>
                  </div>

                  <div className="generic_price_btn clearfix">
                    <a className="" href="">
                      Petition Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
