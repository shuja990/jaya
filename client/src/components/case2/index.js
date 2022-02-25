import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db, storage } from "../../main-component/App/App";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Casesection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagee, setImagee] = useState("");
  const [I, setI] = useState("");
  const [event, setEvent] = useState({
    name: "",
    short: "",
    description: "",
    image: "",
  });
  const uploadImage = (event) => {
    toast.info("Image Upload started");
    var fil = event.target.files[0];
    const storageRef = ref(storage, "images/" + fil.name);
    const uploadTask = uploadBytesResumable(storageRef, fil);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setI(downloadURL);
          toast.success("Image Uploaded succesfully");
        });
      }
    );
  };
  useEffect(() => {
    async function getData() {
      const docRef = doc(db, "projects", "0CbpCFTJeDNNzDKBXj4H");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
          let e = docSnap.data().events
        setProjects(e);
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
  const showModal = () => {
    document.getElementById("exampleModal").style.display = "block";
  };
  const addEvent = () => {
    // e.preventDefault();
    event.image = I;
    projects.push(event);
    console.log(projects);
    const cityRef = doc(db, "projects", "0CbpCFTJeDNNzDKBXj4H");
    setDoc(cityRef, { events: projects }, { merge: true });
  };
  if (loading === true || projects.length===0) {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          onClick={showModal}
          data-target="#exampleModal"
        >
          Add Entry
        </button>
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: 5 }}
        >
          <div className="modal-dialog" role="document" style={{ zIndex: 5 }}>
            <div className="modal-content" style={{ zIndex: 5 }}>
              <div className="modal-header" style={{ zIndex: 5 }}>
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ zIndex: 5 }}
                >
                  Add Event
                </h5>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ zIndex: 5 }}>
                <form style={{ zIndex: 5 }}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={event.name}
                      onChange={(e) =>
                        setEvent({ ...event, name: e.target.value })
                      }
                      name="date"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      value={imagee}
                      required
                      onChange={(e) => uploadImage(e)}
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Short Description
                    </label>
                    <input
                      type="text"
                      value={event.short}
                      required
                      onChange={(e) =>
                        setEvent({ ...event, short: e.target.value })
                      }
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      value={event.description}
                      required
                      onChange={(e) =>
                        setEvent({ ...event, description: e.target.value })
                      }
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ zIndex: 5 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    addEvent();
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
      <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          onClick={showModal}
          data-target="#exampleModal"
        >
          Add Entry
        </button>
        <div className="wpo-case-area-2 section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-section-title">
                  <span>Our projects</span>
                  <h2>Popular Projects that You Should Know</h2>
                </div>
              </div>
            </div>
            <div className="wpo-case-wrap">
              <div className="row">
                {projects.map((e) => (
                  <div className="col-lg-4 col-md-6 custom-grid col-12">
                    <div className="wpo-case-item">
                      <div className="wpo-case-img">
                        <img src={e.image} alt={e.name} />
                      </div>
                      <div className="wpo-case-content">
                        <div className="wpo-case-text-top">
                          <h2>{e.name}</h2>
                          <p>{e.short}</p>
                          <div className="progress-section">
                            <div className="process">
                            </div>
                          </div>
                        </div>
                        <div className="case-btn">
                          <ul>
                            {/* <li>
                              <Link to="/case-single">
                                Learn More
                              </Link>
                            </li> */}
                            <li>
                              <Link to="/donate">
                                Donate Now
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: 5 }}
        >
          <div className="modal-dialog" role="document" style={{ zIndex: 5 }}>
            <div className="modal-content" style={{ zIndex: 5 }}>
              <div className="modal-header" style={{ zIndex: 5 }}>
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ zIndex: 5 }}
                >
                  Add Event
                </h5>
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ zIndex: 5 }}>
                <form style={{ zIndex: 5 }}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={event.name}
                      onChange={(e) =>
                        setEvent({ ...event, name: e.target.value })
                      }
                      name="date"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      value={imagee}
                      required
                      onChange={(e) => uploadImage(e)}
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Short Description
                    </label>
                    <input
                      type="text"
                      value={event.short}
                      required
                      onChange={(e) =>
                        setEvent({ ...event, short: e.target.value })
                      }
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      value={event.description}
                      required
                      onChange={(e) =>
                        setEvent({ ...event, description: e.target.value })
                      }
                      name="restaurant"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ zIndex: 5 }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    addEvent();
                    document.getElementById("exampleModal").style.display =
                      "none";
                  }}
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Casesection;
