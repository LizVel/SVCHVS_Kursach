import React from "react";
import "./LoginPage.scss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {FormSchema, FormSchemaType} from "./LoginFormValidationInfo";
import {zodResolver} from "@hookform/resolvers/zod/dist/zod";
import { useNavigate } from "react-router-dom";
import {useLoginUserMutation} from "../../store/story/story.api";
import {LoginRequest} from "../../models/LoginRequest";

export function LoginPage() {
    const navigate = useNavigate();
    const [loginUser, loginResult] = useLoginUserMutation();

    const {
        register,
        watch,
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
/*        console.log("Submit data:", data)
        navigate("/main")*/
        const loginRequest = data as LoginRequest;
        loginRequest.username = loginRequest.username.trim()
        loginRequest.password = loginRequest.password.trim()
        loginUser(loginRequest).then((data) => {
            const isLogin = data as { data: boolean };
            if (isLogin.data) {
                navigate("/main")
            }
        })
    };


    return (
        <div className="wrapper">
            <main className={"login-page"}>
                <div className={"login-page__container"}>
                    {loginResult.data !== undefined && !loginResult.data &&
                        <div className={"login-page__server-error"}>Неправильный логин или пароль</div>}
                    <form className={"login-page__form"} onSubmit={handleSubmit(onSubmit)}>
                        <label className="login-page__section login-section">
                            <span className="login-section__label">Username *</span>
                            <Controller
                                render={({field}) => <input type="text"
                                                            className={"login-section__input"}
                                                            placeholder={"Enter your Username"}
                                                            {...field} />}
                                name={"username"}
                                control={control}
                                defaultValue={""}
                            />
                            {errors.username && (
                                <span className="login-section__error">
                                  {errors.username.message}
                                </span>)}
                        </label>
                        <label className="login-page__section login-section">
                            <span className="login-section__label">Password *</span>
                            <Controller
                                render={({field}) => <input type="password"
                                                            className={"login-section__input"}
                                                            placeholder={"Enter your Password"}
                                                            {...field} />}
                                name={"password"}
                                control={control}
                                defaultValue={""}
                            />
                            {errors.password && (
                                <span className="login-section__error">
                                  {errors.password.message}
                                </span>)}
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