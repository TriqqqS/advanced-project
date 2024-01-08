import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";

export function createReduxStore(initialState?: StateSchema, isDev?: boolean) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: isDev || __IS_DEV__,
    preloadedState: initialState,
  });
}
