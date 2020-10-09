import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	FlatList,
} from 'react-native';
import BoostsIcon from '../assets/svg/BoostsIcon';
import DiamondIcon from '../assets/svg/DiamondIcon';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface BoostsI {
	title: string;
	price: number;
	discount?: {
		type: 'low' | 'high';
		value: number;
	};
}

const Boosts = () => {
	const data: BoostsI[] = [
		{
			title: 'All profit x2',
			price: 10,
		},
		{
			title: 'All profit x3',
			price: 15,
		},
		{
			title: 'All profit x5',
			price: 25,
		},
		{
			title: 'All profit x10',
			price: 45,
			discount: {
				type: 'low',
				value: 10,
			},
		},
		{
			title: 'All profit x20',
			price: 80,
			discount: {
				type: 'low',
				value: 20,
			},
		},
		{
			title: '5 lvl of vaccine',
			price: 100,
			discount: {
				type: 'high',
				value: 50,
			},
		},
	];
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<View style={styles.boosticon}>
					<BoostsIcon height={20} fill={'#4ac1f9'} />
				</View>
				<Text style={styles.titletext}>BOOSTS</Text>
			</View>
			<View style={styles.boostscontainer}>
				<View style={styles.boostsbox}>
					<View style={styles.boostsinfo}>
						<Text style={styles.boostdesc}>All proffits x2</Text>
						<View style={styles.boostprice}>
							<Text style={styles.pricetext}>Price:</Text>
							<DiamondIcon height={9} fill='#4ac1f9' />
							<Text style={styles.price}>10</Text>
						</View>
					</View>
					<TouchableHighlight
						underlayColor='#1a5063'
						activeOpacity={0.5}
						style={styles.boostbutton}
						onPress={() => alert('Pressed!')}
					>
						<Text style={styles.upgradetext}>UPGRADE</Text>
					</TouchableHighlight>
				</View>

				<FlatList
					data={data}
					renderItem={({ item, index }) => {
						return (
							<View style={styles.boostsbox}>
								<View style={styles.boostsinfo}>
									<Text style={styles.boostdesc}>{item.title}</Text>
									<View style={styles.boostprice}>
										<Text style={styles.pricetext}>Price:</Text>
										<DiamondIcon height={9} fill='#4ac1f9' />
										<Text style={styles.price}>{item.price}</Text>
										{item.discount && (
											<View
												style={[
													styles.discountbox,
													item.discount.type === 'high' && {
														backgroundColor: '#ff685c',
													},
												]}
											>
												<Text style={styles.discounttext}>
													Save -{item.discount.value}%
												</Text>
											</View>
										)}
									</View>
								</View>
								<TouchableHighlight
									underlayColor='#1a5063'
									activeOpacity={0.5}
									style={styles.boostbutton}
									onPress={() => alert(`Pressed item ${index}`)}
								>
									<Text style={styles.upgradetext}>UPGRADE</Text>
								</TouchableHighlight>
							</View>
						);
					}}
				/>

				{/* <View style={styles.boostsbox}>
					<View style={styles.boostsinfo}>
						<Text style={styles.boostdesc}>All proffits x5</Text>
						<View style={styles.boostprice}>
							<Text style={styles.pricetext}>Price:</Text>
							<DiamondIcon height={9} fill='#4ac1f9' />
							<Text style={styles.price}>25</Text>
						</View>
					</View>
					<TouchableHighlight
						underlayColor='#1a5063'
						activeOpacity={0.5}
						style={styles.boostbutton}
						onPress={() => alert('Pressed!')}
					>
						<Text style={styles.upgradetext}>UPGRADE</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.boostsbox}>
					<View style={styles.boostsinfo}>
						<Text style={styles.boostdesc}>All proffits x10</Text>
						<View style={styles.boostprice}>
							<Text style={styles.pricetext}>Price:</Text>
							<DiamondIcon height={9} fill='#4ac1f9' />
							<Text style={styles.price}>45</Text>
							<View style={styles.discountbox}>
								<Text style={styles.discounttext}>Save -20%</Text>
							</View>
						</View>
					</View>
					<TouchableHighlight
						underlayColor='#1a5063'
						activeOpacity={0.5}
						style={styles.boostbutton}
						onPress={() => alert('Pressed!')}
					>
						<Text style={styles.upgradetext}>UPGRADE</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.boostsbox}>
					<View style={styles.boostsinfo}>
						<Text style={styles.boostdesc}>All proffits x20</Text>
						<View style={styles.boostprice}>
							<Text style={styles.pricetext}>Price:</Text>
							<DiamondIcon height={9} fill='#4ac1f9' />
							<Text style={styles.price}>80</Text>
							<View style={styles.discountbox}>
								<Text style={styles.discounttext}>Save -10%</Text>
							</View>
						</View>
					</View>
					<TouchableHighlight
						underlayColor='#1a5063'
						activeOpacity={0.5}
						style={styles.boostbutton}
						onPress={() => alert('Pressed!')}
					>
						<Text style={styles.upgradetext}>UPGRADE</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.boostsbox}>
					<View style={styles.boostsinfo}>
						<Text style={styles.boostdesc}>5 lvl of vaccine</Text>
						<View style={styles.boostprice}>
							<Text style={styles.pricetext}>Price:</Text>
							<DiamondIcon height={9} fill='#4ac1f9' />
							<Text style={styles.price}>100</Text>
							<View style={styles.discountbox2}>
								<Text style={styles.discounttext}>Save -50%</Text>
							</View>
						</View>
					</View>
					<TouchableHighlight
						underlayColor='#1a5063'
						activeOpacity={0.5}
						style={styles.boostbutton}
						onPress={() => alert('Pressed!')}
					>
						<Text style={styles.upgradetext}>UPGRADE</Text>
					</TouchableHighlight>
				</View>*/}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#485378',
		color: 'black',
		padding: 5,
		paddingBottom: 0,
	},
	title: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 135,
		paddingRight: 135,
		marginTop: 21,
	},
	titletext: {
		fontFamily: 'Montserrat-Bold',
		color: '#fff',
		fontSize: 18,
	},
	boosticon: {
		alignItems: 'center',
		marginTop: 3,
	},
	boostbutton: {
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#4ac1f9',
		width: 125,
		height: 39,
		borderRadius: 7,
		marginRight: 15,
		shadowColor: 'red',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},

	upgradetext: {
		fontFamily: 'Montserrat-Bold',
		color: '#fff',
	},
	boostscontainer: {
		alignItems: 'center',
		marginTop: 27,
	},

	boostsbox: {
		width: 335,
		height: 69,
		borderRadius: 10,
		backgroundColor: '#65729a',
		marginBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	boostdesc: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 14,
		color: '#fff',
	},
	boostsinfo: {
		flexDirection: 'column',
		marginLeft: 15,
	},
	boostprice: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	pricetext: {
		fontFamily: 'Montserrat',
		fontSize: 10,
		color: '#fff',
		marginRight: 5,
	},
	price: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 14,
		color: '#fff',
		marginLeft: 5,
	},
	discounttext: {
		fontFamily: 'Montserrat-Bold',
		fontSize: 10,
		color: '#fff',
		letterSpacing: -0.2,
	},
	discountbox: {
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 69,
		height: 17,
		backgroundColor: '#48c665',
		borderRadius: 7,
		marginLeft: 5,
	},
});
export default Boosts;
