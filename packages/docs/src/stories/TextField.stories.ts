import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { TextField } from '@adalove-ui/react';
// import { colors } from '@adalove-ui/tokens';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  decorators: [
    (Story) => {
      return React.createElement('div', {
        style: {
          padding: '3rem',
          maxWidth: '400px',
          margin: '0 auto'
        }
      }, React.createElement(Story));
    }
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',

  },
		argTypes: {
			startAdornment: {
				control: 'select',
				options: [
					"Checked",
					"AlarmClockOutline",
					"AlarmClockSolido",
					"AlarmExclamationOutline",
					"AlarmExclamationSolid",
					"AlertQuestion",
					"Alert",
					"AppAuthenticator",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRightLong",
					"ArrowRight",
					"ArrowSort",
					"ArrowsLeftRightOutline",
					"ArrowsLeftRightSolido",
					"ArrowsMinimizeOutline",
					"ArrowsMinimizeSolido",
					"ArrowsRepeat1Outline",
					"ArrowsRepeat1Solido",
					"ArrowsRepeatOutline",
				],
			},
			endAdornment: {
				control: 'select',
				options: [
					"Checked",
					"AlarmClockOutline",
					"AlarmClockSolido",
					"AlarmExclamationOutline",
					"AlarmExclamationSolid",
					"AlertQuestion",
					"Alert",
					"AppAuthenticator",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRightLong",
					"ArrowRight",
					"ArrowSort",
					"ArrowsLeftRightOutline",
					"ArrowsLeftRightSolido",
					"ArrowsMinimizeOutline",
					"ArrowsMinimizeSolido",
					"ArrowsRepeat1Outline",
					"ArrowsRepeat1Solido",
					"ArrowsRepeatOutline",
				],
			},
  },
  args: {
    label: 'Label',
    name: 'name',
    type: 'text',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    helperText: 'Helper',
		startAdornment: 'AlertQuestion',
		endAdornment: 'AlertQuestion',
		// fieldAdapter: {
		// 	value: 'teste',
		// 	onChange: () => {},
		// 	onBlur: () => {},
		// 	name: 'name',
		// 	error: 'campo obrigatório',
		// 	isTouched: true,
		// },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    label: 'Label',
    name: 'name',
    type: 'text',
    placeholder: 'Placeholder',
    required: true,
    disabled: false,
    helperText: 'Helper',
  },
};
