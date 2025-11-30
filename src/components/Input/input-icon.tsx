import type { IconProps } from 'phosphor-react-native'
import type { ElementType } from 'react'

import { theme } from '@/styles/theme'

import { IconContainer } from './styles-icon'

interface InputIconProps extends IconProps {
	icon: ElementType
}

export const InputIcon = ({ icon: Icon, ...rest }: InputIconProps) => {
	return (
		<IconContainer>
			<Icon color={theme.colors.gray_200} size={20} {...rest} />
		</IconContainer>
	)
}
