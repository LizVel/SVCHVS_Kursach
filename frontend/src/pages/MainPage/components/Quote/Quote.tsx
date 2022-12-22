import React from "react";
import "./Quote.scss";

interface QuoteProps{
    authorImage: string;
    backgroundImage: string;
    text: string;
    authorName: string;
}

export function Quote({authorImage, backgroundImage, text, authorName}: QuoteProps) {
  return (
    <div className={"quotes"}>
        <div style={{
            background: `url(${backgroundImage}) no-repeat center center`,
            backgroundSize: "cover"}}
             className={"quotes__container"}>
            <img className={"quotes__image"} src={authorImage}/>
            <div className={"quotes__text"}>«{text}»</div>
            <div className={"quotes__author-name"}>{authorName}</div>
        </div>
    </div>
  );
}