import React, { ReactNode } from 'react';
import styled from 'styled-components';

type AlertType = 'error' | 'success' | 'warning' | 'info';

const colors: Record<AlertType, string> = {
  error: '#ef4444',
  success: '#22c55e',
  warning: '#eab308',
  info: '#3b82f6',
};

const AlertContainer = styled.div<{
  type: AlertType;
}>`
  display: flex;
  border-radius: 0.25rem;
  overflow: hidden;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => colors[props.type]};
  color: #ffffff;
`;

const AlertTitle = styled.div`
  font-weight: 700;
`;

const AlertDescription = styled.div``;

const Alert: React.FC<{
  type: AlertType;
  children?: ReactNode;
}> = ({ type = 'info', children = <></> }) => {
  return <AlertContainer type={type}>{children}</AlertContainer>;
};

export default Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription,
});
