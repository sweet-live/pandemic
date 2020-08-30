import * as React from 'react';
import { View } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const DiamondIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 14 8'>
				<G fill='none' fill-rule='evenodd'>
					<Path
						stroke={fill}
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='1.136'
						d='M9.722 6H.278C.124 6 0 5.878 0 5.727V.273C0 .123.124 0 .278 0h9.444c.154 0 .278.122.278.273v5.454c0 .15-.124.273-.278.273h0z'
						transform='translate(1 1)'
					/>
					<Path fill={fill} d='M0 0H6V6H0z' transform='translate(1 1)' />
					<Path
						stroke={fill}
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='1.136'
						d='M11.333 4.5h-.666c-.369 0-.667-.269-.667-.6V2.1c0-.332.298-.6.667-.6h.666c.369 0 .667.268.667.6v1.8c0 .331-.298.6-.667.6h0z'
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
	fill: '#fff'
};
export default DiamondIcon;
