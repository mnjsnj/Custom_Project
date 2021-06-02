import React,{useRef,useEffect,useState} from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const SegmentAnimation = ({SourcePath,StartSegMent,EndSegment}) => {

  const [Loop, setLoop] = useState(false)
  const animation = useRef(null);
 
  const Start=()=>{
    setLoop(false) 
    animation.current.play(StartSegMent.First,StartSegMent.Second);
  }

   useEffect(() => { 
       Start();
   }, []) 

   const Finish=()=>{   
    setLoop(true)  
    animation.current.play(EndSegment.First,EndSegment.Second)
   } 
  
  //  1  0,198   and 225,350
  
  
  return (
    
    <SliderView> 
        <LottieViewArea> 
                <LottieView   
                  ref={animation}
                  loop={Loop}
                  onAnimationFinish={()=>Finish()}
                  source={SourcePath}
               />  
        </LottieViewArea> 
      </SliderView> 
   
  )
}


const SliderView=styled.SafeAreaView`
       flex:1;
`;
const LottieViewArea=styled.View`
   align-items:center;
   height:100%;
   width:100%;
   justify-content:center;
`;
export default SegmentAnimation;

