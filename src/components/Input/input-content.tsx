import type { TextInputProps } from 'react-native'

import { ContentInput } from './styles-content'

export const InputContent = ({ ...rest }: TextInputProps) => {
	return <ContentInput {...rest} />
}
