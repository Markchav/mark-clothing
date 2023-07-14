import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14px;
  row-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap:10px ;
}
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;