import React, {useEffect, useState} from "react";
import "./CardFullDescriptionPage.scss";
import {useQuery} from "../../hooks/useQuery";
import {CardFullInfos} from "../../data/CardFullInfos";
import {CardFullInfo} from "../../models/CardFullInfo";
import {Footer} from "../../components/Footer/Footer";
import {useGetStoriesByTypeQuery, useGetStoryByIdQuery} from "../../store/story/story.api";

export function CardFullDescriptionPage() {
    let query = useQuery();
    const [id, setId] = useState<string>(query.get("id")!)
    //const [item, setItem] = useState<CardFullInfo>();
    const {isLoading, data: item} = useGetStoryByIdQuery(id);

    return (
        <div className="wrapper">
            {isLoading && <div>Загрузка...</div>}
            {item &&
                <>
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
                    <Footer/>
                </>
            }

        </div>
    );
}