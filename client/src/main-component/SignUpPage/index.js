import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import s1 from "../../images/shape.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "./style.scss";
import Header from "../../components/header";

const SignUpPage = (props) => {
  const [value, setValue] = useState({
    email: "",
    displayName: "",
    password: "",
    confirm_password: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const auth = getAuth();
  const submitHandler = () => {};

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        displayName: "",
        password: "",
        confirm_password: "",
      });
      validator.hideMessages();
      createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password,
        value.displayName
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: value.displayName,
          })
            .then(() => {
              // Profile updated!
              toast.success("Registration Complete successfully!");
              props.history.push("/");
            })
            .catch((e) => {
              validator.showMessages();
              toast.error(e.message);
            });
        })
        .catch((error) => {
          validator.showMessages();
          toast.error(error.message);
          // ..
        });
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };
  return (
    <>
      <Header />
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Signup</h2>
          <p>Signup your account</p>
          <form onSubmit={submitForm}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Full Name"
                  value={value.displayName}
                  variant="outlined"
                  name="displayName"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "full name",
                  value.displayName,
                  "required|alpha"
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="E-mail"
                  value={value.email}
                  variant="outlined"
                  name="email"
                  label="E-mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("email", value.email, "required|email")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Password"
                  value={value.password}
                  variant="outlined"
                  name="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message("password", value.password, "required")}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="Confirm Password"
                  value={value.password}
                  variant="outlined"
                  name="confirm_password"
                  label="Confirm Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  onChange={(e) => changeHandler(e)}
                />
                {validator.message(
                  "confirm password",
                  value.confirm_password,
                  `in:${value.password}`
                )}
              </Grid>
              <Grid item xs={12}>
                <Grid className="formFooter">
                  <Button
                    fullWidth
                    className="cBtn cBtnLarge cBtnTheme"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Grid>
                {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                <p className="noteHelp">
                  Already have an account?{" "}
                  <Link to="/login">Return to Sign In</Link>
                </p>
              </Grid>
            </Grid>
          </form>
          <div className="shape-img">
            <img src={s1} alt="" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(SignUpPage);
