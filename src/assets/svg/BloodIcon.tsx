import * as React from 'react';
import { View } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';
import SvgProps from '../../interfaces/SvgProps';

const BloodIcon: React.SFC<SvgProps> = ({ width, height, fill }) => {
	return (
		<View style={{ width: width, height: height, aspectRatio: 1 }}>
			<Svg width='100%' height='100%' viewBox='0 0 10 12'>
				<G fill='none' fill-rule='evenodd'>
					<Path
						stroke={fill}
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='1.5'
						d='M3.692 0c2.04 0 3.693 1.615 3.693 3.606 0 .808-.272 1.554-.732 2.155M3.692 9.692l2.961-3.93M3.692 0C1.653 0 0 1.615 0 3.606c0 .808.272 1.554.731 2.155'
						transform='rotate(-180 4.5 5.5)'
					/>
					<Path
						fill={fill}
						d='M6.572 2.27c-1.075.82-2.035.983-2.88.489C2.425 2.017.591 2.736.78 4.049L.417 2.986l1.013-1.41L2.863.75 3.871 0l1.661.404L7 .961 6.572 2.27z'
						transform='rotate(-180 4.5 5.5)'
					/>
					<Path
						stroke={fill}
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='1.5'
						d='M3.692 9.692l-2.96-3.93'
						transform='rotate(-180 4.5 5.5)'
					/>
				</G>
			</Svg>
		</View>
	);
};
BloodIcon.defaultProps = {
	width: 'auto',
	height: 'auto',
	fill: '#fff'
};
export default BloodIcon;
