import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./register/register.css";
export default function ResetPassword() {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { resetToken } = useParams();
  console.log("resetToken is", resetToken);
  const handleReset = () => {
    const userData = {
      resetToken,
      newPassword,
    };
    console.log(userData);

    fetch("https://url-shortner-back.herokuapp.com/reset-password", {
      method: "POST",
      headers: {
        "Access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
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
                <label htmlFor="FirstName" placeholder="Enter new password">
                  <h3>New Password:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setNewPassword(e.target.value)}
                  type="password"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-8 col-sm-12">
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-block btn-success"
              >
                Reset Password
              </button>
            </div>
            <div className="col-md-2 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="message">{message}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Link className="loginLink" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12"></div>
      </div>
    </div>
  );
}
