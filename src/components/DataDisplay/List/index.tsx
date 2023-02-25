import styled from 'styled-components';

export const List = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  overflow: hidden;
`;

export type ListItemProps = {
  last?: boolean;
};

export const ListItem = styled.div<ListItemProps>`
  ${(props: ListItemProps) =>
    props.last ? '' : 'border-bottom: 1px solid #d1d5db;'}
  padding: 1rem;
`;

export default Object.assign(List, {
  Item: ListItem,
});
