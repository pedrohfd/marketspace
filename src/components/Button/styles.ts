import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity<{
	variant: 'blue' | 'gray' | 'black'
}>`
  height: 42px;
  width: 100%;

  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ variant, theme }) => {
		switch (variant) {
			case 'blue':
				return theme.colors.blue_400
			case 'gray':
				return theme.colors.gray_500
			case 'black':
				return theme.colors.gray_100
		}
	}}
`

export const ButtonTitle = styled.Text<{
	variant: 'blue' | 'gray' | 'black'
}>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ variant, theme }) => {
		switch (variant) {
			case 'blue':
				return theme.colors.gray_700
			case 'gray':
				return theme.colors.gray_200
			case 'black':
				return theme.colors.gray_700
		}
	}}
`
