import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const CtaSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-cta-area ${props.ctaclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-cta-text">
                            <h2>Building Jamaicans abroad to build Jamaicans a yaad!</h2>
                            <p>Motto, Jamaican American Youth Alliance</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now</Link>
                                <Link onClick={ClickHandler}to="/Volunteer" className="theme-btn-s2">Join Us Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;