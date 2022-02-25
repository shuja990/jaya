import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main-component/App/App";
const Donate = (props) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
    amount:""
  });
  const {amount} = info
  const SubmitHandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "donations"), info);
  };
  const publishableKey =
    "pk_test_51GvpJkBqTtLhCjZjwbPrPtta9NtLdGLJsS3tRQRfTvGfP8xsneMD9n7lOZgSatK4RCFYRuGWnUL0rvxxuxGf9h5B00gNUmk6ZP";
  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: amount * 100,
        token,
      },
    })
      .then((response) => {
        if (response.ok) {
          SubmitHandler();
          toast.success("Payment Successful");
        }
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        toast.error("There was an issue with your payment");
      });
  };
  return (
    <div className="wpo-donation-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="wpo-donate-header">
              <h2>Make a Donation</h2>
            </div>
            <form onSubmit={SubmitHandler} action="#">
              <div className="wpo-donations-amount">
                <h2>Your Donation</h2>
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setInfo({...info,amount:e.target.value})}
                  name="text"
                  id="text"
                  placeholder="Enter Donation Amount"
                />
              </div>
              <div className="wpo-donations-details">
                <h2>Details</h2>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={info.name}
                      onChange={(e) =>
                        setInfo({ ...info, name: e.target.value })
                      }
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={info.email}
                      onChange={(e) =>
                        setInfo({ ...info, email: e.target.value })
                      }
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={info.address}
                      onChange={(e) =>
                        setInfo({ ...info, address: e.target.value })
                      }
                      name="Address"
                      id="Address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-lg-12 col-12 form-group">
                    <textarea
                      className="form-control"
                      name="note"
                      value={info.message}
                      onChange={(e) =>
                        setInfo({ ...info, message: e.target.value })
                      }
                      id="note"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                {amount > 0 ? (
                  <StripeCheckout
                    label="Pay Now"
                    name="Jaya Network"
                    // billingAddress
                    // shippingAddress
                    // image= 'https://svgshare.com/i/CUz.svg'
                    description={`Your donation is $${amount}`}
                    amount={amount * 100}
                    panelLabel="Donate Now"
                    token={onToken}
                    stripeKey={publishableKey}
                    allowRememberMe
                  />
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
