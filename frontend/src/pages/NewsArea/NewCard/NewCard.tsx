import React from "react";
import "./NewCard.scss";
import {Link} from "react-router-dom";
import {NewsAreaCard} from "../../../models/NewsAreaCard";

export function NewCard({title, type, text, county, image, id}: NewsAreaCard) {
    return (
        <article className="new-card">
            <Link to={`/information?id=${id}`} className="new-card__image-ibg">
                <img src={image} alt=""/>
            </Link>
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