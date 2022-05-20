import React from 'react'
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'

import {profileLinks} from '../data'
import { Avatar } from '../../assets'

export default Profile = () => {
  return (
    <SafeAreaView style={{flex:1, padding: 20, paddingBottom: 60}}>
      <ScrollView>
        <View style={{borderBottomColor: '#9E9E9E', borderBottomWidth: 0.5, alignItems: 'center'}}>
          <Image source={Avatar} style={{borderRadius: 100, width: 115, height: 115, marginVertical: 15}} />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 15}}>Anatasia Griselda</Text>
        </View>
        <View style={{marginVertical: 10}}>
          {profileLinks.map((data, index) => {
            return (
              <View key={index} style={{marginBottom: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom:8}}>{data.title}</Text>
                {data.links.map((link, index2) => {
                  return(
                      <TouchableOpacity style={link.line? style.linedView : style.unlinedView} key={index2}>
                        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
                          <Image source={link.icon} style={{marginRight: 10}}/>
                          <Text>{link.subtitle}</Text>
                        </View>
                        <Text>{'>'}</Text>
                      </TouchableOpacity>
                  )
                })}
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create({
  linedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    borderBottomColor: '#9E9E9E', 
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    
  },
  unlinedView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})