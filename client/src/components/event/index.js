import React from 'react'
import pr1 from '../../images/Gatka1.jpg'
import {Link} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import './style.css'
import { useEffect } from 'react'
import { useState } from 'react'
import {db} from '../../main-component/App/App'
const EventSection = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     } 

     useEffect(() => {
        async function getData() {
          const docRef = doc(db, "events", "fwTzT8JQBeHNsvs0QP7q");
          const docSnap = await getDoc(docRef);
    
          if (docSnap.exists()) {
            setProjects(docSnap.data().events);
            setLoading(false);
            console.log(docSnap.data().events);
            console.log(projects);
          } else {
            // doc.data() will be undefined in this case
            console.log(docSnap);
            toast.error("Error fetching data");
          }
        }
        getData();
      }, []);

    if(loading===true){
        return <div></div>
    }  
    else{
    return(
        <div className="wpo-event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Our Events</h2>
                            {/* <h2>Upcoming Events</h2> */}
                        </div>
                    </div>
                </div>
                <div className="row-events">
                    {
                        projects.slice(0, 3).map((item)=>(
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <img src={item.image} alt={item.name}/>
                                    {/* <div className="thumb-text">
                                        <span>14</span>
                                        <span>AUG</span>
                                    </div> */}
                                </div>
                                <div className="wpo-event-text">
                                    <h2>{item.name}</h2>
                                    <ul>
                                        <li><i className="fa fa-clock-o" aria-hidden="true"></i>{item.time}</li>
                                        <li><i className="fi flaticon-pin"></i>{item.location}</li>
                                    </ul>
                                    <p>{item.short}</p>
                                    <Link onClick={ClickHandler} to="/event-details">Learn More...</Link>
                                </div>
                            </div>
                        </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
                }
}

export default EventSection;