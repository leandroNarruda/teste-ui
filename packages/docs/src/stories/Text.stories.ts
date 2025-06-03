import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Text } from '@adalove-ui/react';
import { colors } from '@adalove-ui/tokens';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return React.createElement('div', {
        style: {
          padding: '3rem',
          // maxWidth: '400px',
					textAlign: 'center',
          margin: '0 auto',
        }
      }, React.createElement(Story));
    }
  ],
  parameters: {
    layout: 'fullscreen',

  },
	argTypes: {
    type: {
      control: 'select',
      options: [
        'display',
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'subtitle1',
        'subtitle2',
        'subtitle2Stronger',
        'body1',
        'body1Stronger',
        'body2',
        'body2Stronger',
        'button',
        'caption',
        'overline',
      ],
    },
		color: {
			control: 'select',
			options: Object.keys(colors),
		},
  },
  args: {
    children: 'Olá mundo!',
		type: 'body1',
		color: 'coral100',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    type: 'display',
  },
};
