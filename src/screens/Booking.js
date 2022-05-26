import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Stepper from 'react-native-stepper-ui';

import BookingStepper from '../components/BookingStepper';
import ScheduleStepper from '../components/ScheduleStepper';

const MyComponent = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};

const content = [
    <BookingStepper />,
    <ScheduleStepper />,
    <MyComponent title="Component 3" />,
];



const Booking = () => {
    const [active, setActive] = useState(0); 

    return (
        <View style={{ marginVertical: 80, marginHorizontal: 20 }}>
        <Stepper
            active={active}
            content={content}
            onBack={() => setActive((p) => p - 1)}
            onFinish={() => alert('Finish')}
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