import styled from 'styled-components/native'

export const ContentInput = styled.TextInput`
  flex: 1;
  height: 45px;

  padding: 16px;
  
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_200};  
`
