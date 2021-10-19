import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");
  const handleRegister = () => {
    const createUser = {
      firstName,
      lastName,
      email,
      password,
      mobileNo,
    };
    console.log(createUser);
    fetch("https://url-shortner-back.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Access-control-allow-origin": "*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(createUser),
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
                  <h3>First Name:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="LastName">
                  <h3>Last Name:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="Email">
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
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="password">
                  <h3>Password:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="mobileno">
                  <h3>Mobile No:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setMobileNo(e.target.value)}
                  type="number"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-8 col-sm-12">
              <button
                onClick={handleRegister}
                type="button"
                className="btn btn-block btn-success"
              >
                Register
              </button>
            </div>
            <div className="col-md-2 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Link className="loginLink" to="/login">
                Already Have an Account? Login{" "}
              </Link>
            </div>
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
