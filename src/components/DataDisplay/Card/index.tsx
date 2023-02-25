import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 1rem;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardFooter = styled.div`
  padding: 1rem;
`;

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
