import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 420px) {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
`;
