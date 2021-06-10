import React,{useState} from 'react';
import PagerView from 'react-native-pager-view';
import styled from 'styled-components/native';
import { Animated,Easing} from 'react-native';
import LottieView from 'lottie-react-native';

let progressone=new Animated.Value(0);
let progresstwo=new Animated.Value(0);
let progressthree=new Animated.Value(0);

const App = () => {


  const [Check, setCheck] = useState(false);
  const [offsetvalue, setOffset] = useState(0);
  const [EnableScroll, setEnableScroll] = useState(false);

  const StartAnimationoneLoop=()=>{
    Animated.loop(
        Animated.timing(progressone, {
          toValue: 0.94,
          duration: 5000, 
          useNativeDriver:true
        }), 
      { 
        iterations: -1 
      }
    ).start()
    setEnableScroll(true)
  }

  const StartAnimationtwoLoop=()=>{
    Animated.loop(
        Animated.timing(progresstwo, {
          toValue: 0.76,
          duration: 3000,  
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

  const MoveWelcomeTozozo=(event)=>{
       const {offset} = event.nativeEvent;
       if (offset < 0) {
         return;
       }
    
       if(EnableScroll){
           let offSetvalue = 0.95 + offset/10;
           setOffset(offSetvalue)
           if(offset===0){
            setOffset(0)
            progressone.setValue(0)
            FirstAnimation();
           }
       } 
  }

  const FirstAnimation =()=>{
    setCheck(false)
    progresstwo.setValue(0) 
    Animated.timing(progressone, {  
      toValue: 0.36,
      duration: 4000,    
      useNativeDriver:true
   }).start(({finished})=>{
       if(finished===true){ 
          StartAnimationoneLoop()
       }
   })
  }

   const CallOnChnageIndex=(index)=>{
    
    switch (index) { 
      case 0:
        FirstAnimation();
      return false;
      case 1: 
        setCheck(false)
         progressone.setValue(0)
         progressthree.setValue(0)
         Animated.timing(progresstwo, {  
          toValue:Check?0.30:0.125,
          duration: 3500,   
          useNativeDriver:true 
       })
       .start(({finished})=>{
        if(finished===true){
          if(Check===false){
            progresstwo.setValue(0.30) 
          }
          StartAnimationtwoLoop()
        }
       })
        return false;  
      case 2: 
      progresstwo.setValue(0.14) 
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
    //for android or ios margin issue we can use background image RN componet here
  <SafeView>
        <PagerView style={{flex:1}} 
        onPageScroll={event => {
             MoveWelcomeTozozo(event)
        }}
          onPageSelected={event => {
            const page = event.nativeEvent.position;
            CallOnChnageIndex(page)
            setOffset(0)
            setEnableScroll(false)
          }}
          >
           <LottieViewArea>
              <LottieView
                  progress={offsetvalue===0?progressone:offsetvalue}
                  source={require('./src/assest/1.json')}
              />
            </LottieViewArea>
        
     
        <LottieViewArea>
          <LottieView
            progress={progresstwo}
            source={require('./src/assest/2.json')}
          />
          </LottieViewArea>
       
      
       
        <LottieViewArea> 
          <LottieView
           progress={progressthree}
           source={require('./src/assest/3.json')}
           
          />
          </LottieViewArea>
       
        </PagerView>
  </SafeView>
  )
}
    
const LottieViewArea=styled.View` 
   height:100%;
   width:100%;
`;

const SafeView=styled.View`
  flex:1;
`;

export default App;
    
