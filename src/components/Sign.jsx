import React, { useState } from "react";

import axios from "axios"
import { Link } from "react-router-dom";


const Sign = () => {
    const [inputField, changeInputField] = useState({
        name: "",
        image: "",
        email: "",
        password: ""
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
            .post("http://127.0.0.1:8000/api/sign/", inputField)
            .then((response) => {
                alert(response.data.status);
            });
    };

    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign In</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler} />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Image
                  </label>
                  <input type="text" className="form-control" id="username" 
                  name="image"
                  value={inputField.image}
                  onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Email
                  </label>
                  <input type="password" className="form-control" id="password" 
                  name="email"
                  value={inputField.email}
                  onChange={inputHandler}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="email" 
                   name="password"
                   value={inputField.password}
                   onChange={inputHandler}/>
                </div>


               <center>
                <button onClick={readValue} className="btn btn-success btn-block">
                  Signin
                </button></center>

                <div className="mt-3 text-center">
                  <Link to="/signup">New User? Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
