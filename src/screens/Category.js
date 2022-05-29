import React from 'react'
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text, TextInput } from 'react-native'
import {recommendationData} from '../data/'
import SearchCard from '../components/SearchCard'

import { AntDesign } from '@expo/vector-icons'; 

export default function Category() {
    return (
        <SafeAreaView style={{paddingHorizontal: 20}}>
            
            <View style={styles.searchView}>
                <AntDesign name="search1" size={20} color="#6C5DD2" style={{marginRight: 8}} />
                <TextInput placeholder='Search here' placeholderTextColor="#6C5DD2"  style={{fontSize: 10, color: "#6C5DD2"}}></TextInput>
            </View>
            <View>
                {recommendationData.map((data,index) => {
                return <SearchCard key={index} data={data} />
                })}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#6C5DD2',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 10,
    },
})