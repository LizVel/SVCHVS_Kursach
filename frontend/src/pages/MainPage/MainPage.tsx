import React, {useEffect} from "react";
import "./MainPage.scss";
import firstImage from "./img/first-image.jpg";
import secondImage from "./img/second-image.jpg";
import thirdImage from "./img/third-image.jpg";
import firstAuthor from "./img/quotes/first/author.png";
import secondAuthor from "./img/quotes/second/author.png";
import thirdAuthor from "./img/quotes/third/author.png";
import firstBackground from "./img/quotes/first/background.jpg";
import secondBackground from "./img/quotes/second/background.jpg";
import thirdBackground from "./img/quotes/third/background.jpg";
import * as flsFunctions from "./burger-menu";
import {Sliders} from "./components/Sliders/Sliders";
import {Quote} from "./components/Quote/Quote";

interface QuoteInfo{
    authorImage: string;
    backgroundImage: string;
    text: string;
    authorName: string;
}

const quotes: QuoteInfo[] = [
    {
        authorImage: firstAuthor,
        backgroundImage: firstBackground,
        text: "Посмотри на мир. Он куда удивительнее, чем сны",
        authorName: "Рэй Брэдберри"
    },
    {
        authorImage: secondAuthor,
        backgroundImage: secondBackground,
        text: "Подлинная простота объекта - это не только отсутствие беспорядка в его дизайне. Настоящая простота тонко и точно выражает суть объекта, его назначение",
        authorName: "Джонатан Айв"
    },
    {
        authorImage: thirdAuthor,
        backgroundImage: thirdBackground,
        text: "Главное — создать свой собственный стиль, свою визитную карточку. И пусть этот стиль будет уникальным для тебя и недосягаемым для других",
        authorName: "Анна Винтур"
    }
]

export function MainPage() {
    useEffect(() => {
        flsFunctions.menuInit();
    }, [])

  return (

    <div className="wrapper">
        <main className={"main-page"}>
            <div className={"main-page__container"}>
                <section className={"main-page__section header"}>

                    <div className={"header__title"}>VIEW</div>

                    <div className={"header__slider"}>
                        {/*              <div className="header__image-ibg">
                        <img src={firstImage} alt="" />
                    </div>*/}
                        <Sliders images={[firstImage, secondImage, thirdImage]}/>
                    </div>
                    <nav className="header__menu menu">
                        <button type="button" className="menu__icon icon-menu">
                            <span></span>
                        </button>
                        <ul className="menu__list menu-list">
                            <li className={"menu-list__item"}>
                                <a className={"menu-list__link"}>TRAVEL</a>
                            </li>
                            <li className={"menu-list__item"}>
                                <a className={"menu-list__link"}>DESIGN</a>
                            </li>
                            <li className={"menu-list__item"}>
                                <a className={"menu-list__link"}>STYLE</a>
                            </li>
                        </ul>
                    </nav>


                </section>
                <section className={"main-page__quotes-section"}>
                    {quotes.map((_, index)=>
                        <Quote authorImage={_.authorImage}
                               backgroundImage={_.backgroundImage}
                               text={_.text}
                               authorName={_.authorName}/>)}
                </section>
            </div>

        </main>
    </div>
  );
}