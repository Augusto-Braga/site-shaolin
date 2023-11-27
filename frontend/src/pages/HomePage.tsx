import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import RoundButton from "../components/RoundButton";
import logo from "../assets/Logo-Nova-Shaolin.png";
import InstagramLogo from "../assets/Instagram-logo";
import SpotifyLogo from "../assets/Spotify-logo";
import FacebookLogo from "../assets/Facebook-logo";
import YoutubeLogo from "../assets/Youtube-logo";
import TiktokLogo from "../assets/Tiktok-logo";
import TwitterLogo from "../assets/Twitter-logo";
import TwitchLogo from "../assets/Twitch-logo";

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
    <div className="font-primary bg-black w-screen h-content flex justify-between">
      <aside className="flex flex-col p-20 w-max justify-center">
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
      <div className="relative">
        <img className="h-4/5 w-auto filter brightness-50" src={logo} alt="" />
      </div>
      <div className="absolute inset-y-0 right-5 flex flex-col items-center justify-center text-white">
        <Link
          to="https://open.spotify.com/artist/3VixRC25lOG8adkWJ5nWxC?si=8UIGaskwQlq1PZI8_DRMEg&nd=1"
          target="_blank"
          className="m-1"
        >
          <SpotifyLogo></SpotifyLogo>
        </Link>
        <Link
          to="https://www.instagram.com/shaolinmonkeys/"
          target="_blank"
          className="m-1"
        >
          <InstagramLogo></InstagramLogo>
        </Link>
        <Link
          to="https://www.facebook.com/shaolinmonkeysband"
          target="_blank"
          className="m-1"
        >
          <FacebookLogo></FacebookLogo>
        </Link>
        <Link
          to="https://www.youtube.com/channel/UCBBq7NpCnV_tQA-6LbTF56Q"
          target="_blank"
          className="m-1"
        >
          <YoutubeLogo></YoutubeLogo>
        </Link>
        <Link
          to="https://www.tiktok.com/@shaolinmonkeys"
          target="_blank"
          className="m-1"
        >
          <TiktokLogo></TiktokLogo>
        </Link>
        <Link
          to="https://twitter.com/i/flow/login?redirect_after_login=%2Fmonkeysshaolin"
          target="_blank"
          className="m-1"
        >
          <TwitterLogo></TwitterLogo>
        </Link>
        <Link
          to="https://www.twitch.tv/shaolinmonkeysgames"
          target="_blank"
          className="m-1"
        >
          <TwitchLogo></TwitchLogo>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
