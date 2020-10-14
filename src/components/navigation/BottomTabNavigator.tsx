import React, { useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import HomeIcon from '../../assets/svg/navigation/HomeIcon';
import SettingsIcon from '../../assets/svg/navigation/SettingsIcon';
import ShopIcon from '../../assets/svg/navigation/ShopIcon';
import RatesIcon from '../../assets/svg/navigation/RatesIcon';
import DiamondIcon from '../../assets/svg/DiamondIcon';

interface BottomTabNavigatorI {
	navigation: any;
}

const BottomTabNavigator: React.FunctionComponent<BottomTabNavigatorI> = ({
	navigation,
}) => {
	const [current, setCurrent] = useState<undefined | string>(undefined);
	useEffect(() => {
		console.log(navigation.state.routes[navigation.state.index].routeName);
		setCurrent(navigation.state.routes[navigation.state.index].routeName);
	});
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.tab}
			onPress={() => {
				navigation.navigate('Quests');
			}}>
				<SettingsIcon height={18}
				fill={current === 'Quests' ? '#ff685c' : undefined} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.tab}
				onPress={() => {
				navigation.navigate('Bonuses');
			}}>

				<ShopIcon height={18}
				fill={current === 'Bonuses' ? '#ff685c' : undefined} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tab}
				onPress={() => {
					navigation.navigate('Home');
				}}
			>
				<HomeIcon
					height={18}
          fill={current === 'Home' ? '#ff685c' : undefined}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.tab}>
				<RatesIcon height={18} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.tab}
				onPress={() => {
					navigation.navigate('Boosts');
				}}
			>
				<DiamondIcon
					height={18}
					fill={current === 'Boosts' ? '#ff685c' : undefined}
				/>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	tab: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default BottomTabNavigator;
