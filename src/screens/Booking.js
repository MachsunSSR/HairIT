import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Stepper from 'react-native-stepper-ui';

import BookingStepper from '../components/BookingStepper';
import ScheduleStepper from '../components/ScheduleStepper';
import ConfirmStepper from '../components/ConfirmStepper';
import PaymentStepper from '../components/PaymentStepper';


const content = [
    <BookingStepper />, 
    <ScheduleStepper />,
    <ConfirmStepper />,
    <PaymentStepper />,
];



const Booking = ({navigation}) => {
    const [active, setActive] = useState(0); 

    return (
        <View style={{ marginHorizontal: 20 }}>
        <Stepper
            active={active}
            content={content}
            onBack={() => setActive((p) => p - 1)}
            onFinish={() => navigation.navigate('Payment')}
            onNext={() => setActive((p) => p + 1)}
            buttonStyle={{
                backgroundColor: '#6C5DD2',
                paddingVertical: 10,
                width: "50%",
                borderRadius: 100,
                justifyContent: 'center', 
                alignItems: 'center',
            }}
            buttonTextStyle={{color: '#fff', fontSize: 16, fontWeight: '700'}}
            wrapperStyle={{justifyContent: 'space-between'}}
            stepStyle={{
                backgroundColor: '#6C5DD2', 
                width: 30, 
                height: 30, 
                borderRadius: 30, 
                justifyContent: 'center', 
                alignItems: 'center', 
                opacity: 1
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    stepStyle: {
        backgroundColor: '#6C5DD2',
        paddingVertical: 10,
        width: "80%",
        borderRadius: 100,
        justifyContent: 'center', 
        alignItems: 'center',
        justifySelf: 'center',
    },
})

export default Booking;