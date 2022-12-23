import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {NewsAreaCard} from "../../models/NewsAreaCard";
import {LoginRequest} from "../../models/LoginRequest";
import {CardFullInfo} from "../../models/CardFullInfo";

export const storyApi = createApi({
    reducerPath: "story/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    endpoints: (build) => ({
        getStoriesByType: build.query<NewsAreaCard[], string>({
            query: (type: string) => ({
                url: `story/byType/${type}`,
                method: "GET"
            }),
        }),
        getStoryById: build.query<CardFullInfo, string>({
            query: (id: string) => ({
                url: `story/${id}`,
                method: "GET"
            }),
        }),
        loginUser: build.mutation<boolean, LoginRequest>({
            query: (payload: LoginRequest) => ({
                url: "auth/login",
                method: "POST",
                body: payload,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
        }),
    }),
});

export const {
    useGetStoriesByTypeQuery,
    useGetStoryByIdQuery,
    useLazyGetStoriesByTypeQuery,
    useLazyGetStoryByIdQuery,
    useLoginUserMutation
} = storyApi
