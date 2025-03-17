import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function SafeHouse() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookies = Cookies.get("jwt-token");
    setToken(tokenFromCookies);
    fetch("/api/safehouse", {
      method: "GET",
      headers: {
        "jwt-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [token]);

  async function logout() {
    try {
      const response = await fetch("/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      setToken("");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  function login() {
    navigate("/");
  }

  if (!token) {
    return (
      <>
        <main style={{ padding: "50px" }}>
          <p>You&apos;re logged out</p>
          <button onClick={login}>Login</button>
        </main>
      </>
    );
  }

  return (
    <>
      <main style={{ padding: "50px" }}>
        <h1>Safehouse </h1>
        <p>
          {userData.username} your Safehouse key is{" "}
          <strong>{userData?.safehouseKey || "Loading..."}</strong>
        </p>
        <button onClick={logout}>Logout</button>
      </main>
    </>
  );
}
