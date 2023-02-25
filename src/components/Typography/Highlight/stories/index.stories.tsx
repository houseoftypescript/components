import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Highlight } from '../';

const meta: Meta<typeof Highlight> = {
  title: 'Typography/Highlight',
  component: Highlight,
};

export default meta;
type Story = StoryObj<typeof Highlight>;

const pangram = 'The quick brown fox jumps over the lazy dog';

export const HighlightWord: Story = {
  render: () => <Highlight word="fox">{pangram}</Highlight>,
};

export const HighlightWords: Story = {
  render: () => <Highlight words={['fox', 'dog']}>{pangram}</Highlight>,
};
