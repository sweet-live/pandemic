import * as React from 'react';
import { View } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const DiamondIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 12 12'>
				<Path
					fill='none'
					fill-rule='evenodd'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.5'
					d='M1.407 5.111l4.453 5.32c.076.092.202.091.278 0l4.452-5.32-.178.228c.262-.328.45-.723.536-1.157.034-.174.052-.354.052-.538 0-1.46-1.13-2.642-2.523-2.642-1.15 0-2.12.805-2.424 1.906l-.105-.002C5.643 1.805 4.673 1 3.523 1 2.13 1 1 2.183 1 3.642c0 .184.018.364.052.537.086.435.274.83.536 1.158'
				/>
			</Svg>
		</View>
	);
};
DiamondIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#fff'
};
export default DiamondIcon;
