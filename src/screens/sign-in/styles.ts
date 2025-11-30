import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

import LogoImage from '@/assets/images/logo.svg'
import LogoText from '@/assets/images/logo-text.svg'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const TopContent = styled(SafeAreaView)`
  width: 100%;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_600};

  padding: 65px 48px 68px;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

export const BottomContent = styled.View`
  flex: 1;
  height: 100%;

  align-items: center;

  padding: 0 48px;

  background-color: ${({ theme }) => theme.colors.gray_700};
`

export const Logo = styled(LogoImage).attrs({
	width: 95,
	height: 64,
})``

export const Divider = styled.View`
  height: 19px;
`

export const Title = styled(LogoText).attrs({
	width: 193,
	height: 28,
})`
`

export const Subtitle = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.fonts.light};
`

export const LoginInfo = styled.Text`
  margin-top: 76px;
  margin-bottom: 16px;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_200};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const InputsContainer = styled.View`
  flex-direction: column;
  gap: 16px;
`
