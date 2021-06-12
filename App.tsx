import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
