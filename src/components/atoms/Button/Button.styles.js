import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 22.58px;
  height: 22.58px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
