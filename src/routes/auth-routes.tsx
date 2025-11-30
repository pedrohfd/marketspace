import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '@/screens/sign-in'

export const AuthRoutes = () => {
	const AuthStack = createNativeStackNavigator({
		screens: {
			SignIn: {
				screen: SignIn,
				options: {
					headerShown: false,
				},
			},
		},
	})

	const AuthNavigation = createStaticNavigation(AuthStack)

	return <AuthNavigation />
}
