import styled from "styled-components";
import { CustomeProps } from "../../test/types/propsType";

export const HeaderTop = 
styled.header<{ bold?: boolean; }>
`
    background: red;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: ${props => (props['bold'] ? 'bold' : 'normal')};
`;

export const CartAmount = 
styled.p.attrs((props: CustomeProps) => ({
  'data-testid': props['data-testid'],
}))`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  margin: 0;
`;