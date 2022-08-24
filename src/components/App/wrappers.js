import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 24px;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }
`;
