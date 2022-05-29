import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'

export default function Payment({navigation}) {
    const instruction = [
        "Open the OVO application then select the Transfer menu.",
        "Select To Fellow OVO.",
        "Input the recipient's OVO phone number, then input the amount of money to be sent. If everything is filled, tap Continue.",
        "Then check again whether the recipient number and the amount sent is correct or not, if correct, tap the Transfer button.",
    ]

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Transaction')
        }, 5000)
    }, [navigation])

    return (
        <SafeAreaView  style={{flex:1, margin: 20, marginBottom: 70}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Image source={require('../../assets/images/ovo.png')} style={{resizeMode: 'contain', width: 80}}/>
                <Text style={{fontSize: 12, color: '#797F83', marginLeft: 15}}>Automatically Checked</Text>
            </View>
            <Text style={{fontSize: 14, fontWeight: '600', marginVertical: 10}}>No. Rekening</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'center'}}>
                <Text style={{color: '#6C5DD2', fontSize: 18, fontWeight: 'bold', marginRight: 15}}>08113552304</Text>
                <TouchableOpacity style={{paddingHorizontal: 20, paddingVertical: 5,  backgroundColor: '#D3CEF1', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#6C5DD2', fontSize: 18, fontWeight: 'bold'}}>COPY</Text>
                </TouchableOpacity>
            </View>
            <Text style={{marginVertical: 10}}>Pay within 1 x 24 hours. If you wouldn’t pay, the transaction will be forfeited.</Text>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Instructions</Text>
            <View>
                {instruction.map((item, index) => {
                    return (
                        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            <Text style={{padding: 10,  color: '#6C5DD2', fontSize: 18, fontWeight: 'bold', marginRight: 15, backgroundColor: '#D3CEF1', borderRadius: 100}}>{index}</Text>
                            <Text style={{width: 250}}>{item}</Text>
                        </View>
                    )
                })}
            </View>

            
        </SafeAreaView>
    )
}
