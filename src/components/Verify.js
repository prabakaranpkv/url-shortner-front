import React from "react";
import { useParams } from "react-router";
import "./navbar.css";
export default function Verify() {
  const { token } = useParams();
  console.log(token);
  return (
    <div>
      <p>{token}</p>
      <h3 className="headLine">
        Thank you for signing up with our Institute. Wish you all the best to
        achieve success!!!
      </h3>
      <button type="button" className="btn btn-success">
        Activate
      </button>
    </div>
  );
}
