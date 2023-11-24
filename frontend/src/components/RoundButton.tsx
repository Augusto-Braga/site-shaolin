import React from "react";
import "../index.css";

interface ITransparentButtonProps {
  text: string;
  link: string;
  target?: string;
  styleButton?: string;
}

function RoundButton(props: ITransparentButtonProps) {
  const { text, link, target, styleButton } = props;
  const classNames = `${styleButton} border-2 border-white pt-3 pb-3 pr-9 pl-9 rounded-full hover:bg-shaolinRed hover:text-black hover:pt-5 
  hover:pb-5 hover:pl-11 hover:pr-11 hover:border-none duration-300`;

  return (
    <a href={link} target={target} className={classNames}>
      {text}
    </a>
  );
}

export default RoundButton;
