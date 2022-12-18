import React from "react";
import "./StartPage.scss";
import {Link} from "react-router-dom";

export function StartPage() {
  return (
      <div className="wrapper">
          <main className={"start-page"}>
              <div className={"start-page__container"}>
                  <div className={"start-page__title"}>view</div>
                  <div className={"start-page__description"}>Журнал о путешествиях и стиле</div>
                  <Link to={`login`} className={"start-page__button"}>
                      <span>read more</span>
                  </Link>
              </div>

          </main>
      </div>
  );
}