import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitUser(event) {
    event.preventDefault();
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          Cookies.set("jwt-token", data.token, { expires: 7, secure: true });
          setUsername("");
          setPassword("");
          navigate("/jwt-safehouse");
        } else {
          alert(data.message);
        }
      });
  }
  return (
    <div style={{ padding: "50px" }}>
      <h1>Login </h1>
      <br />

      <form onSubmit={submitUser}>
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Home;
