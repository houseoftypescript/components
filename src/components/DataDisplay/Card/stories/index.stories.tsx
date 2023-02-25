import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from '..';
import Divider from '../../Divider';

const meta: Meta<typeof Card> = {
  title: 'DataDisplay/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardPrimary: Story = {
  render: () => (
    <Card>
      <Card.Header>Header</Card.Header>
      <Divider />
      <Card.Body>Body</Card.Body>
      <Divider />
      <Card.Footer>Footer</Card.Footer>
    </Card>
  ),
};
