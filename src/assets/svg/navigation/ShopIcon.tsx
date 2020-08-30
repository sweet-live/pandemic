import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const ShopIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 22 20'>
				<G
					fill='none'
					fill-rule='evenodd'
					stroke={fill}
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.6'
				>
					<Path d='M17.2 8.8L17.2 18 2.8 18 2.8 8.8' transform='translate(1 1)' />
					<Path
						d='M12.4 17.2c0 .22-.18.4-.4.4H8c-.22 0-.4-.18-.4-.4v-4c0-.22.18-.4.4-.4h4c.22 0 .4.18.4.4v4h0zM.177 5.73L2.633.515c0-.174.183-.115.409-.115h13.916c.226 0 .41-.059.41.115l2.455 5.315M5.088 6.14c0 1.356 1.1 2.456 2.456 2.456C8.9 8.596 10 7.496 10 6.14M14.912 6.14c0 1.356 1.1 2.456 2.456 2.456 1.356 0 2.455-1.1 2.455-2.456M10 6.14c0 1.356 1.1 2.456 2.456 2.456 1.356 0 2.456-1.1 2.456-2.456M.177 6.14c0 1.356 1.1 2.456 2.456 2.456 1.356 0 2.455-1.1 2.455-2.456'
						transform='translate(1 1)'
					/>
				</G>
			</Svg>
		</View>
	);
};
ShopIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#43484D'
};
export default ShopIcon;
