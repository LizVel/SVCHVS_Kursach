import React from "react";
import "./LoginPage.scss";

export function LoginPage() {
    return (
        <div className="wrapper">
            <main className={"login-page"}>
                <div className={"login-page__container"}>
                    <form className={"login-page__form"}>
                        <label className="login-page__section login-section">
                            <span className="login-section__label">Username *</span>
                            <input type={"text"}
                                   placeholder={"Enter your Username"}
                                   className={"login-section__input"}/>
                        </label>
                        <label className="login-page__section login-section">
                            <span className="login-section__label">Password *</span>
                            <input type={"password"}
                                   placeholder={"Enter your Password"}
                                   className={"login-section__input"}/>
                        </label>
                        <label className="login-page__section login-section login-section_checkbox">
                            <div className={"login-page__input-checkbox input-checkbox"}>
                                <input type={"checkbox"}
                                       className={"input-checkbox__input"}/>
                                <span className={"input-checkbox__checkmark _icon-check-solid"}></span>
                            </div>

                            <span className="login-section__label">Remember me</span>
                        </label>
                        <button className="login-page__submit-button">
                            log in
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}