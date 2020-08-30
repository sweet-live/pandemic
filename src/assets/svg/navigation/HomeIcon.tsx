import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const HomeIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 17 19'>
				<G fill='none' fill-rule='evenodd' stroke={fill} stroke-linejoin='round' stroke-width='1.636'>
					<Path
						d='M4.5 17.182H.358c-.198 0-.358-.116-.358-.303V6.545M14.727 6.955v9.924c0 .187-.16.303-.358.303h-4.55'
						transform='translate(1 1)'
					/>
					<Path stroke-linecap='round' d='M14.727 6.908L7.364 0 0 6.721' transform='translate(1 1)' />
					<Path d='M4.909 18L4.909 11.864 9.818 11.864 9.818 18' transform='translate(1 1)' />
				</G>
			</Svg>
		</View>
	);
};
HomeIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#43484D'
};
export default HomeIcon;
