import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { Feather, MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const SearchCard = ({data}) => {
    const navigation = useNavigation(); 
    const [isFav, setIsFav] = React.useState(data.isBookmarked);

    const handleFav = () => {
        setIsFav(!isFav);
    }

    const handleStar = (rating) => {
        let star = [];
        for(let i = 0; i < Math.floor(rating); i++) {
            star.push(<MaterialIcons key={i} name='star' style={{marginRight: 1}} size={10} color='#6C5DD2' />)
        }
        for(let i = 0; i < 5 - rating; i++) {
            star.push(<MaterialIcons key={i+rating} name='star' style={{marginRight: 1}} size={10} color='#D3CEF1' />)
        }
        return star;
    }
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail')}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.address}>{data.address}</Text>
            <Text style={styles.rating}>{handleStar(data.rating)}</Text>
        </View>
        <TouchableOpacity onPress={handleFav}>
                        {isFav? 
                        <MaterialIcons name="bookmark" size={16} color="#6C5DD2" /> : 
                        <Feather name="bookmark" size={16} color="black" />}
        </TouchableOpacity>
    </TouchableOpacity>
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