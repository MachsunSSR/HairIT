import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HomeRecomCards({data}) {
  return (
    <View style={styles.card}>
        <Image source={data.image}/>
        <View>
            <View style={{justifyContent: 'space-between', flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 12}}>{data.title}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 8}}>{data.isBookmarked? 'diBM' : 'blmBM'}</Text>
            </View>
            <Text style={{fontSize: 8, color:'#9E9E9E', marginTop: 3}}>{data.address.slice(0, 60)}...</Text>
        </View>
        <Text>⭐⭐⭐⭐⭐{`(${data.rating}`}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        borderColor: '#6C5DD2',
        alignItems:'center',
        justifyContent: 'space-between',
        width: 150,
        height: 215,
    }
})