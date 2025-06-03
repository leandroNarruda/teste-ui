import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '@adalove-ui/react';
// import { colors } from '@adalove-ui/tokens';

const meta = {
  title: 'Example/Select',
  component: Select,
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
					height: '200px',
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
    label: 'Label',
    name: 'name',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    placeholder: 'Placeholder',
		multiple: true,
    required: true,
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
	} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Label',
    name: 'name',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    // placeholder: 'Placehodsfdlder',
    required: true,
    disabled: false,
  },
};
