import 'styled-components/native'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		colors: {
			blue_400: string
			blue_500: string

			gray_100: string
			gray_200: string
			gray_300: string
			gray_400: string
			gray_500: string
			gray_600: string
			gray_700: string

			red_500: string
		}
		fonts: {
			light: string
			regular: string
			bold: string
		}
	}
}
