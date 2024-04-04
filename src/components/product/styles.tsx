import styled from "styled-components";
import { TestProps } from "../../test/types/propsType";

export const ProductWrapper = 
styled.article.attrs((props: TestProps) => ({
  'data-testid': props['data-testid']
}))
`
  width: 21rem;
  color: ${props => props.theme.main};TestProps
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: .5rem;
  margin-bottom: .5rem;
`;

export const ProductImage = styled.figure`
  width: 100%;
  height: 13rem;
  overflow: hidden;
  margin: 0;
`;

export const ProductImageItem = styled.img`
  width: 100%;
`;

export const ProductTitle = styled.h1<{ bold?: boolean; }>`
  font-size: 1rem;
  color: ${props => props.theme.main};
  font-weight: bold;
  line-height: 1.3rem;
  margin-top: 1rem;
`;

export const ProductDescription = styled.p<{ bold?: boolean; }>`
  font-size: .8rem;
  color: ${props => props.theme.main};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  line-height: 1.2rem;
  margin: 0;
`;

export const Button = 
styled.button.attrs((props: TestProps) => ({
  'data-testid': props['data-testid']
}))`
    font-size: 1rem;
    color: white;
    background: #c95757;
    padding: .5rem 1rem;
    margin: 0 auto;
    border: none;
    border-radius: 1rem;
    transition: background 200ms ease-in-out;
    &:hover {
        cursor: pointer;
        background: #a64848;
    }
`;
