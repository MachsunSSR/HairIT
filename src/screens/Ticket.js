import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Ticket({navigation}) {

    const data = {
        image: require('../../assets/images/barcode.png'),
        bookingDate: '03-01-2022 17:19:20',
        RefferenceNumber: '#14524569854587',
        name: 'Anatasia Griselda',
        phoneNumber: '+62 811 355 2304',
        bookingType: 'Book a Visit',
        choice: 'Angga Salon',
        service: 'Hair Coloring + Creambat',
        guest: '2',
        status: 'Booked',
    }
    

    return (
        <ScrollView>
            <View style={styles.container}>
            {/* ===================================== Card ===================================== */}
                <View style={styles.headerContainer}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Angga Salon</Text>
                    <Image source={data.image} style={{marginVertical: 5}}/>
                    <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', width: 200, marginBottom: 20}}>Show this ticket to the salon you have booked</Text>
                </View>

                <View style={styles.linedContainer}>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Booking Date</Text>
                        <Text style={{fontSize: 14}}>{data.bookingDate}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Reference Number</Text>
                        <Text style={{fontSize: 14}}>{data.RefferenceNumber}</Text>
                    </View>
                </View>
                <View style={styles.linedContainer}>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Name</Text>
                        <Text style={{fontSize: 14}}>{data.name}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Phone Number</Text>
                        <Text style={{fontSize: 14}}>{data.phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.linedContainer}>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Choice of service time</Text>
                        <Text style={{fontSize: 14}}>{data.choice}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Service</Text>
                        <Text style={{fontSize: 14}}>{data.service}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Guest</Text>
                        <Text style={{fontSize: 14}}>{data.guest}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Status</Text>
                        <Text style={{fontSize: 14, backgroundColor: "#2FD274", color: "#fff", borderRadius: 50, paddingHorizontal: 10, paddingVertical: 3}}>{data.status}</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                        {/* <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Book Now!</Text></TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={styles.button}><Text style={styles.buttonText}>Download</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
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

    buttonContainer: {
        width: "100%",
        paddingVertical: 30,
    },

    button : {
        backgroundColor: '#D3CEF1',
        width: "100%",
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 50,
    },

    buttonText: {
        color: '#6C5DD2',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    }
    
})