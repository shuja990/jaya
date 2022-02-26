import React from "react";
import ContactForm from "../ContactFrom";

import "./style.css";

const Contactpage = () => {
  return (
    <section className="wpo-contact-form-map section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-form">
                  <h2>Get In Touch</h2>
                  <ContactForm />
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6306943181103!2d-73.81135548459534!3d40.70413047933277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260c4f38a7f99%3A0x3c9042b1c8aada8!2s88-28%20Sutphin%20Blvd%2C%20Jamaica%2C%20NY%2011435%2C%20USA!5e0!3m2!1sen!2s!4v1635811153574!5m2!1sen!2s"></iframe>
                </div>
              </div>
            </div>
            <div className="wpo-contact-info">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="info-item">
                    <div className="info-wrap">
                      <div className="info-icon">
                        <i className="ti-world"></i>
                      </div>
                      <p style={{ marginTop: "20px", textAlign: "center" }}>
                        <a
                          style={{
                            textDecoration: "none",
                            color: "#777777",
                            textAlign: "center",
                          }}
                          href=" http://maps.google.com/?q=88-28 Sutphin Boulevard, Queens, NY 11435, USA"
                        >
                          88-28 Sutphin Boulevard, Queens, NY 11435, USA
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="info-item">
                    <div className="info-wrap">
                      <div className="info-icon-2">
                        <i className="fi flaticon-envelope"></i>
                      </div>
                      <p style={{ marginTop: "20px", textAlign: "center" }}>
                        <a
                          href="mailto:info@jaya.com"
                          style={{
                            textDecoration: "none",
                            color: "#777777",
                            textAlign: "center",
                          }}
                        >
                          info@jaya.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="info-item">
                    <div className="info-wrap">
                      <div className="info-icon-3">
                        <i className="ti-headphone-alt"></i>
                      </div>
                      <p style={{ marginTop: "20px", textAlign: "center" }}>
                        <a
                          href="tel:+18773342276"
                          style={{
                            textDecoration: "none",
                            color: "#777777",
                            textAlign: "center",
                          }}
                        >
                          +1-877-334-2276
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
