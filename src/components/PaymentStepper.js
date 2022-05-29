import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'

export default function PaymentStepper() {
    const [dataPayment, setDataPayment] = useState([
        {
            title: 'Digital Payment',
            payments: [
                {
                    name: 'Ovo',
                    isClicked: true,
                    logo: require('../../assets/images/ovo.png'),
                },
                {
                    name: 'Dana',
                    isClicked: false,
                    logo: require('../../assets/images/dana.png'),
                },
                {
                    name: 'Gopay',
                    isClicked: false,
                    logo: require('../../assets/images/gopay.png'),
                },
            ]
        },
        {
            title: 'Bank Transfer',
            payments: [
                {
                    name: 'Bca',
                    isClicked: false,
                    logo: require('../../assets/images/bca.png'),
                },
                // {
                //     name: 'Bni',
                //     isClicked: false,
                //     logo: require('../../assets/images/bni.png'),
                // },
                // {
                //     name: 'Mandiri',
                //     isClicked: false,
                //     logo: require('../../assets/images/mandiri.png'),
                // },
            ]
        },
    ])
    
    const handleClick = (index, itemIndex) => {
        const newData = [...dataPayment];
        newData.map(item => {
            item.payments.map(item => {
                item.isClicked = false;
            })
        })
        newData[index].payments[itemIndex].isClicked = true;
        setDataPayment(newData);
    }
    return (
        <ScrollView style={{flex: 1, paddingHorizontal: 20, marginVertical: 20}}>
            {dataPayment?.map((item, index) => {
                return (
                    <View style={{marginVertical: 10}} key={index}>
                        <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 10}}>{item.title}</Text>
                        {item.payments.map((itemPayment, indexPayment) => {
                            return (
                                <TouchableOpacity key={indexPayment} style={styles.container} onPress={() => handleClick(index, indexPayment)}>
                                    <Image source={itemPayment.logo} style={{resizeMode: 'contain', width: 80}}/>
                                    <View style={styles.buttonOutline} >
                                        <View style={itemPayment.isClicked === true? styles.buttonClicked : styles.buttonUnclicked}></View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View> 
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 30,
    },
    buttonOutline: {
        borderRadius: 100, 
        borderWidth: 3, 
        borderColor: '#6C5DD2', 
        padding: 10,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonClicked: {
        borderRadius: 100,
        backgroundColor: '#6C5DD2',
        width: 15,
        height: 15,
    },

    buttonUnclicked: {
        borderRadius: 100,
        backgroundColor: '#fff',
        width: 15,
        height: 15,
    }
})