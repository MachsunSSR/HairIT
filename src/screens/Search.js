import React from 'react'
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import {recommendationData} from '../data/'
import SearchCard from '../components/SearchCard'

const Search = ({data}) => {
  return (
    <SafeAreaView>
      {/* <View>
        <TouchableOpacity>
          Icon
        </TouchableOpacity>
        <Text>{data.title}</Text>
      </View>
      <View style={styles.searchView}>
          <Text style={{marginRight: 10}}>LOGO</Text>
          <TextInput placeholder='Search here' placeholderTextColor="#6C5DD2"  style={{fontSize: 10, color: "#6C5DD2"}}></TextInput>
      </View>
      <View style={{flex: 1}}>
        {recommendationData.map((data,index) => {
          return <SearchCard key={index} data={data} />
        })}
      </View> */}
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

export default Search