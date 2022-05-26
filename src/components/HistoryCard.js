import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function HistoryCard({data}) {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Image source={data.image} style={{width: 100, height: 80, borderRadius: 10, marginRight: 20}}/>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 5}}>{data.title}</Text>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={{marginRight: 3}}>Map</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color: '#9E9E9E'}}>{data.address.slice(0, 60)}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 3}}>Jam</Text>
                    <Text style={{fontSize: 10, fontWeight: '500', color: '#9E9E9E'}}>{data.schedule}</Text>
                </View>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={{borderRadius: 100, borderColor: '#6C5DD2', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 8}}>
                <Text style={{color: '#6C5DD2', fontWeight: '600', fontSize: 12}}>
                    Cancel Booking
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius: 100, borderColor: '#6C5DD2', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 8, backgroundColor: '#6C5DD2'}}>
                <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 12}}>
                    View Ticket
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        padding: 15, 
        marginVertical: 10, 
        backgroundColor: '#fff',
        
    },
    contentContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingBottom: 8
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 8, 
        borderTopWidth: 0.2, 
        borderColor: '#9E9E9E'
    },

})