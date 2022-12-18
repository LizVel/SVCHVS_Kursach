import React, {useEffect} from "react";
import "./MainPage.scss";
import firstImage from "./img/first-image.jpg";
import secondImage from "./img/second-image.jpg";
import thirdImage from "./img/third-image.jpg";
import * as flsFunctions from "./burger-menu";

export function MainPage() {
    useEffect(() => {
        flsFunctions.menuInit();
    }, [])

  return (
    <div className="wrapper">
        <main className={"main-page"}>
            <section className={"main-page__section header"}>
                <div className={"header__title"}>VIEW</div>
                <div className={"header__slider"}>
                    <div className="header__image-ibg">
                        <img src={firstImage} alt="" />
                    </div>
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
        </main>
    </div>
  );
}