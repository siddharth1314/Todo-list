import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate(); 

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      // Successful login
      alert(`Logged in as ${username}`);
      Navigate("/todo"); // Redirect to the to-do list page
    } else {
      // Failed login
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;





