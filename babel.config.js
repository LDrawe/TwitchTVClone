module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					extensions: [
						'.ios.ts',
						'.android.ts',
						'.ts',
						'.ios.tsx',
						'.android.tsx',
						'.tsx',
						'.jsx',
						'.js',
						'.json',
					],
					alias: {
						'Screens': './src/screens',
						'Styles': './src/styles',
						'Components': './src/components',
						'Images': './src/images',
					},
				},
			],
		],
	};
};
