import type { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, ButtonTitle } from './styles'

interface ButtonProps extends TouchableOpacityProps {
	title: string
	variant?: 'blue' | 'gray' | 'black'
}

export const Button = ({ title, variant = 'blue', ...rest }: ButtonProps) => {
	return (
		<ButtonContainer variant={variant} {...rest}>
			<ButtonTitle variant={variant}>{title}</ButtonTitle>
		</ButtonContainer>
	)
}
