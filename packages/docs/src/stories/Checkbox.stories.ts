import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from '@adalove-ui/react';
// import { colors } from '@adalove-ui/tokens';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return React.createElement('div', {
        style: {
          padding: '3rem',
          maxWidth: '400px',
          margin: '0 auto',
        }
      }, React.createElement(Story));
    }
  ],
	// argTypes: {
	// 	fieldAdapter: {
	// 		control: 'object',
	// 		table: {
	// 			disable: true,
	// 		},
	// 	},
  // },
  args: {
    label: 'Label2',
    name: 'name',
    disabled: false,
		// fieldAdapter: {
		// 	value: 'teste',
		// 	onChange: () => {},
		// 	onBlur: () => {},
		// 	name: 'name',
		// 	error: 'campo obrigatório',
		// 	isTouched: true,
		// },
  },
	} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Aceitar termos e condições',
    name: 'name',
    disabled: false,
  },
};
