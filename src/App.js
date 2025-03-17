import React from "react";

function App() {
  return (
    <div>
      Home
      <br />
      <ol>
        <li>
          <a href={"/jwt-home"}>JWT Home</a>
        </li>
        <li>
          <a href={"/jwt-safehouse"}>JWT Safe house</a>
        </li>
      </ol>
    </div>
  );
}

export default App;
