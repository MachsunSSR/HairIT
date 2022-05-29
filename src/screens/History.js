import {useState} from 'react'
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import HistoryCard from '../components/HistoryCard'
import {historyData} from '../data'

const History = () => {

  const [buttons, setButtons] = useState([
    {title: 'Ongoing', isClicked: true},
    {title: 'Completed', isClicked: false},
    {title: 'Canceled', isClicked: false},
  ])

  const toggleButton = (index) => {
    const newButtons = [...buttons]
    newButtons.map((data, i) => {
      if(i === index) {
        data.isClicked = !data.isClicked
      } else {
        data.isClicked = false
      }
    })
    setButtons(newButtons)
  }


  return (
    <SafeAreaView style={{flex:1, margin: 20, marginBottom: 70, marginTop: 50}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>My Booking</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 15}}>
        {buttons.map((data, index) => {
          return (
            <TouchableOpacity  key={index} style={{borderRadius: 10, borderColor: '#6C5DD2', borderWidth: 1, paddingHorizontal: 10, backgroundColor: data.isClicked? '#6C5DD2' : '#FFFFFF', paddingVertical: 6,  marginRight: 10}} onPress={() => toggleButton(index)}>
              <Text style={{fontSize: 11, color: data.isClicked? '#FFFFFF' : '#6C5DD2'}}>{data.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View>
        {historyData.map((data, index) => {
          return (
            <HistoryCard key={index} data={data}/>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default History