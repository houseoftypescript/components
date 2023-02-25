import React, { useState } from 'react';
import styled from 'styled-components';

type StyledSwitchContainerProps = { state: boolean };

const StyledSwitchContainer = styled.div<StyledSwitchContainerProps>`
  position: relative;
  width: 2.5rem;
  height: 1.4rem;
  box-sizing: border-box;
  background-color: ${(props: StyledSwitchContainerProps) =>
    props.state ? '#ef4444' : '#d1d5db'};
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color linear 100ms;
`;

const StyledSwitchCircle = styled.div`
  position: absolute;
  top: 0.2rem;
  left: ${(props: StyledSwitchContainerProps) =>
    props.state ? '1.3rem' : '0.2rem'};
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;
  transition: all linear 100ms;
`;

export type SwitchProps = {
  defaultState?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({ defaultState = false }) => {
  const [state, setState] = useState<boolean>(defaultState);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <StyledSwitchContainer state={state} onClick={() => toggleState()}>
      <StyledSwitchCircle state={state} />
    </StyledSwitchContainer>
  );
};

export default Switch;
