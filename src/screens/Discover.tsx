import React from 'react';
import SafeArea from 'Components/SafeArea';
import { Message } from 'Styles/Global';
import { useTheme } from '@react-navigation/native';
export default function Discover() {
	const { colors } = useTheme();
	return (
		<SafeArea style={{ alignItems: "center", justifyContent: "center", backgroundColor: colors.background }}>
			<Message>Coming Soon...</Message>
		</SafeArea>
	);
}