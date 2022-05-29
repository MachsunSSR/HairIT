import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons'; 

export default function BookingStepper() {
    const [service, setService] = useState(
        [
            {
                name: 'Haircut',
                isSelected: true,
            },
            {
                name: 'Hair Coloring',
                isSelected: false,
            },
            {
                name: 'Creambat',
                isSelected: false,
            },
            {
                name: 'Rebonding',
                isSelected: false,
            },
        ]
    );

    const [guests, setGuests] = useState(1);

    const handleService = (index) => {
        const newService = [...service];
        newService[index].isSelected = !newService[index].isSelected;
        setService(newService);
    }

    const handleGuests = (i) => {
        if(i === 1){
            setGuests(guests + 1)
        }else{
            setGuests(guests - 1)
        }
        
        if(guests < 0){
            setGuests(0)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>What service will you choose?</Text>
            <View style={styles.serviceContainer}>
                {service.map((item, index) => {
                    return (
                        <Text onPress={() => handleService(index)} style={item.isSelected? styles.servicesClick:styles.servicesUnclick} key={index}>{item.name}</Text>
                    )
                })}
            </View>
            <Text style={{fontSize: 14, fontWeight: '600'}}>Guest</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <AntDesign name="minus" size={24} color="#6C5DD2" onPress={() => handleGuests(2)} />
                </View>
                <Text style={{fontSize: 20, fontWeight: '600'}}>{guests}</Text>
                <View style={styles.button}>
                    <AntDesign name="plus" size={24} color="#6C5DD2" onPress={() => handleGuests(1)} />
                </View>
            </View>
            <View style={styles.billContainer}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>Bill</Text>
                <Text style={{fontSize: 20, fontWeight: '600'}}>Rp {100000 * guests}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginVertical: 20,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CECECE',
    },

    button: {
        padding: 20,
        borderRadius: 12,
        backgroundColor: '#D3CEF1',
    },

    serviceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },

    servicesUnclick: {
        fontSize: 12,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#D3CEF1',
        borderRadius: 10,
        marginRight: 4,
    },

    servicesClick: {
        fontSize: 12,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: "#6C5DD2",
        borderColor: '#D3CEF1',
        borderRadius: 10,
        marginRight: 4,
        color: '#fff',
        fontWeight: '600',
    },

    billContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 20, 
        borderTopWidth: 2,
        borderColor: '#DADADA',
        borderStyle: 'dashed',
        borderRadius: 1,
    }
})