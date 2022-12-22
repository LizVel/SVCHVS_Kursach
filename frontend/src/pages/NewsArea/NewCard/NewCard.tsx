import React from "react";
import "./NewCard.scss";
import {NewsAreaCard} from "../data";

export function NewCard({title, type, text, county, image}: NewsAreaCard) {
    return (
        <article className="new-card">
            <div className="new-card__image-ibg">
                <img src={image} alt=""/>
            </div>
            <div className={"new-card__body"}>
                {county
                    ? <div className={"new-card__country"}>{county}</div>
                    : <div className={"new-card__empty"}></div>}

                <div className={"new-card__title"}>{title}</div>
                <div className={"new-card__text"}>{text}</div>
            </div>
        </article>
    );
}