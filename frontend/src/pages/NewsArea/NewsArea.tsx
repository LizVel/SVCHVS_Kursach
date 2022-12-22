import React, {useEffect, useState} from "react";
import "./NewsArea.scss";
import {useQuery} from "../../hooks/useQuery";
import {NewsAreaCard, NewsAreaData} from "./data";
import {NewCard} from "./NewCard/NewCard";
import {Footer} from "../../components/Footer/Footer";

export function NewsArea() {
    let query = useQuery();
    const [items, setItems] = useState<NewsAreaCard[]>([]);
    const [type, setType] = useState<string>("");

    useEffect(() => {
        const type = query.get("type");
        setType(type!);
        setItems(NewsAreaData.filter(_ => _.type === type));
    }, [])

    return (
        <div className="wrapper">
            {items && items.length > 0 &&
                <main className={"news-area"}>
                    <div className={"news-area__container"}>
                        <div className={"news-area__title title-news-area"}>
                            <div className={"title-news-area__first"}>view</div>
                            <div className={"title-news-area__second"}>
                                <div>{type}</div>
                            </div>
                        </div>
                        <section className={"news-area__body"}>
                            {items.map((_, index)=>
                                <NewCard key={_.id}
                                         {..._}/>
                                )}
                        </section>
                    </div>
                </main>
            }
            <Footer/>
        </div>
    );
}