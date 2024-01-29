import { configureStore } from "@reduxjs/toolkit";
import produtosReducer from './reducers/produtos'

export const store = configureStore({
    reducer: {
        produtos:  produtosReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch