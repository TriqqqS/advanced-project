import { StoryFn } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import "app/styles/index.scss";

export const StoreDecorator = (Story: StoryFn) => (
  <StoreProvider initialState={{ counter: { value: 10 } }} isDev={true}>
    <Story />
  </StoreProvider>
);
