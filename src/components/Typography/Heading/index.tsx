import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../../configs';

type StyledHeading = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: string;
  children?: ReactNode;
};

const StyledHeading = styled.span<StyledHeading>`
  font-size: ${(props: StyledHeading) => fontSizes[props.fontSize || 'md']};
`;

export const Heading: React.FC<StyledHeading> = ({
  as = 'h1',
  fontSize = 'md',
  children = <></>,
}) => {
  const As = as;
  return (
    <As>
      <StyledHeading fontSize={fontSize}>{children}</StyledHeading>
    </As>
  );
};

Heading.displayName = 'Heading';
Heading.defaultProps = { fontSize: 'md' };

export default Heading;
