import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text } from '..';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

const pangram = 'The quick brown fox jumps over the lazy dog';

export const Text9XL: Story = {
  render: () => <Text fontSize="9xl">{pangram}</Text>,
};

export const Text8XL: Story = {
  render: () => <Text fontSize="8xl">{pangram}</Text>,
};

export const Text7XL: Story = {
  render: () => <Text fontSize="7xl">{pangram}</Text>,
};

export const Text6XL: Story = {
  render: () => <Text fontSize="6xl">{pangram}</Text>,
};

export const Text5XL: Story = {
  render: () => <Text fontSize="5xl">{pangram}</Text>,
};

export const Text4XL: Story = {
  render: () => <Text fontSize="4xl">{pangram}</Text>,
};

export const Text3XL: Story = {
  render: () => <Text fontSize="3xl">{pangram}</Text>,
};

export const Text2XL: Story = {
  render: () => <Text fontSize="2xl">{pangram}</Text>,
};

export const TextXL: Story = {
  render: () => <Text fontSize="xl">{pangram}</Text>,
};

export const TextLG: Story = {
  render: () => <Text fontSize="lg">{pangram}</Text>,
};

export const TextMD: Story = {
  render: () => <Text fontSize="md">{pangram}</Text>,
};

export const TextSM: Story = {
  render: () => <Text fontSize="sm">{pangram}</Text>,
};

export const TextXS: Story = {
  render: () => <Text fontSize="xs">{pangram}</Text>,
};
