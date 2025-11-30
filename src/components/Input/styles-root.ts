import styled from 'styled-components/native'

export const RootContainer = styled.View`
  width: 100%;
  height: 45px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_700};

  border-radius: 6px;
`
