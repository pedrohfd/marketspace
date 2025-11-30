import { EyeClosedIcon, EyeIcon } from 'phosphor-react-native'
import { useReducer } from 'react'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

import {
	BottomContent,
	Container,
	Divider,
	InputsContainer,
	LoginInfo,
	Logo,
	Subtitle,
	Title,
	TopContent,
} from './styles'

export const SignIn = () => {
	const [isPasswordShown, toggleShowPassword] = useReducer(
		state => !state,
		false
	)

	return (
		<Container>
			<TopContent>
				<Logo />

				<Divider />

				<Title />

				<Subtitle>Seu espaço de compra e venda</Subtitle>

				<LoginInfo>Acesse sua conta</LoginInfo>

				<InputsContainer>
					<Input.Root>
						<Input.Content placeholder="E-mail" />
					</Input.Root>

					<Input.Root>
						<Input.Content
							placeholder="Senha"
							secureTextEntry={isPasswordShown}
						/>

						<Input.Actions onPress={toggleShowPassword}>
							{isPasswordShown ? (
								<Input.Icon icon={EyeIcon} />
							) : (
								<Input.Icon icon={EyeClosedIcon} />
							)}
						</Input.Actions>
					</Input.Root>
				</InputsContainer>

				<Button
					title="Entrar"
					style={{
						marginTop: 32,
					}}
				/>
			</TopContent>

			<BottomContent>
				<LoginInfo>Ainda não tem acesso?</LoginInfo>

				<Button title="Criar uma conta" variant="gray" />
			</BottomContent>
		</Container>
	)
}
