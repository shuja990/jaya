
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom'

import cs1 from '../../images/SarbatDhaBhala4.jpeg'
import cs2 from '../../images/SarbatDhaBhala5.jpeg'
import cs3 from '../../images/SarbatDhaBhala6.jpeg'
import cs4 from '../../images/SarbatDhaBhala7.jpeg'

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
                              <span>Our Causes</span>
                              <h2>Causes That Need Your Help</h2>
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
                                            <h2>Covid-19 Medical Supplies</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                    
                                                </div>
                                            </div>
                                         
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                                <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
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
                                            <h2>Support Our Farmers</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                 
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                                <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
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
                                            <h2>Old Age Home</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                      
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                                <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
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
                                            <h2>Support the Needy</h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                  
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="case-btn">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/case-single">Learn More</Link></li>
                                                <li><Link onClick={ClickHandler} to="/donate">Donate Now</Link></li>
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
          
          
          
          
