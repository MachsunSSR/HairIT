import { Text, SafeAreaView, View, Image } from 'react-native'
import React, { Component } from 'react'
import {Logo} from '../../assets'
import { useEffect } from 'react'

export default SplashScreen = ({navigation}) => {

    useEffect(()    => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000)
    }, [navigation])

    return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }}>
        <View>    
        <Image source={Logo} />
        </View>
        <View>
            <Text style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#79649D',
            }} >Hair-IT</Text>
        </View>
      </SafeAreaView>
    )
}