import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { AppContainer } from './navigation/index';

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);
	useEffect(() => {
		loadFonts();
	}, []);

	const loadFonts = async () => {
		await Font.loadAsync({
			Montserrat: require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
			'Montserrat-Bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf')
		});
		setFontLoaded(true);
	};
	return fontLoaded ? <AppContainer /> : <View />;
}
