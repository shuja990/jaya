import React from 'react'
import img1 from './../images/p.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="wpo-about-img-32"  style={{marginLeft:"0",paddingLeft:0}}>
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <h2>Welcome to Jamaican American Youth Alliance</h2>
                            </div>
                            <p>
                            I am deeply humbled at my appointment as President of this lovely organisation and I am excited for all the future projects we have in store for the Jamaican diaspora. When I was approached with this initiative, I quickly signed on because I truly believe in the vision of this organisation and I have an amazing team by my side to see that vision realized. Jamaica is unique in its global impact for such a small island. I am certain that our diaspora population of 3.5 million people had a large hand in making us the cultural powerhouse that we are today. Within this diaspora are persons who are passionate about Jamaica's development and want to have a hand in getting Jamaica to Vision 2030 where Jamaica will truly be the place to live, work, raise families and do business. 
                            <br/><br/>Given my past work with the Jamaican Ministry of Foreign Affairs and Foreign Trade where I was a part of a team that drafted the policy proposal for the Global Jamaica Diaspora Youth Council as part of the National Diaspora Policy, that serves to target all young Jamaicans in the diaspora so that they might effect policy change, JAYA seemed like the next natural step. I wanted to be a part of an organisation that not only involved diasporans in the national development process, but also prioritized their needs and focused on their professional and social advancement as a tool for even greater national development. This organisation is also unique in that it relies on a true alliance between the Jamaican and US governments to enact change that affects our members and their communities.
                            <br/><br/>Once again, I am truly honoured to have this opportunity to serve my Jamaican people and given how much we have managed to accomplish in my brief tenure, I am very confident in the future of this organisation. 
                            ​<br/><br/>
                            My fellow Jamaicans, I love you and am glad that you continue to support the cause!
                            <br/><br/>
                            Committed to serving you,
                            <br/><br/>
                            Jénine Shepherd
                            <br/><br/>
                            Founding President


                            </p>
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Donate Now</a>
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
    )
}

export default About;