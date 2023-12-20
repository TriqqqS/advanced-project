import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda ad rerum ab laudantium sunt saepe libero voluptatem accusantium, incidunt iste, corrupti quod soluta deserunt fugiat nulla tempora quis? Temporibus.",
  },
};
