import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  gap: 25px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  div:nth-child(1) {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(2) {
    margin: 15px 0;
    width: 150px;
  }

  p:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
    margin: 0;
  }
`;
