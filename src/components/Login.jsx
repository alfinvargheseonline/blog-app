import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleLogin = () => {
    console.log(input);
    if (input.email === 'admin@gmail.com' && input.password === '1234') {
      navigate('/add'); // Change the route to the dashboard or home page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={input.password}
                    onChange={inputHandler}
                  />
                </div>
                <div className="text-center">
                  <button onClick={handleLogin} className="btn btn-success btn-lg">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <Link to="/register" className="link-primary">
                  New User? Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
