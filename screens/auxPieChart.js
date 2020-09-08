import React from 'react';
import { Button, StyleSheet, View, StatusBar, Image } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
  componentDidMount() {
    this.animation1.play();
    // Or set a specific startFrame and endFrame with:
    this.animation1.play(30, 170);

    this.animation2.play();
    // Or set a specific startFrame and endFrame with:
    this.animation2.play(30, 120);
  }


  render() {
    return (
      <View style={styles.animationContainer}>
      <StatusBar  barStyle='light-content' />
        <View style={{marginTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <LottieView
            ref={animation2 => {
            this.animation2 = animation2;
            }}
            style={{
            width: 130,
            height: 130,
            backgroundColor: '#000',
            }}
            source={require('../assets/413-shopping-basket-icon')}
            // OR find more Lottie files @ https://lottiefiles.com/featured*/
            />

            <LottieView
            ref={animation1 => {
            this.animation1 = animation1
            }}
            style={{
            width: 130,
            height: 130,
            backgroundColor: '#000',
            marginRight:20,
            }}
            source={require('../assets/24843-credit-cards_')}
            // OR find more Lottie files @ https://lottiefiles.com/featured*/
            />
        </View>
        
        
        <View style={{ marginTop: 10, /*width: 600*/}}>
            <Image resizeMode= 'contain' style={{width: 440, height: 620, marginRight:0}} source={require('../assets/27203-kinoplay-sales.gif')} /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#000',
    //alignItems: 'center',
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20,
  },
});