import React from 'react';
import styled from 'styled-components';

const CircularProgressContainer = styled.svg`
  transform: rotate(-90deg);

  circle {
    transition: all 100ms linear;
  }
`;

const CircularProgress: React.FC<{ value: number }> = ({ value = 0 }) => {
  return (
    <CircularProgressContainer width="100" height="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        strokeWidth="10"
        fill="transparent"
        stroke="#d1d5db"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="#ef4444"
        strokeWidth="10"
        strokeDashoffset={100 - value}
        strokeDasharray={100}
        pathLength={100}
      />
    </CircularProgressContainer>
  );
};

export default CircularProgress;
