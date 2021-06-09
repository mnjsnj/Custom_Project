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
   const Animationone = useRef(null);
   const Animationtwo = useRef(null);
   const Animationthree = useRef(null);
   
   

   const CallOnChnageIndex=(index)=>{
    
    switch (index) { 
      case 0:
        progresstwo.setValue(0)
        Animated.timing(progressone, {
           toValue: .51,
           duration: 5000,
           useNativeDriver:true
        }).start(({finished}) => {
            if(finished){
              Animationone.current.play(123,357)
            }
        });
      return false;
      case 1: 
         progressone.setValue(0)
         progressthree.setValue(0)
         Animated.timing(progresstwo, {
          toValue: .51,
          duration: 5000,
          useNativeDriver:true
       }).start(({finished}) => {
        if(finished){
          Animationtwo.current.play(37,160)
        } 
       })
        return false; 
      case 2: 
      progresstwo.setValue(0)
      Animated.timing(progressthree, {
         toValue: .51,
         duration: 5000,
         useNativeDriver:true
      }).start(({finished}) => {
        if(finished){
          Animationthree.current.play(48,136);
        } 
       });
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
                  ref={Animationone}
                  progress={progressone}
                  source={require('./src/assest/1.json')}
              />
            </LottieViewArea>
        </SlideView>   
        
        <SlideView style={{ width, height }}>
        <LottieViewArea>
          <LottieView
            ref={Animationtwo}
            progress={progresstwo}
            source={require('./src/assest/2.json')}
          />
          </LottieViewArea>
        </SlideView> 
      
        <SlideView style={{ width, height }}>
        <LottieViewArea> 
          <LottieView
           ref={Animationthree}
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
    
