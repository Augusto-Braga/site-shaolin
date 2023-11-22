import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.error("Erro ao fazer a requisição", err);
      });
  });

  return (
    <div>
      <h1 className="text-red-700 font-primary text-9xl">{message}</h1>
    </div>
  );
}

export default App;
