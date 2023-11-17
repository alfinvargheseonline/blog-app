import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const AddPost = () => {
  const [inputField, changeInputField] = useState({
    userid: "",
    title: "",
    message: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/add/", inputField)
      .then((response) => {
        alert(response.data.status);
      });
  };

  return (
    <div>
      <Nav></Nav><center><h1>ADD POST</h1></center>
      <center>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  USERID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  value={inputField.userid}
                  onChange={inputHandler}
                  style={{ width: "50%", padding: "8px", borderRadius: "4px" }}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  TITLE:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={inputField.title}
                  onChange={inputHandler}
                  style={{ width: "50%", padding: "8px", borderRadius: "4px" }}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  POST:
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={inputField.message}
                  onChange={inputHandler}
                  style={{ width: "50%", padding: "8px", borderRadius: "4px" }}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button
                  onClick={readValue}
                  className="btn btn-success"
                  style={{ padding: "10px 20px", borderRadius: "4px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></center>
    </div>
    
  );
};

export default AddPost;
