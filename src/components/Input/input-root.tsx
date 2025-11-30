import type { ReactNode } from 'react'

import { RootContainer } from './styles-root'

interface InputRootProps {
	children: ReactNode
}

export const InputRoot = ({ children }: InputRootProps) => {
	return <RootContainer>{children}</RootContainer>
}
