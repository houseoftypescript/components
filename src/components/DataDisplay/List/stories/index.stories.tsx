import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import List from '..';

const meta: Meta<typeof List> = {
  title: 'DataDisplay/List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const ListPrimary: Story = {
  render: () => (
    <List>
      <List.Item>Item</List.Item>
      <List.Item>Item</List.Item>
      <List.Item last>Item</List.Item>
    </List>
  ),
};
