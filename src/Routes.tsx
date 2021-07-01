import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Following from 'Screens/Following';
import Discover from 'Screens/Discover';
import Search from 'Screens/Search';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons'
import { dark, light } from 'Styles/Theme';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
	const scheme = useColorScheme() === "dark" ? dark : light;
    return (
		<NavigationContainer theme={scheme}>
			<Tab.Navigator tabBarOptions={{
                style:{
                    height: 60,
                    backgroundColor: scheme.colors.background,
                    borderTopWidth: 0,
                },
                tabStyle: {
                    alignItems: "center",
                    justifyContent: "center",
                },
                labelStyle:{
                    fontSize: 12,
                },
                inactiveTintColor: scheme.colors.text,
                activeTintColor: scheme.colors.primary,
            }}>
				<Tab.Screen name="Following" component={Following} options={{
                    tabBarIcon: ({size,focused}) => {
                        return(
                            <Entypo
                                name={focused ? "heart" : "heart-outlined"}
                                size={focused ? size + 7 : size}
                                color={focused ? scheme.colors.primary : scheme.colors.text}
                            />
                        )
                    }
                }} />
				<Tab.Screen name="Discover" component={Discover} options={{
                    tabBarIcon: ({size,focused}) => {
                        return(
                            <MaterialCommunityIcons
                                name={focused ? "compass" : "compass-outline"}
                                size={focused ? size + 7 : size}
                                color={focused ? scheme.colors.primary : scheme.colors.text}
                            />
                        )
                    }
                }} />
				<Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon: ({size,focused}) => {
                        return(
                            <MaterialCommunityIcons
                                name={focused ? "checkbox-multiple-blank" : "checkbox-multiple-blank-outline"}
                                size={focused ? size + 7 : size}
                                color={focused ? scheme.colors.primary : scheme.colors.text}
                            />
                        )
                    }
                }} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Routes;