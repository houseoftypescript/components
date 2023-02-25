import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from '..';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const SwitchPrimary: Story = {
  render: () => <Switch />,
};
