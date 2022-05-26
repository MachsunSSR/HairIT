import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { Feather, MaterialIcons } from '@expo/vector-icons'; 

export default function HomeRecomCards({data}) {
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
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('Detail')}>
            <Image source={data.image}/>
            <View>
                <View style={{justifyContent: 'space-between', flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>{data.title}</Text>
                    <TouchableOpacity onPress={handleFav}>
                        {isFav? 
                        <MaterialIcons name="bookmark" size={16} color="#6C5DD2" /> : 
                        <Feather name="bookmark" size={16} color="black" />}
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 8, color:'#9E9E9E', marginTop: 5}}>{data.address.slice(0, 60)}...</Text>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: "100%"}}>
                <View></View>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                    {handleStar(data.rating)}
                <Text style={{fontSize: 10, color: '#6C5DD2', marginHorizontal: 5}}>{`(${data.rating})`}</Text></View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderRadius: 15,
        padding: 10,
        borderColor: '#6C5DD2',
        alignItems:'center',
        justifyContent: 'space-around',
        width: 150,
        height: 215,
    }
})