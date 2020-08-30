import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DiamondIcon from '../assets/svg/DiamondIcon';
import PlussIcon from '../assets/svg/PlussIcon';
import BloodIcon from '../assets/svg/BloodIcon';
import EnergyIcon from '../assets/svg/stats/EnergyIcon';
import HealthIcon from '../assets/svg/stats/HealthIcon';
import DollarIcon from '../assets/svg/stats/DollarIcon';

export default function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.currencies}>
				<View style={styles.currenciesItem}>
					<DiamondIcon height={18} fill={'#4ac1f9'} />
					<Text style={styles.currenciesItemValue}>123</Text>
					<View style={styles.currenciesAddCurrency}>
						<PlussIcon height={10} />
					</View>
				</View>
				<View style={styles.currenciesItem}>
					<DiamondIcon height={18} fill={'#4ac1f9'} />
					<Text style={styles.currenciesItemValue}>123</Text>
					<View style={styles.currenciesAddCurrency}>
						<PlussIcon height={10} />
					</View>
				</View>
				<View style={styles.currenciesItem}>
					<DiamondIcon height={18} fill={'#4ac1f9'} />
					<Text style={styles.currenciesItemValue}>123</Text>
					<View style={styles.currenciesAddCurrency}>
						<PlussIcon height={10} />
					</View>
				</View>
			</View>
			<View style={styles.player}>
				<View style={styles.playerImage}>
					<Image source={require('../assets/images/placeholder.png')} style={{ width: '100%', height: '100%' }} />
				</View>
				<View style={styles.playerInfo}>
					<View style={styles.infectedAmmount}>
						<View style={styles.infectedIcon}>
							<BloodIcon height={14} />
						</View>
						<Text style={styles.infectedNumber}>8 400 399 100</Text>
						<Text style={styles.infectedText}> infected</Text>
					</View>
					<View style={styles.playerStats}>
						<View style={styles.playerStatsItem}>
							<EnergyIcon height={14} fill={'#4ac1f9'} />
							<View style={{ flexDirection: 'row', marginLeft: 5 }}>
								<Text style={styles.statsNumber}>49</Text>
								<Text style={styles.infectedText}> /100</Text>
							</View>
						</View>
						<View style={styles.playerStatsItem}>
							<HealthIcon height={14} fill={'#4ac1f9'} />
							<View style={{ flexDirection: 'row', marginLeft: 5 }}>
								<Text style={styles.statsNumber}>7</Text>
								<Text style={styles.infectedText}> /10</Text>
							</View>
						</View>
						<View style={styles.playerStatsItem}>
							<DollarIcon height={14} fill={'#4ac1f9'} />
							<View style={{ flexDirection: 'row', marginLeft: 5 }}>
								<Text style={styles.statsNumber}>1.24m</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.gameScreen}>
				<View style={styles.sideMenu}>
					<View style={styles.sideMenuItem}>
						<BloodIcon height={25} />
					</View>
					<View style={styles.sideMenuItem}>
						<BloodIcon height={25} />
					</View>
					<View style={styles.sideMenuItem}>
						<BloodIcon height={25} />
					</View>
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.actionBox}>
						<View style={styles.actionTop}>
							<View style={styles.actionImage}>
								<Image
									source={require('../assets/images/placeholder_action.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</View>
						</View>
						<View />
					</View>
					<View style={styles.actionBox}>
						<View style={styles.actionTop}>
							<View style={styles.actionImage}>
								<Image
									source={require('../assets/images/placeholder_action.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</View>
						</View>
						<View />
					</View>
					<View style={styles.actionBox}>
						<View style={styles.actionTop}>
							<View style={styles.actionImage}>
								<Image
									source={require('../assets/images/placeholder_action.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</View>
						</View>
						<View />
					</View>
					<View style={styles.actionBox}>
						<View style={styles.actionTop}>
							<View style={styles.actionImage}>
								<Image
									source={require('../assets/images/placeholder_action.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</View>
						</View>
						<View />
					</View>
					<View style={styles.actionBox}>
						<View style={styles.actionTop}>
							<View style={styles.actionImage}>
								<Image
									source={require('../assets/images/placeholder_action.png')}
									style={{ width: '100%', height: '100%' }}
								/>
							</View>
						</View>
						<View />
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#485378',
		padding: 5,
		paddingBottom: 0
	},
	currencies: {
		marginTop: 35,
		marginBottom: 10,
		height: 30,
		flexDirection: 'row'
	},
	currenciesItem: {
		backgroundColor: '#65729a',
		width: '32%',
		marginRight: '2%',
		borderRadius: 10,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 3
	},
	currenciesItemValue: {
		color: '#fff',
		fontSize: 13,
		fontFamily: 'Montserrat-Bold'
	},
	currenciesAddCurrency: {
		width: 24,
		height: 24,
		borderRadius: 7,
		borderWidth: 2,
		borderColor: '#536087',
		alignItems: 'center',
		justifyContent: 'center'
	},
	player: {
		height: 65,
		backgroundColor: '#65729a',
		borderRadius: 10,
		padding: 5,
		overflow: 'hidden',
		flexDirection: 'row'
	},
	playerImage: {
		width: 55,
		borderRadius: 10
	},
	playerInfo: {
		marginLeft: 10
	},
	infectedAmmount: {
		paddingVertical: 4,
		flexDirection: 'row'
		//alignItems: 'center'
	},
	infectedNumber: {
		fontFamily: 'Montserrat-Bold',
		color: '#fff',
		fontSize: 18
	},
	infectedText: {
		fontSize: 10,
		fontFamily: 'Montserrat',
		textAlignVertical: 'bottom',
		color: '#fff',
		lineHeight: 19
	},
	infectedIcon: {
		width: 24,
		height: 24,
		backgroundColor: '#ff685c',
		borderRadius: 7,
		lineHeight: 22,
		alignItems: 'center',
		justifyContent: 'center',
		textAlignVertical: 'center',
		marginRight: 5
	},
	playerStats: {
		flexDirection: 'row'
	},
	playerStatsItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	statsNumber: {
		fontFamily: 'Montserrat-Bold',
		color: '#fff',
		fontSize: 15
	},
	gameScreen: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10
	},
	sideMenu: {
		width: 60
	},
	sideMenuItem: {
		width: 50,
		height: 50,
		borderWidth: 2,
		borderColor: '#4ac1f9',
		borderRadius: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	actionBox: {
		height: 132,
		alignSelf: 'stretch',
		backgroundColor: '#65729a',
		borderRadius: 10,
		overflow: 'hidden',
		marginBottom: 10
	},
	actionTop: {
		flexDirection: 'row',
		height: 83
	},
	actionImage: {
		width: 100,
		height: '100%'
	}
});
