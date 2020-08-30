import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import SvgProps from '../../interfaces/SvgProps';

const DiamondIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 22 20'>
				<G
					fill='none'
					fill-rule='evenodd'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.5'
				>
					<Path
						d='M0 4.966L2.937.23c0-.192.222-.23.497-.23h13.5c.275 0 .498.038.498.23l2.463 4.797M9.3 17.484L.1 5.82c-.288-.372.072-.61.648-.61h18.396c.576 0 .936.238.648.61l-9.198 11.778c-.288.372-1.008.258-1.296-.114h0zM10.595 17.484L14.537.71M5.842.71l3.752 16.988'
						transform='translate(1 1)'
					/>
				</G>
			</Svg>
		</View>
	);
};
DiamondIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#43484D'
};
export default DiamondIcon;
