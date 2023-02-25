import styled from 'styled-components';
import { fontSizes } from '../../../configs';

type TextProps = {
  fontSize?: string;
};

export const Text = styled.p<TextProps>`
  font-size: ${(props: TextProps) => fontSizes[props.fontSize || 'md']};
`;

Text.displayName = 'Text';
Text.defaultProps = { fontSize: 'md' };

export default Text;
