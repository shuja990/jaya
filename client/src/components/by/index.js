import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import './style.css'
import {Link} from 'react-router-dom'

const Suppo = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="" style={{textAlign:"center"}}>
                            <h2>Support Us</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row-mission">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-support-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>By Mail</h2>
                                    <p>88-28 Sutphin Boulevard, Queens, NY 11435, USA </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-support-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Online</h2>
                                    <p>Make a tax deductible donation‏.</p>
    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-support-item">
                                <div className="wpo-mission-icon-7">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Over the Phone</h2>
                                    <p>It's easy to donate offline too.<ws></ws> <a href='tel:1-877-334-2276'>Call Now </a></p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-support-item">
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
                    <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suppo;