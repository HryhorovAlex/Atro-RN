import { Dimensions, Platform } from 'react-native'

export const isIOS = Platform.OS === 'ios';

export const screenWidth = Dimensions.get('window').width

export const screenHeight = Dimensions.get('window').height

export const isNarrowScreen = screenWidth <= 320;