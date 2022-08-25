import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 12px;

  @media ${p => p.theme.device.laptop} {
    padding: 24px;
  }

  > *:not(:last-child) {
    margin-bottom: 16px;

    @media ${p => p.theme.device.laptop} {
      margin-bottom: 32px;
    }
  }
`;
