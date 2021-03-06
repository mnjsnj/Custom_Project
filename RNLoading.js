import React, { useEffect,useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
let intervalId;
let Percentage=0;
const App = () => {
   const [PLaying, setPlaying] = useState(Percentage);
    useEffect(() => {
      intervalId=setInterval(() => {
        Percentage=10+Percentage;
        if(Percentage>100){
          clearInterval(intervalId)
        }else{
          setPlaying(`${Percentage}%`)
        }
     }, 1000); 
    return () => {
      if(intervalId)
      clearInterval(intervalId)
    };
  }, [])

  return (
    <View style={Style.container}>
        <View style={[Style.innercontainer,{width:PLaying}]}/>
        <Text style={Style.title}>Playing:
           <Text style={Style.subtitletitle}>
              hey this is playing
           </Text>
        </Text>
    </View>
  )
}

export default App;

const Style=StyleSheet.create({
  container:{
    margin:10,
    marginTop:'100%',
    backgroundColor:'#c2c2c2',
    borderRadius:5,
  },
  innercontainer:{
    backgroundColor:'#4caf50',
    padding:24,
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5
  },
  title:{
    position:'absolute',
    fontWeight:'200',
    fontSize:18,
    color:'white',
    backgroundColor:'transparent',
    top:12,
    left:20
  },
  subtitletitle:{
    fontWeight:'bold'
  }
})
