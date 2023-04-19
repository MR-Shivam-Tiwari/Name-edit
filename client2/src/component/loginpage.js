import '../css/loginpage.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post("http://localhost:8000/login", user);
      localStorage.setItem("token", res.token);
      localStorage.setItem("email", user.email);
      alert("Login successful");
      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      <div className="bg-img">
        <div className="logindiv">
          <form action="/login" method="post" className="logincontainer">
            <h1 className="head">Member Login</h1>
            <label htmlFor="email"><b>Email</b></label>
            <input className="in" type="email" placeholder="Enter Email" onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" required />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" required />

            <button type="submit" onClick={login} className="btn">Login</button>
            <Link to="/register">New user</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
