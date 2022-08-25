import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 16px;

    @media ${p => p.theme.device.laptop} {
      margin-right: 24px;
    }
  }
`;
