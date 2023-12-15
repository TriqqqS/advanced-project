import type { Meta, StoryObj } from "@storybook/react";

import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outlined: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlinedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};
