import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import tm1 from '../../images/team/1 (2).png'
import tm2 from '../../images/team/2.png'
import tm3 from '../../images/team/3.png'
import tm4 from '../../images/team/4.png'


const TeamSection = (props) => {
    return(
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Meet Our Team</span>
                            <h2>Our Expert Volunteer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm1} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">JÉNINE SHEPHERD</Link> </h2>
                                    <span>PRESIDENT & BOARD MEMBER</span>
                                    <ul>
                                        <li><Link to="https://web.facebook.com/shepherdjenine"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/shepherdjenine/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm2} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">DOMINIC CHRISTOPHER
</Link></h2>
                                    <span>Chairman</span>
                                    <ul>
                                        <li><Link to="https://web.facebook.com/dominic.christopher.7359"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/dehabroad/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm3} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">JOHN MATTHEWS</Link></h2>
                                    <span>VICE PRESIDENT OF OPERATIONS</span>
                                    <ul>
                                        <li><Link to="https://web.facebook.com/john.matt.3194"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/mrjohnmatt/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid" style={{marginTop:"55px"}}>
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm4} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">PATRICK MAITLAND</Link></h2>
                                    <span>VICE PRESIDENT OF OPERATIONS</span>
                                    <ul>
                                        <li><Link to="https://web.facebook.com/patricksmaitland"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="https://www.instagram.com/patricksmaitland/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;