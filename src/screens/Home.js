import React from 'react'
import { Text, SafeAreaView, ScrollView, Image, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';

import {Logo} from '../../assets'
import {bannerData, homeCategory, recommendationData} from '../data/'
import Banner from '../components/Banner'
import HomeCategory from '../components/HomeCategory';
import HomeRecomCards from '../components/HomeRecomCards'

const Home = () => {

  const renderBanner = ({item, index}) => {
    return <Banner data={item} />;
  };

  return (
    <SafeAreaView style={{flex:1, margin: 20, marginBottom: 70}}>
      <ScrollView >
        {/* ============================= HEADER ============================= */}
        <View style={styles.header}>
          <View style={styles.headerLogo}>
            <Image source={Logo} style={{width: 39, height: 39, marginRight: 10}}></Image>
            <Text>Hair-IT</Text>
          </View>
          <View style={styles.headerButtons}>
            <Text>Icon 1</Text>
            <Text style={{paddingHorizontal: 10}}>Icon 2</Text>
            <Text>Icon 3</Text>
          </View>
        </View>

        {/* ============================= GREETINGS ============================= */}
        <View style={{marginVertical: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Hello Ana!</Text>
          <Text style={{color:'#9E9E9E'}}>Get the style started with your hair!</Text>
        </View>

        {/* ============================= BANNER CAROUSEL ============================= */}
        <View style={{marginVertical: 10}}>
          <Carousel 
            ref={(c) => { this._carousel = c; }}
            data={bannerData}
            renderItem={renderBanner}
            sliderWidth={Dimensions.get('window').width - 40}
            itemWidth={278}
          />
        </View>

        {/* ============================= SEARCH BAR ============================= */}
        <View style={styles.searchView}>
          <Text style={{marginRight: 10}}>LOGO</Text>
          <TextInput placeholder='Search for location, salon, or service' placeholderTextColor="#6C5DD2"  style={{fontSize: 10, color: "#6C5DD2"}}></TextInput>
        </View>

        {/* ============================= CATEGORIES ============================= */}
          <View style={styles.categoryView}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Categories
            </Text>
            <View style={styles.categories}>
              {homeCategory.map((data,index) => {
                return <HomeCategory key={index} data={data} />
              })}
            </View>
          </View>

        {/* ============================= RECOMMENDATION ============================= */}
        <View style={styles.recommendationView}>
          <View style={styles.recommendationTitle}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Recommendation for you
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{color: '#6C5DD2'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendationCards}>
            {recommendationData.map((data,index) => {
              return <HomeRecomCards key={index} data={data} />
            })}
          </View>
        </View>

        {/* ============================= Trending Shortlets ============================= */}
        <View style={styles.recommendationView}>
          <View style={styles.recommendationTitle}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Trending Shortlets
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{color: '#6C5DD2'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendationCards}>
            {recommendationData.map((data,index) => {
              return <HomeRecomCards key={index} data={data} />
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#6C5DD2',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  categoryView: {
    marginVertical: 10,
  },
  categories: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendationView: {
    marginVertical: 10,
  },
  recommendationTitle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendationCards:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default Home