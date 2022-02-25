import React from 'react'
import './style.css'
import hero1 from '../../images/SarbatDhaBhalla.jpg'
import guru1 from '../../images/slider/Guru-Nanak-Dev-Ji.jpeg'
import VideoModal from '../ModalVideo'
import {Link} from 'react-router-dom'

const Hero = (props) => {

    return(
        <section className="hero hero-style-2">
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 slide-caption">
                                <div className="slide-title">
                                    <h2>The premiere youth <span>Diasopra Organization</span></h2>
                                </div>
                                <div className="slide-subtitle">
                                </div>
                                <div className="btns">
                                    <Link to="/donate" className="theme-btn">Donate Now</Link>
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
                    <div className="right-vec">
                
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;