import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'

import {useFonts} from 'expo-font'

import TabNavigator from './src/navigation/TabNavigator'

import SplashScreen from './src/screens/SplashScreen';
import Category from './src/screens/Category';
import Detail from './src/screens/Detail';
import Booking from './src/screens/Booking';

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  }
}

const App = () => {

  // Import poppins fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLightItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'Poppins-LightItalic': require('./assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-MediumItalic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBoldItalic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ThinItalic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
    'Poppins-ExtraBoldItalic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
  })

  if(!fontsLoaded) return null

  return (

      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="CategorySearch" component={Category} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default App