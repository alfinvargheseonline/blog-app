import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";


const Search = () => {
  const [inputField, changeInputField] = useState({
    title: "",
  });

  const [result, changeResult] = useState([]);

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/search/", inputField)
      .then((response) => {
        changeResult(response.data);
        console.log(response.data);
      });
  };

  return (
    <div>
      <Nav />
      <center><h1>SEARCH POSTS</h1></center>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={inputField.title}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center><button onClick={readValue} className="btn btn-info">
                  Search
                </button></center>  
              </div>
            </div>
          </div>
        </div>
        
        <br></br><br></br>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">


              {result.map(
                (value, index) => {
                  return <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-">
                    <div class="card mb-3">
                      <img src="https://513577.fs1.hubspotusercontent-na1.net/hubfs/513577/hub_generated/resized/3e5ddfd5-bc04-4d3f-a0ec-3a75451b5073.jpeg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.title}</h5>
                        <p class="card-text">{value.message}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                }
              )}
            </div></div>

        </div>

      </div>
    </div>
  );
};
export default Search;
