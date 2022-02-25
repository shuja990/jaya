import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const HeaderTopbar = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  useEffect(() => {
    const u = auth.currentUser;
    // console.log(u);
    setUser(u);
  });

  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i className="fi flaticon-call"></i>+1-877-334-2276
                </li>
                <li>
                  <i className="fi flaticon-envelope"></i>info@jaya.com{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-6 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                {user !== null ? (
                  <>
                    <li>{user?.displayName}</li>
                    <li
                      onClick={() => {
                        signOut(auth)
                          .then(() => {
                              setUser(null)
                            toast.success("Signed out successfully");
                          })
                          .catch((error) => {
                            toast.error(error.message);
                          });
                      }}
                    >
                      Sign Out
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </>
                )}

                <li>
                  <Link className="theme-btn" to="/donate">
                    Donate Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
