import {Meta, StoryObj} from "@storybook/react";
import {Clock} from "./Clock.tsx";

const meta = {
  title: "Components/Clock",
  component: Clock
} satisfies Meta<typeof Clock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Digital: Story = {
  name: "Digital",
  args: {}
}

export const Analog: Story = {
  name: "Analog",
  args: {
    isAnalog: true
  }
}