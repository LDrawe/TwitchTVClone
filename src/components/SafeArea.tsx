import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

const SafeArea: React.FC<{ style?: object }> = ({ children, style }) => {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, ...style }}>
            {children}
        </SafeAreaView>
    );
}

export default SafeArea;