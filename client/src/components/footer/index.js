import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <Newsletter/>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt=""/>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="https://www.facebook.com/jaya.network876/?view_public_for=109438887226972"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} to="https://www.instagram.com/jaya.network/"><i className="ti-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/support">Support Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/projects">Our Projects</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/event">Our Event</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                
                                    <li><i className="fi flaticon-pin"></i>88-28 Sutphin Boulevard, Queens, NY 11435, USA</li>
                                    <li><i className="fi flaticon-call"></i>+1-877-334-2276</li>
                                    <li><i className="fi flaticon-envelope"></i>info@jaya.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; {new Date().getFullYear().toString()} JAYA. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;