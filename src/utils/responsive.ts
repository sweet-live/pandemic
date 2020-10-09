import {
    responsiveWidth,
    responsiveHeight
} from 'react-native-responsive-dimensions';


const screenWidth = 375;
const screenHeight = 667;


const calculateResponsiveWidth = (number:number) =>{
    return responsiveWidth(number / screenWidth * 100);

}
const calculateResponsiveHeight = (number:number)=>{
    return responsiveHeight(number / screenHeight * 100);

}

export {
    calculateResponsiveHeight,
    calculateResponsiveWidth
}