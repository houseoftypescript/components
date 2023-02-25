import styled from 'styled-components';

export const Stat = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StatLabel = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;

export const StatNumber = styled.div`
  vertical-align: baseline;
  font-weight: 600;
  font-size: 1.5rem;
  font-variant-numeric: proportional-nums;
`;

export const StatHelpText = styled.div`
  opacity: 0.8;
  font-size: 0.875rem;
`;

export default Object.assign(Stat, {
  Label: StatLabel,
  Number: StatNumber,
  HelpText: StatHelpText,
});
