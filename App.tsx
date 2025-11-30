import {
	Karla_300Light,
	Karla_400Regular,
	Karla_700Bold,
	useFonts,
} from '@expo-google-fonts/karla'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'

import { Routes } from '@/routes'
import { theme } from '@/styles/theme'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [loaded, error] = useFonts({
		Karla_300Light,
		Karla_400Regular,
		Karla_700Bold,
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			<Routes />
		</ThemeProvider>
	)
}
