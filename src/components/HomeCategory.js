import { TouchableOpacity, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function HomeCategory({data}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CategorySearch')} style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={data.image}/>
            <Text style={{fontSize: 12}}>{data.title}</Text>
        </TouchableOpacity>
    )
}