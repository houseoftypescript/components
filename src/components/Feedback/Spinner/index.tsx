import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.svg`
  transform: rotate(-90deg);
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(269deg);
    }
  }
`;

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer width="100" height="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        strokeWidth="10"
        stroke="#d1d5db"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="#ef4444"
        strokeWidth="10"
        strokeDashoffset={50}
        strokeDasharray={100}
        pathLength={100}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
