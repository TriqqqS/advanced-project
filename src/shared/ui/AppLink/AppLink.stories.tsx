import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.INVERTED,
  },
};

export const Red: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const InvertedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: AppLinkTheme.INVERTED,
  },
};

export const RedDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: AppLinkTheme.RED,
  },
};
