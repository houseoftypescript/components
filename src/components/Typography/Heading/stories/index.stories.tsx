import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading } from '../';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

const pangram = 'The quick brown fox jumps over the lazy dog';

export const Heading9XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="9xl">
      {pangram}
    </Heading>
  ),
};

export const Heading8XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="8xl">
      {pangram}
    </Heading>
  ),
};

export const Heading7XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="7xl">
      {pangram}
    </Heading>
  ),
};

export const Heading6XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="6xl">
      {pangram}
    </Heading>
  ),
};

export const Heading5XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="5xl">
      {pangram}
    </Heading>
  ),
};

export const Heading4XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="4xl">
      {pangram}
    </Heading>
  ),
};

export const Heading3XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="3xl">
      {pangram}
    </Heading>
  ),
};

export const Heading2XL: Story = {
  render: () => (
    <Heading as="h1" fontSize="2xl">
      {pangram}
    </Heading>
  ),
};

export const HeadingXL: Story = {
  render: () => (
    <Heading as="h1" fontSize="xl">
      {pangram}
    </Heading>
  ),
};

export const HeadingLG: Story = {
  render: () => (
    <Heading as="h1" fontSize="lg">
      {pangram}
    </Heading>
  ),
};

export const HeadingMD: Story = {
  render: () => (
    <Heading as="h1" fontSize="md">
      {pangram}
    </Heading>
  ),
};

export const HeadingSM: Story = {
  render: () => (
    <Heading as="h1" fontSize="sm">
      {pangram}
    </Heading>
  ),
};

export const HeadingXS: Story = {
  render: () => (
    <Heading as="h1" fontSize="xs">
      {pangram}
    </Heading>
  ),
};
