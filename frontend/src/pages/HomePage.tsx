import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import RoundButton from "../components/RoundButton";

function HomePage() {
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
  }, []);

  return (
    <div className="font-primary bg-black w-screen h-content flex flex-col justify-center">
      <aside className="flex flex-col p-20 w-max">
        <h2 className="text-shaolinRed text-6xl">SHAOLIN MONKEYS</h2>
        <h3 className="text-white text-2xl">CULTURA NERD E ROCK N' ROLL</h3>
        <div className="flex pt-10 pb-20 pr-10 text-white">
          <RoundButton
            text="SAIBA MAIS SOBRE NÓS"
            link="/band"
            styleButton="bg-white text-black mr-5 m"
          ></RoundButton>
          <RoundButton text="SAIBA MAIS SOBRE NÓS" link="/band"></RoundButton>
        </div>
      </aside>
    </div>
  );
}

export default HomePage;
