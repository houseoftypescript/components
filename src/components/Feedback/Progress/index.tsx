import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  border-radius: 0.25rem;
  height: 1rem;
  overflow: hidden;
  background-color: #d1d5db;
`;

type ProgressBarProps = { value: number };

const ProgressBar = styled.div<ProgressBarProps>`
  height: 1rem;
  overflow: hidden;
  background-color: #ef4444;
  transition: width linear 100ms;
  width: ${(props: ProgressBarProps) => props.value}%;
`;

const Progress: React.FC<{ value: number }> = ({ value = 0 }) => {
  return (
    <ProgressContainer>
      <ProgressBar value={value} />
    </ProgressContainer>
  );
};

export default Progress;
