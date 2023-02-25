import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '..';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  render: () => <Button>Button</Button>,
};
