import { View, Text } from 'react-native'
import React from 'react'

export default function PaymentStepper() {
    const [dataPayment, setDataPayment] = [
        {
            title: 'Digital Payment',
            payments: [
                {
                    name: 'Ovo',
                    isClicked: true,
                    logo: 'ovo.png',
                },
                {
                    name: 'Dana',
                    isClicked: false,
                    logo: 'dana.png',
                },
                {
                    name: 'Gopay',
                    isClicked: false,
                    logo: 'gopay.png',
                },
            ]
        },
        {
            title: 'Bank Transfer',
            payments: [
                {
                    name: 'Bca',
                    isClicked: false,
                    logo: 'bca.png',
                },
                {
                    name: 'Bni',
                    isClicked: false,
                    logo: 'bni.png',
                },
                {
                    name: 'Mandiri',
                    isClicked: false,
                    logo: 'mandiri.png',
                },
            ]
        },
    ]
    
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
        <View style={{flex: 1, paddingHorizontal: 20, marginVertical: 20}}>
            {dataPayment.map((item, index) => {
                return (
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '600'}}>{item.title}</Text>
                        {item.payments.map((itemPayment, indexPayment) => {
                            return (
                                <View style={styles.container}>
                                    <Image source={itemPayment.logo} style={{height: 20}}/>
                                    <ToucableOpacity style={styles.buttonOutline} onPress={() => handleClick(index, indexPayment)}>
                                        <View style={itemPayment.isClicked ? buttonClicked : buttonUnclicked}></View>
                                    </ToucableOpacity>
                                </View>
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    buttonOutline: {
        borderRadius: 100, 
        borderWidth: 3, 
        borderColor: '#6C5DD2', 
        padding: 3
    },
    buttonClicked: {
        borderRadius: 100,
        backgroundColor: '#6C5DD2',
    },

    buttonUnclicked: {
        borderRadius: 100,
        backgroundColor: '#fff',
    }
})