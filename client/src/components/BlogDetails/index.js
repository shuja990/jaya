import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import './style.css'
import blog1 from '../../images/blog/img-4.jpg'
import blog2 from '../../images/blog-details/author.jpg'
import blog3 from '../../images/blog-details/comments-author/img-1.jpg'
import blog4 from '../../images/blog-details/comments-author/img-2.jpg'
import blog5 from '../../images/blog-details/comments-author/img-3.jpg'
import blog6 from '../../images/blog/admin.jpg'

const BlogSingle = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-wpo-blog-content clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt=""/>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-details"><img src={blog6} alt=""/>  By Admin</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-calendar"></i> Sep 25,2020</Link></li>
                                    <li><Link to="/blog-details"><i className="ti-heart"></i> 35</Link></li>
                                </ul>
                                <h2>Help the helpless who need you.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </blockquote>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.</p>
                            </div>
                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <ul>
                                        <li><Link to="/blog-details">Business</Link></li>
                                        <li><Link to="/blog-details">Marketing</Link></li>
                                        <li><Link to="/blog-details">SEO</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    <ul>
                                        <li><Link to="/blog-details"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/blog-details"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div> 
      
                           
                        </div>
                     
                        
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default BlogSingle;
