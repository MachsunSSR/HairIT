import React from 'react'
import { SafeAreaView,  View  } from 'react-native'
import {recommendationData} from '../data/'
import SearchCard from '../components/SearchCard'

export default function Boomark() {
    return (
        <SafeAreaView style={{paddingHorizontal: 20}}>
            <View>
                {recommendationData.map((data,index) => {
                return <SearchCard key={index} data={data} />
                })}
            </View>
        </SafeAreaView>
    )
}