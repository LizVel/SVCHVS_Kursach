import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {storyApi} from "./story/story.api";

export const store = configureStore({
    reducer: {
        [storyApi.reducerPath]: storyApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(storyApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>