import React from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate("/1")}>Start</button>
    </div>
  );
}

export default HomeScreen;
