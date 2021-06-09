import React,{useRef,useState} from 'react';
import PagerView from 'react-native-pager-view';
import styled from 'styled-components/native';
import { Dimensions,Animated } from 'react-native';
import LottieView from 'lottie-react-native';

let progressone=new Animated.Value(0);
let progresstwo=new Animated.Value(0);
let progressthree=new Animated.Value(0);

const App = () => {

  const { width, height } = Dimensions.get('window');
  const [Check, setCheck] = useState(false)

  const StartAnimationoneLoop=()=>{
    Animated.loop(
        Animated.timing(progressone, {
          toValue: 0.94,
          duration: 4000,
          useNativeDriver:true
        }),
      { 
        iterations: -1
      }
    ).start()
  }

  const StartAnimationtwoLoop=()=>{
    Animated.loop(
        Animated.timing(progresstwo, {
          toValue: Check?0.11:0.75,
          duration: 4000,  
          useNativeDriver:true
        }),
      {
        iterations: -1
      }
    ).start() 
  }
  const StartAnimationthreeLoop=()=>{
    Animated.loop(
        Animated.timing(progressthree, {
          toValue: 0.75,
          duration: 4000,
          useNativeDriver:true
        }),
      {
        iterations: -1
      }
    ).start()
  }

   const CallOnChnageIndex=(index)=>{
    
    switch (index) { 
      case 0:
        setCheck(false)
        progresstwo.setValue(0.14) 
        Animated.timing(progressone, {  
          toValue: 0.36,
          duration: 3000,  
          useNativeDriver:true
       }).start(({finished})=>{
           if(finished===true){
            StartAnimationoneLoop()
           }
       }) 
      return false;
      case 1: 
        setCheck(false)
         progressone.setValue(0)
         progressthree.setValue(0)
         Animated.timing(progresstwo, {  
          toValue:Check?0.086:0.31,
          duration: 2500,   
          useNativeDriver:true
       })
       .start(({finished})=>{
        if(finished===true){
          StartAnimationtwoLoop()
        }
       })
        return false; 
      case 2: 
      progresstwo.setValue(0)
      setCheck(true)
      Animated.timing(progressthree, {
        toValue:0.51,
         duration: 4000,
         useNativeDriver:true 
      }).start(({finished})=>{ 
        if(finished===true){
          StartAnimationthreeLoop()
        }
       })
        return false;
    }
   }

  return ( 
    <PagerView style={{flex:1}} 
       onPageSelected={event => {
        const page = event.nativeEvent.position;
        CallOnChnageIndex(page)
       }}
       >

        <SlideView style={{ width, height }}>
           <LottieViewArea>
              <LottieView
                  progress={progressone}
                  source={require('./src/assest/1.json')}
              />
            </LottieViewArea>
        </SlideView>   
        
        <SlideView style={{ width, height }}>
        <LottieViewArea>
          <LottieView
            progress={progresstwo}
            source={require('./src/assest/2.json')}
          />
          </LottieViewArea>
        </SlideView> 
      
        <SlideView style={{ width, height }}>
        <LottieViewArea> 
          <LottieView
           progress={progressthree}
           source={require('./src/assest/3.json')}
           
          />
          </LottieViewArea>
        </SlideView> 
</PagerView>
     
  )
}
    
const LottieViewArea=styled.View` 
   align-items:center;
   height:100%;
   width:100%;
   justify-content:center;
`;

const SlideView=styled.View``;

export default App;
    
