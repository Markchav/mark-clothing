import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding-top: 18px;

  @media (max-width: 420px) {
    padding-bottom: 100px;
padding-top: 0%;
}


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
    font-size: 13px;
    padding:1px;
  }}

  /* @media (max-width: 420px) {
  button {
    padding: 10px;
  }
} */
`;