import React, {useEffect, useState} from "react";
import "./CardFullDescriptionPage.scss";
import {useQuery} from "../../hooks/useQuery";
import {NewsAreaData} from "../NewsArea/data";
import {CardFullInfos} from "../../data/CardFullInfos";
import {CardFullInfo} from "../../models/CardFullInfo";
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";

export function CardFullDescriptionPage() {
    let query = useQuery();
    const [item, setItem] = useState<CardFullInfo>();

    useEffect(() => {
        const id = query.get("id");
        setItem(CardFullInfos.filter(_ => _.id === id)[0])
    }, [])

    return (
        <div className="wrapper">
            {item &&
                <main className={"card-full"}>
                    <div className={"card-full__container"}>
                        <div className={"card-full__header"}>VIEW</div>
                        <div className={"card-full__body"}>
                            <div className={"card-full__text-block"}>
                                {item.country && <div className={"card-full__country"}>{item.country}</div>}
                                <div className={"card-full__title"}>{item.title}</div>
                                <div className={"card-full__subtitle"}>{item.subtitle}</div>
                                <div className={"card-full__text"}>{item.text}</div>
                            </div>
                            <div className={"card-full__images"}>
                                <div className="card-full__image-ibg">
                                    <img src={item.mainImage} alt=""/>
                                </div>
                                <div className="card-full__image-ibg">
                                    <img src={item.firstAdditionalImage} alt=""/>
                                </div>
                                <div className="card-full__image-ibg">
                                    <img src={item.secondAdditionalImage} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            }
            <Footer/>
        </div>
    );
}