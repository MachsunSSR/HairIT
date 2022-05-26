import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function ScheduleStepper() {
    
    const [slot, setSlot] = useState(
        [
            {
                title: 'Morning',
                times: [
                    {time: '09:00', isSelected: false, isAvailable: true},
                    {time: '10:00', isSelected: false, isAvailable: false},  
                    {time: '11:00', isSelected: false, isAvailable: true},
                ]
            },
            {
                title: 'Afternoon',
                times: [
                    {time: '12:00', isSelected: false, isAvailable: true},
                    {time: '13:00', isSelected: false, isAvailable: true},  
                    {time: '14:00', isSelected: false, isAvailable: false},
                    {time: '15:00', isSelected: false, isAvailable: true},
                    {time: '16:00', isSelected: false, isAvailable: true},
                    {time: '17:00', isSelected: false, isAvailable: true},
                ]
            },
            {
                title: 'Evening',
                times: [
                    {time: '18:00', isSelected: false, isAvailable: true},
                    {time: '19:00', isSelected: false, isAvailable: false},  
                    {time: '20:00', isSelected: false, isAvailable: false},
                ]
            },
        ]
    );

    const [date, setDate] = useState([])

    const handleSlot = (index, timeIndex) => {
        if(!slot[index].times[timeIndex].isAvailable){
            return
        }
        // Set all isSelected to false
        const newSlot = [...slot];
        newSlot.forEach(item => {
            item.times.forEach(time => {
                time.isSelected = false;
            })
        });
        newSlot[index].times[timeIndex].isSelected = true;
        setSlot(newSlot);
    }

    function getWeekDays(){
        var baseDate = new Date(); 
        var weekDays = [];
        for(let i = 0; i < 7; i++)
        { 
            const tanggal = String(baseDate.getDate()).padStart(2, '0');
            // Ambil nama hari
            const hari = baseDate.toLocaleString('en-US', {weekday: 'long'}).slice(0, 3);   
            if(i === 0){
                weekDays.push({tanggal: tanggal, hari: hari, isSelected: true});
            }else{
                weekDays.push({tanggal: tanggal, hari: hari, isSelected: false});
            }
            baseDate.setDate(baseDate.getDate() + 1);       
        }
        return weekDays;
    }

    const getMonth = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];

        const d = new Date();
        return monthNames[d.getMonth()]
    }

    const handleDateClicked = (index) => {
        const newDate = [...date];
        newDate.forEach(item => {
            item.isSelected = false;
        })
        newDate[index].isSelected = true;
        setDate(newDate);
    }

    useEffect(() => {
        setDate(getWeekDays)
    }, [])

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', marginVertical: 15}}>
                {/* =================================== HARI ================================             */}
                <View style={styles.container}>
                    <Text style={{textAlign: 'center', fontSize: 16}}>{getMonth()}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
                        {date.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => handleDateClicked(index)} style={item.isSelected? styles.dateClicked : styles.dateUnclicked}>
                                    <Text style={item.isSelected? styles.tanggalClicked : styles.tanggalUnclicked}>{item.tanggal}</Text>
                                    <View style={{marginVertical: 4}}></View>
                                    <Text style={item.isSelected? styles.tanggalClicked : styles.tanggalUnclicked}>{item.hari}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>

                {/* =================================== SLOT =================================== */}
                <View style={styles.container}>
                    <Text style={{fontSize: 16, fontWeight: '700'}}>Available Slots</Text>
                    <View style={styles.timeContainer}>
                        {slot.map((item, index) => {
                            return (
                                <View key={index} style={{marginBottom: 20}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={styles.bullet}></View>
                                        <Text style={{fontSize: 14, marginLeft: 15}}>{item.title}</Text>
                                    </View>
                                    
                                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                        {item.times.map((time, timeIndex) => {
                                            return (
                                                <TouchableOpacity disabled={!time.isAvailable} key={timeIndex} style={time.isAvailable ? (time.isSelected ? styles.clockClicked : styles.clockUnclicked) : styles.clockDisabled} >
                                                    <Text onPress={() => handleSlot(index, timeIndex)} style={ time.isAvailable ? (time.isSelected? styles.timeClick:styles.timeUnclick) : styles.timeDisabled}>{time.time}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 20,
    },
    dateClicked: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 8,
        backgroundColor: '#6C5DD2',
        borderRadius: 5,
    },

    dateUnclicked: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 8
    },

    tanggalClicked: {
        fontWeight: '700',
        color: '#fff'
    },

    tanggalUnclicked: {
        fontWeight: '700',
        color: '#000'
    },

    timeContainer: {
        borderLeftColor: '#D3D3D3',
        borderLeftWidth: 1,
        padding: 5,
        paddingLeft: 20,
        marginVertical: 10,
        justifyContent: 'space-between'
    },

    bullet: {
        width: 10,
        height: 10,
        backgroundColor: '#6C5DD2',
        borderRadius: 100,
        marginLeft: -25,
    },
    
    clockUnclicked: {
        padding: 5, 
        borderWidth: 1, 
        borderColor: '#6C5DD2', 
        borderRadius: 4,
        marginTop: 5,
        marginRight: 12,
    },
    clockClicked: {
        padding: 5, 
        borderWidth: 1, 
        borderColor: '#6C5DD2', 
        borderRadius: 4,
        backgroundColor: '#6C5DD2',
        color: '#fff',
        marginTop: 5,
        marginRight: 12,
    },
    clockDisabled: {
        padding: 5, 
        borderWidth: 1, 
        borderColor: '#D3D3D3', 
        borderRadius: 4,
        marginTop: 5,
        marginRight: 12,
    },  
    timeClick: {
        color: '#fff',
    },
    timeUnclick: {
        color: '#000',
    },
    timeDisabled: {
        color: '#D3D3D3',
    },
})