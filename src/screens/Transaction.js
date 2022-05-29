import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Transaction() {
    const navigation = useNavigation()
    const data = {
        image: require('../../assets/images/success.png'),
        transactionDate: '03-01-2022 17:19:20',
        RefferenceNumber: '#14524569854587',
        name: 'Anatasia Griselda',
        phoneNumber: '+62 811 355 2304',
        bookingType: 'Book a Visit',
        salonName: 'Angga Salon',
        salonAddress: 'Jl. H. Syukur No.24, Pabean, Waru, Surabaya Jawa Timur',
        service: 'Hair Coloring + Creambat',
        guest: '2',
        paymentMethod: 'Ovo',
        bill: 'Rp 250.000',
        additionalCost: 'Rp 0',
        total: 'Rp 250.000',
    }
    

    return (
        <ScrollView>
            <View style={styles.container}>
            {/* ===================================== Card ===================================== */}
                <View style={styles.headerContainer}>
                    <Image source={data.image}/>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10}}>Successful Transaction</Text>
                </View>

                <View style={styles.linedContainer}>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Transaction Date</Text>
                        <Text style={{fontSize: 14}}>{data.transactionDate}</Text>
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
                        <Text style={{fontSize: 14}}>Booking Types</Text>
                        <Text style={{fontSize: 14}}>{data.bookingType}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Salon Name</Text>
                        <Text style={{fontSize: 14}}>{data.salonName}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}></Text>
                        <Text style={{fontSize: 14, width: 250, textAlign: 'right'}}>{data.salonAddress}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Service</Text>
                        <Text style={{fontSize: 14}}>{data.service}</Text>
                    </View>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Guest</Text>
                        <Text style={{fontSize: 14}}>{data.guest}</Text>
                    </View>
                </View>
                <View style={styles.linedContainer}>
                    <View style={styles.betweenContainer}>
                        <Text style={{fontSize: 14}}>Payment Methode</Text>
                        <Text style={{fontSize: 14}}>{data.paymentMethod}</Text>
                    </View>
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

                <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={styles.button}><Text style={styles.buttonText}>View Ticket</Text></TouchableOpacity>
                        {/* <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>View Ticket</Text></TouchableOpacity> */}
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
        padding: 30,
    },

    button : {
        backgroundColor: '#6C5DD2',
        width: "100%",
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 50,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    }
    
})