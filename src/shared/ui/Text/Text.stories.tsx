import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "title lorem ipsum",
    text: "Text Text Text Text Text Text Text Text Text Text",
  },
};

export const PrimaryError: Story = {
  args: {
    title: "title lorem ipsum",
    text: "Text Text Text Text Text Text Text Text Text Text",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "title lorem ipsum",
  },
};

export const onlyText: Story = {
  args: {
    text: "Text Text Text Text Text Text Text Text Text Text",
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "title lorem ipsum",
    text: "Text Text Text Text Text Text Text Text Text Text",
  },
};

export const onlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "title lorem ipsum",
  },
};

export const onlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: "Text Text Text Text Text Text Text Text Text Text",
  },
};
