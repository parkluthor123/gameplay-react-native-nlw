import {PixelRatio, Dimensions, Platform} from 'react-native'

const { 
    width:SCREEN_WIDTH,
    height: SCREEN_HEIGHT 
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size: number, minus: number) {
    let newSize = size;
    if(scale === 1)
    {
        newSize = size - minus;
    } 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}