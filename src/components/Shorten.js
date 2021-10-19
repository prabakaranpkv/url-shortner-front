import React, { useState } from "react";
import "../App.css";
export default function Shorten() {
  const [longUrl, setLongUrl] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const user = {
      longUrl,
      email,
    };
    console.log(user);
    fetch("https://url-shortner-back.herokuapp.com/shorten", {
      method: "POST",
      headers: {
        "Access-control-allow-origin": "*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => setData(res.url.urlData));
  };

  return (
    <div className="container-fluid">
      <h1>URL Shortener</h1>
      <div className="row">
        <div className="col-md-8 col-sm-12 form">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label>
                  <h3>Long URL:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input
                  onInput={(e) => setLongUrl(e.target.value)}
                  type="text"
                />
              </td>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <th>
                <label htmlFor="FirstName">
                  <h3>E-mail:</h3>
                </label>
              </th>
            </div>
            <div className="col-md-6 col-sm-12">
              <td>
                <input onInput={(e) => setEmail(e.target.value)} type="email" />
              </td>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-12"></div>
            <div className="col-md-8 col-sm-12">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-block btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{data.message}</div>
      <table>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>URL Code</th>
          </tr>
        </thead>
        {data.map((x) => (
          <tbody>
            <tr>
              <td>
                <a href={x.longUrl}>{x.longUrl}</a>
              </td>
              <td>
                <a href={x.longUrl}>{x.shortUrl}</a>
              </td>
              <td>{x.urlCode}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
