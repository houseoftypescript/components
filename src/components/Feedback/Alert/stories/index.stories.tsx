import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Alert from '..';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertInfo: Story = {
  render: () => (
    <Alert type="info">
      <Alert.Title>Title</Alert.Title>
      <Alert.Description>Description</Alert.Description>
    </Alert>
  ),
};

export const AlertError: Story = {
  render: () => (
    <Alert type="error">
      <Alert.Title>Title</Alert.Title>
      <Alert.Description>Description</Alert.Description>
    </Alert>
  ),
};

export const AlertSuccess: Story = {
  render: () => (
    <Alert type="success">
      <Alert.Title>Title</Alert.Title>
      <Alert.Description>Description</Alert.Description>
    </Alert>
  ),
};

export const AlertWarning: Story = {
  render: () => (
    <Alert type="warning">
      <Alert.Title>Title</Alert.Title>
      <Alert.Description>Description</Alert.Description>
    </Alert>
  ),
};
