import React, {useEffect, useState} from "react";
import "./NewsArea.scss";
import {useQuery} from "../../hooks/useQuery";
import {NewCard} from "./NewCard/NewCard";
import {Footer} from "../../components/Footer/Footer";
import {NewsAreaCard} from "../../models/NewsAreaCard";
import {useGetStoriesByTypeQuery, useLazyGetStoriesByTypeQuery} from "../../store/story/story.api";

export function NewsArea() {
    let query = useQuery();
    const [type, setType] = useState<string>(query.get("type")!);
    const {isLoading, data: items} = useGetStoriesByTypeQuery(type);

    return (
        <div className="wrapper">
            {isLoading && <div className={""}>Загрузка...</div>}
            {items && items.length > 0 &&
                <>
                    <main className={"news-area"}>
                        <div className={"news-area__container"}>
                            <div className={"news-area__title title-news-area"}>
                                <div className={"title-news-area__first"}>view</div>
                                <div className={"title-news-area__second"}>
                                    <div>{type}</div>
                                </div>
                            </div>
                            <section className={"news-area__body"}>
                                {items.map((_, index) =>
                                    <NewCard key={_.id}
                                             {..._}/>
                                )}
                            </section>
                        </div>
                    </main>
                    <Footer/>
                </>
            }
        </div>
    );
}