import { View, Text, Image } from 'react-native'
import {homeCategory} from '../data'
import React from 'react'

export default function HomeCategory({data}) {
    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={data.image}/>
            <Text style={{fontSize: 12}}>{data.title}</Text>
        </View>
    )
}