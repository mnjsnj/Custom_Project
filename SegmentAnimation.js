import React,{useRef,useEffect,useState} from 'react'
import { View,Dimensions,ScrollView} from 'react-native'
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const App = () => {

 
    
    const [sliderState, setSliderState] = useState({ currentPage: 0 });
    const { width, height } = Dimensions.get('window');
    
    const animationone = useRef(null); 
    const animationtwo = useRef(null);
    const animationthree = useRef(null);

    const setSliderPage = (event) => {

      
     
      

    
 

      const { currentPage } = sliderState;
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.floor(x / width);
      if (indexOfNextScreen !== currentPage) {

      


        if(indexOfNextScreen===0){
          animationtwo.current.play(0,0);
          animationtwo.current.pause();

          animationone.current.play(0,122);
        }

        if(indexOfNextScreen===1){
          animationone.current.play(0,0);
          animationone.current.pause();

          animationthree.current.play(0,0);
          animationthree.current.pause();

          animationtwo.current.play(0,36);
        }

        if(indexOfNextScreen===2){
          animationtwo.current.play(0,0);
          animationtwo.current.pause();

          animationthree.current.play(0,47);
       }

       setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      })
          
      }
    }

      
    useEffect(() => {
      animationtwo.current.pause();
      animationthree.current.pause();
      animationone.current.play(0,122);
    }, [])

    

  
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
                        loop={false}
                        onAnimationFinish={()=>{
                          animationone.current.play(123,367);
                        }} 
                        source={require('./src/assest/1.json')}
                    />   
                </LottieViewArea> 
           
            </View>

            <View style={{ width, height }}>
          
                <LottieViewArea> 
                        <LottieView   
                        loop={false}
                        ref={animationtwo} 
                        onAnimationFinish={()=>{
                          animationtwo.current.play(37,160);
                        }} 
                        source={require('./src/assest/2.json')}
                    />   
                </LottieViewArea> 
         
            </View>


            <View style={{ width, height }}>
          
          <LottieViewArea> 
                  <LottieView    
                  ref={animationthree} 
                  loop={false}
                  onAnimationFinish={()=>{  
                    animationthree.current.play(48,136);
                  }} 
                   source={require('./src/assest/3.json')}
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

  export default App;

