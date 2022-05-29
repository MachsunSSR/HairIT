import { View, Image } from 'react-native'
import React from 'react'

export default function Banner({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 123, width: 278, borderRadius: 10}}
      />
    </View>
  )
}