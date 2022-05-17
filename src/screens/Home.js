import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tailwind('p-5')}>Hello world</Text>
    </SafeAreaView>
  )
}

export default Home