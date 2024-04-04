import styled from "styled-components";
import { CustomeProps } from "../../test/types/propsType";

export const Wrapper =
styled.div.attrs((props: CustomeProps) => ({
  'data-testid': props['data-testid'],
}))`
  padding: 1rem 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: ${props => props.theme.main};
`;