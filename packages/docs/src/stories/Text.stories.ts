import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@adalove-ui/react';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: 'Olá mundo bonito!',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {

  },
};
