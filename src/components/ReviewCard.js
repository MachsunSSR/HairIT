import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 


export default function ReviewCard({data}) {
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
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                <Image source={data.image} style={{borderRadius: 1000, width: 50, height: 50, marginRight: 8}}/>
                <View>
                    <Text style={{fontWeight: '700', fontSize: 14, marginBottom: 4}}>{data.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#9E9E9E', fontSize: 10, fontWeight: '600', marginRight: 4}}>{data.date}</Text>   
                        <Text style={{color: '#9E9E9E', fontSize: 10, fontWeight: '600', marginRight: 4}}> • </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                            {handleStar(data.rating)}
                            </View>
                            <Text style={{color: '#6C5DD2', fontSize: 10, fontWeight: '600', marginLeft: 4}}>
                                {`(${data.rating})`}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text>{data.review}</Text>
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
        padding: 20,
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'white',
    }
})