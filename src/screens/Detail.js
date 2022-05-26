import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { MaterialIcons, Feather } from '@expo/vector-icons'; 
import  {recommendationData as data} from '../data/' 
import ReviewCard from '../components/ReviewCard';
import { useNavigation } from '@react-navigation/native';

export default function Detail() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {/* ======================== Image cover carousel ======================== */}
                <Image style={styles.image} source={data[0].image} />

                {/* ======================== Title, Address and Schedule ======================== */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data[0].title}</Text>
                    <View style={styles.addschedContainer}>
                        <Feather name="map-pin" size={20} color="#6C5DD2" style={{marginRight: 10}} />
                        <Text style={styles.addsched}>{data[0].address}</Text>
                    </View>
                    <View style={styles.addschedContainer}>
                        <Feather name="clock" size={20} color="#6C5DD2" style={{marginRight: 10}} />
                        <Text style={styles.addsched}>{data[0].schedule}</Text>
                    </View>
                </View>

                {/* ======================== Description ======================== */}
                <View style={styles.descContainer}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.description}>{data[0].description}</Text>
                </View>

                {/* ======================== Facilities ======================== */}
                <View style={styles.facilityContainer}>
                    <Text style={styles.facilityTitle}>Facilities</Text>
                    <View style={styles.facilitiesContainer}>
                        {data[0].facilities?.map((item, index) => {
                            return (
                                <Text style={styles.facilities} key={index}>{item}</Text>
                            )
                        })}
                    </View>
                </View>

                {/* ======================== Review Title ======================== */}
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewTitleContainer}>
                        <Text style={styles.reviewTitle}>Review</Text>
                        <MaterialIcons name='star' style={{marginHorizontal: 5}} size={15} color='#6C5DD2' />
                        <Text style={styles.reviewCounts}>{`(${data[0].rating} Reviews)`}</Text>
                    </View>
                    <TouchableOpacity > 
                        <Text style={styles.reviewMore}>See all</Text>
                    </TouchableOpacity>
                </View>
            
                {/* ======================== Review List ======================== */}
                <View style={styles.reviewListContainer}>
                    {data[0].reviews.map((item, index) => {
                        return(
                            <ReviewCard data={item} key={index}/>
                        )
                    })}
                </View>
                
                
            </ScrollView>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Booking')} style={styles.button}><Text style={styles.buttonText}>Book Now!</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },

    titleContainer: {
        marginHorizontal: 30,
        paddingVertical: 10,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 0.5,
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 15
    },

    addschedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    
    logo: {
        width: 20,
        height: 20,
        color: '#6C5DD2',
        marginRight: 10
    },

    addsched: {
        fontSize: 12,
        color: '#9E9E9E',
    },

    descContainer: {
        paddingVertical: 10,
        marginLeft: 30,
        marginRight: 20,
    },

    descTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
    },

    description: {
        fontSize: 12,   
        marginBottom: 10
    },

    facilityContainer: {
        paddingVertical: 10,
        marginHorizontal: 30,
    },

    facilityTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
    },

    facilitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 10,
    },

    facilities: {
        fontSize: 12,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#D3CEF1',
        borderRadius: 10,
        marginRight: 4,
    },

    reviewContainer: {
        paddingVertical: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    reviewTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-around',
    },

    reviewTitle: {
        fontSize: 16,
        fontWeight: '600',
    },

    reviewCounts: {
        fontSize: 10,
        color: '#9E9E9E',
        fontWeight: '600',
    },

    reviewMore: {
        fontSize: 14,
        color: '#6C5DD2',
        fontWeight: '600',
    },

    reviewListContainer: {
        marginHorizontal: 30,
        alignItems: 'center',
        
    },

    buttonContainer: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 10,
        height: 115,
        width: "100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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

