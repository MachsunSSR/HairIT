import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const SearchCard = ({data}) => {
  return (
    <View style={styles.container}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.address}>{data.address}</Text>
            <Text style={styles.rating}>⭐⭐⭐⭐⭐{`(${data.rating})`}</Text>
        </View>
        <Text style={styles.bookmark}>{data.isBookmarked? 'diBM' : 'blmBM'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        position: 'relative'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    image: {
        width: 85,
        height: 70,
        borderRadius: 10,
        marginRight: 20,
    }, 
    bookmark: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 12,
        fontWeight: '600'
    },
    title: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000',
    },
    address: {
        color: '#9E9E9E',
        fontSize: 8,
    },
    rating: {
        
    }
})

export default SearchCard