import React from 'react';
import Routes from './src/Routes';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
	return (
		<SafeAreaProvider>
			<StatusBar style="auto" />
			<Routes />
		</SafeAreaProvider>
	);
}
