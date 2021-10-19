import React, { useState } from "react";
import "./register/register.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = () => {
    const user = {
      email,
    };
    console.log(user);
    fetch("https://url-shortner-back.herokuapp.com/forgot-password", {
      method: "POST",
      headers: {
        "Access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 col-sm-12 form">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="FirstName">
                  <h3>Email-Id:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input onInput={(e) => setEmail(e.target.value)} type="text" />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-8 col-sm-12">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="btn btn-block btn-success"
              >
                Submit
              </button>
            </div>
            <div className="col-md-2 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="message">{message}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12"></div>
      </div>
    </div>
  );
}
