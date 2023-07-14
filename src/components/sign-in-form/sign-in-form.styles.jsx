import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding-bottom: 100px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 420px) {
    button {
    font-size: 11.5px;
    padding:10px;
  }}


`;