import * as React from 'react';
import { View } from 'react-native';
import { Svg, Path, G } from 'react-native-svg';
import SvgProps from '../../../interfaces/SvgProps';

const RatesIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 20 20'>
				<G fill='none' fill-rule='evenodd' stroke={fill} stroke-linecap='round' stroke-width='1.674'>
					<Path
						d='M3.767 17.163c0 .23-.187.418-.418.418H.419c-.231 0-.419-.187-.419-.418V6.698c0-.231.188-.419.419-.419h2.93c.23 0 .418.188.418.419v10.465h0zM18 17.163c0 .23-.188.418-.419.418h-2.93c-.23 0-.418-.187-.418-.418v-6.28c0-.23.187-.418.418-.418h2.93c.231 0 .419.188.419.419v6.279h0zM10.884 17.163c0 .23-.188.418-.419.418h-2.93c-.231 0-.419-.187-.419-.418V.419c0-.231.188-.419.419-.419h2.93c.231 0 .419.188.419.419v16.744h0z'
						transform='translate(1 1)'
					/>
				</G>
			</Svg>
		</View>
	);
};
RatesIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#43484D'
};
export default RatesIcon;
