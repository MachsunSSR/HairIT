import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ConfirmStepper() {

    const data = {
        image: require('../../assets/images/gambar_salon.png'),
        titleSalon: 'Shinjuku Hair Make',
        addressSalon: 'Jl. Niaga Gapura, Lontar, Kec. Sambikerep, Kota Surabaya, Jawa Timur',
        bookingType: 'Book a Visit',
        time: '10 August 2022, 2 PM',
        services: 'Hair Coloring + Creambat',
        guest: '2',
        userAddress: 'Garden Dian Regency Jl Edelweis',
        phone: '08113552304',
        bill: 'Rp 250.000',
        total: 'Rp 250.000',
    }
    

    return (
        <ScrollView>
            {/* ===================================== Card ===================================== */}
            <View style={styles.cardContainer}>
                <Image source={data.image} style={{width: 100, borderRadius: 15, marginRight: 15}}/>
                <View>
                    <Text style={{fontSize: 14, fontWeight: '700', marginBottom: 5}}>{data.titleSalon}</Text>
                    <Text style={{fontWeight: '600', color: '#9E9E9E', width: 180}}>{data.addressSalon}</Text>
                </View>
            </View>
            <View style={styles.linedContainer}>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Booking Types</Text>
                    <Text style={{fontSize: 14}}>{data.bookingType}</Text>
                </View>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Choice of Service Time</Text>
                    <Text style={{fontSize: 14}}>{data.time}</Text>
                </View>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Service</Text>
                    <Text style={{fontSize: 14}}>{data.services}</Text>
                </View>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Guest</Text>
                    <Text style={{fontSize: 14}}>{data.guest}</Text>
                </View>
            </View>
            <View style={styles.linedContainer}>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Visit Address</Text>
                    <Text style={{fontSize: 14}}>{data.userAddress}</Text>
                </View>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Phone Number</Text>
                    <Text style={{fontSize: 14}}>{data.phone}</Text>
                </View>
            </View>
            <View style={styles.linedContainer}>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Bill</Text>
                    <Text style={{fontSize: 14}}>{data.bill}</Text>
                </View>
                <View style={styles.betweenContainer}>
                    <Text style={{fontSize: 14}}>Additional Cost</Text>
                    <Text style={{fontSize: 14}}>{data.additionalCost}</Text>
                </View>
            </View>
            <View style={styles.betweenContainer}>
                <Text style={{fontSize: 16}}>Total</Text>
                <Text style={{fontSize: 18}}>{data.total}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 12,
        marginVertical: 10,
        padding: 20,
        height: 118,
        flexDirection: 'row',
        alignItems: 'center',
    },
    betweenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    linedContainer: {
        marginVertical: 10,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#9E9E9E',
    },

    
    
})