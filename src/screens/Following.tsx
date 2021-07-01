import React, { useMemo } from 'react';
import SafeArea from 'Components/SafeArea';
import Header from 'Components/Header';
import CategoryList from 'Components/CategoryList';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Title, Heading } from 'Styles/Global';

interface Item {
	key: string;
	render: () => JSX.Element;
	isTitle?: boolean;
}

export default function Following() {
	const { colors } = useTheme();

	const { data, indices } = useMemo(() => {
		const items: Item[] = [
			{
				key: "PAGE_HEADING",
				render: () => <Heading style={{ color: colors.text }}>Following</Heading>
			},
			{
				key: "FOLLOWED_CATEGORIES",
				render: () => <Title>Followed Categories</Title>,
				isTitle: true
			},
			{
				key: "C1",
				render: () => <CategoryList />
			},
			{
				key: "LIVE_CHANNELS",
				render: () => <Title>Live Channels</Title>,
				isTitle: true
			},
			{
				key: "C2",
				render: () => <View></View>
			},
			{
				key: "CONTINUE_WATCHING",
				render: () => <View></View>,
				isTitle: true
			},
			{
				key: "C3",
				render: () => <View></View>
			},
			{
				key: "OFFLINE_CHANNELS",
				render: () => <Title>Offline Channels</Title>,
				isTitle: true
			},
			{
				key: "C4",
				render: () => <View></View>
			},
		];

		const indices: number[] = [];
		items.forEach((item, index) => item.isTitle && indices.push(index));

		return {
			data: items,
			indices
		}
	}, [])
	return (
		<SafeArea style={styles.container}>
			<Header />
			<View style={styles.heading}>
				<FlatList<Item>
					data={data}
					renderItem={({ item }) => item.render()}
					keyExtractor={item => item.key}
					stickyHeaderIndices={indices}
					onRefresh={() => { }}
					refreshing={false}
				/>
			</View>
		</SafeArea>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 14
	},
	heading: {
		paddingHorizontal: 0,
		paddingTop: 10,
		paddingBottom: 20
	}
})