import type { ReactNode } from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

interface InputActionsProps extends TouchableOpacityProps {
	children: ReactNode
}

export const InputActions = ({ children, ...rest }: InputActionsProps) => {
	return <TouchableOpacity {...rest}>{children}</TouchableOpacity>
}
