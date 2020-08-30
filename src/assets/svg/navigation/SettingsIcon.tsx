import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const SettingsIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 20 19'>
				<G
					fill='none'
					fill-rule='evenodd'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.714'
				>
					<Path
						d='M0 1.714h3.429M3.429 3.429L8.571 3.429 8.571 0 3.429 0zM8.571 1.714H18M18 8.571h-3.429M9.429 10.286L14.571 10.286 14.571 6.857 9.429 6.857zM9.429 8.571H0M0 15.429h3.429M3.429 17.143L8.571 17.143 8.571 13.714 3.429 13.714zM8.571 15.429H18'
						transform='translate(1 1)'
					/>
				</G>
			</Svg>
		</View>
	);
};
SettingsIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#43484D'
};
export default SettingsIcon;
