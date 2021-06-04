import React,{useRef,useEffect,useState} from 'react'
import { View,Dimensions,ScrollView} from 'react-native'
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
const ScrollViewer = () => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');

    const [LoopAnimationone, setLoopAnimationone] = useState(false);
    const [LoopAnimationtwo, setLoopAnimationtwo] = useState(false)
    
    

    const animationone = useRef(null);
    const animationtwo = useRef(null);
    const animationthree = useRef(null);

    const setSliderPage = (event) => {
      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {

        setSliderState({
          ...sliderState,
          currentPage: indexOfNextScreen,
        })

        if(indexOfNextScreen===0){
          animationtwo.current.reset();
          animationthree.current.reset();
          animationone.current.play(0,198);
        }

        if(indexOfNextScreen===1){
          animationtwo.current.play(0,150);
          animationone.current.reset();
          animationthree.current.reset();
        }

        if(indexOfNextScreen===2){
          animationthree.current.play(0,140);
          animationone.current.reset();
          animationtwo.current.reset();
        }
         
      }
    }

     
    
    useEffect(() => {
      animationone.current.play(0,198);
      animationtwo.current.pause();
      animationthree.current.pause();
    }, [])

    
    const { currentPage } = sliderState;
  
    return (
      <>
       
        <SliderView>
          <ScrollView
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              setSliderPage(event);
            }}
          >
            
            <View style={{ width, height }}>
            
                <LottieViewArea> 
                        <LottieView   
                        ref={animationone}  
                        loop={LoopAnimationone}
                        onAnimationFinish={()=>{ 
                          //  setLoopAnimationone(true)
                          //  animationone.current.play(198,350);
                        }} 
                        source={require('../assest/1.json')}
                    />   
                </LottieViewArea> 
           
            </View>

            <View style={{ width, height }}>
          
                <LottieViewArea> 
                        <LottieView   
                        ref={animationtwo} 
                        loop={false}
                        onAnimationFinish={()=>{
                         
                        }}
                        source={require('../assest/2.json')}
                    />   
                </LottieViewArea> 
         
            </View>


            <View style={{ width, height }}>
          
          <LottieViewArea> 
                  <LottieView   
                  ref={animationthree} 
                  loop={false}
                  onAnimationFinish={()=>{
                   
                  }}
                  source={require('../assest/3.json')}
              />   
          </LottieViewArea> 
   
      </View>


            
          </ScrollView>
   
        </SliderView>
      </>
    );
  };

const SliderView=styled.View`
       flex:1;
`;
const LottieViewArea=styled.View` 
   align-items:center;
   height:100%;
   width:100%;
   justify-content:center;
`;

  export default ScrollViewer;


