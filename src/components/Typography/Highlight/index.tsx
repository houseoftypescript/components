import React from 'react';
import styled from 'styled-components';

const StyledHighlight = styled.span`
  display: inline;
  padding: 0.25rem;
  color: white;
  background-color: #ef4444;
  border-radius: 0.25rem;
`;

export type HighlightProps = {
  word?: string;
  words?: string[];
  children?: string;
};

export const Highlight: React.FC<HighlightProps> = ({
  word = '',
  words = [],
  children = '',
}) => {
  if (word.length === 0 && words.length === 0) {
    return <p>{children}</p>;
  }

  if (words.length > 0) {
    return (
      <p>
        {children?.split(' ').map((w: string) => {
          if (words.includes(w)) {
            return (
              <>
                <StyledHighlight>{w}</StyledHighlight>{' '}
              </>
            );
          }
          return <>{w} </>;
        })}
      </p>
    );
  }

  return (
    <p>
      {children?.split(' ').map((w: string) => {
        if (word === w) {
          return (
            <>
              <StyledHighlight>{w}</StyledHighlight>{' '}
            </>
          );
        }
        return <>{w} </>;
      })}
    </p>
  );
};

export default Highlight;
