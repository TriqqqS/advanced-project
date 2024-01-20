import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: Partial<StateSchema>;
  isDev?: boolean;
}

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, isDev } = props;

  const store = createReduxStore(initialState as StateSchema, isDev);

  return <Provider store={store}>{children}</Provider>;
};
