
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

import cs1 from '../../images/youth.png'
import cs2 from '../../images/deh.png'
import cs3 from '../../images/uk.png'
import cs4 from '../../images/france.png'
import cs5 from '../../images/northeast.png'


import './style.css'

class CaseSlide extends Component {
    
    render() {
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }
        return (
          <div className="wpo-case-area section-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className="wpo-section-title">
                              <span>Our Partners</span>
                              <h2>Partners</h2>
                          </div>
                      </div>
                  </div>
                  <div className="wpo-case-wrap">
                      <div className="wpo-case-slider">
                        <Slider {...settings}>
                          <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src={cs1} alt=""/>
                                    </div>
                                    <div className="wpo-case-content">
                                        <div className="wpo-case-text-top">
                                            <h2>YOUTHS FOR EXCELLENCE LIMITED</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                The American Friends of Jamaica is a not-for-profit 501 (c)(3) organization dedicated to supporting Jamaican charitable organizations and social initiatives working to improve the lives of Jamaicans through systemic development in the areas of education, health care and economic development.
                                                Founded in 1982 by a handful of Jamaicans and Americans who loved Jamaica and wanted to see it prosper, the organization has created a legacy of philanthropy dedicated to the people of Jamaica, raising over U$14 million to date on behalf of Jamaica’s non-profit and charitable organizations.
                                                </div>
                                            </div>
                                         
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="https://theafj.org/">Learn More</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src={cs2} alt=""/>
                                    </div>
                                    <div className="wpo-case-content">
                                        <div className="wpo-case-text-top">
                                            <h2>DEH ABROAD

</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                Deh Abroad Corporation is a non-profit network for wealth and cultural awareness that provides a premiere information portal to the Caribbean diaspora for business services, cultural events and educational development. The organization was incorporated in 2018, and has been focused primarily on building out its footprint in New York City. Deh Abroad Corporation has filled the need for such a platform in the Caribbean community and offers the following: a) a technology platform that offers a single and scalable online directory of Caribbean businesses for use by individuals and organizations, b) internship or mentorship opportunities for students with organizations and businesses registered to the Deh Abroad platform and 3) ​listing of events pertaining to the Caribbean diaspora.
                                                To date, there are over 500 registered businesses on the platform that want to partner with and promote the culture of the Caribbean diaspora. 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="https://www.dehabroad.com/">Learn More</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src={cs3} alt=""/>
                                    </div>
                                    <div className="wpo-case-content">
                                        <div className="wpo-case-text-top">
                                            <h2>JAMAICANS INSPIRED UK</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                Jamaicans Inspired ® otherwise known as "JamIn" is a dynamic, purposeful and passionate diaspora organisation. The organisation welcomes all ages as members, however their focus is youth. They are an inclusive  organisation and recognises the value of the more senior diaspora. They are a non-political organisation and were established to help reconnect Jamaican 1st, 2nd, 3rd and 4th Jamaicans back to Jamaica through investments, business, philanthropic giving, heritage, culture, music sport and spiritual connectivity.
                                                They offer free membership however there is an option to become a suscribed member which gives you membership benefits to international brands such as Enterprise, National and Alamo car rentals, Selected Tours and Accomodation in Jamaica in addition to discounts with VIP Attractions Jamaica.
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="https://www.jamaicans-inspired.com/about-us">Learn More</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src={cs4} alt=""/>
                                    </div>
                                    <div className="wpo-case-content">
                                        <div className="wpo-case-text-top">
                                            <h2>THE ASSOCIATION OF JAMAICAN NATIONALS IN FRANCE</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                The mission of the Association of Jamaican Nationals in France (JAMIN FRANCE) is to promote Jamaican culture in France, build bonds and foster solidarity in the Jamaican community and assist in  advancing the welfare of Jamaicans in France .
                                                The vision of the association is to bring Jamaica and France closer together through local , regional and national events organised throughout France and  , where possible, in Jamaica . 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="https://jaminfrance.wixsite.com/jaminfrance">Learn More</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-case-single">
                                <div className="wpo-case-item">
                                    <div className="wpo-case-img">
                                        <img src={cs5} alt=""/>
                                    </div>
                                    <div className="wpo-case-content">
                                        <div className="wpo-case-text-top">
                                            <h2>JAMAICA DIASPORA NORTHEAST USA</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                Jamaica Diaspora Northeast USA (JANED) is a group of diaspora members that was created by Dr. Karren Dunkley, PhD., Northeast USA Representative on the Jamaican Ministry of Foreign Affairs and Foreign Trade's Global Jamaica Diaspora Council. It serves to connect Jamaicans in the Northeast Diaspora and enact the mandate of the council.
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="https://web.facebook.com/groups/jdneusa?_rdc=1&_rdr">Learn More</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                      </div>
                  </div>
              </div>
          </div>
            );
        }
    }
    
    export default CaseSlide;
          
          
          
          
