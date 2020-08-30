import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import HomeIcon from '../../assets/svg/navigation/HomeIcon';
import SettingsIcon from '../../assets/svg/navigation/SettingsIcon';
import ShopIcon from '../../assets/svg/navigation/ShopIcon';
import RatesIcon from '../../assets/svg/navigation/RatesIcon';
import DiamondIcon from '../../assets/svg/DiamondIcon';

const BottomTabNavigator = () => {
	return (
		<View style={styles.container}>
			<TouchableHighlight style={styles.tab}>
				<SettingsIcon height={18} />
			</TouchableHighlight>
			<TouchableHighlight style={styles.tab}>
				<ShopIcon height={18} />
			</TouchableHighlight>
			<TouchableHighlight style={styles.tab}>
				<HomeIcon height={18} fill={'#ff685c'} />
			</TouchableHighlight>
			<TouchableHighlight style={styles.tab}>
				<RatesIcon height={18} />
			</TouchableHighlight>
			<TouchableHighlight style={styles.tab}>
				<DiamondIcon height={18} />
			</TouchableHighlight>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	tab: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
export default BottomTabNavigator;
