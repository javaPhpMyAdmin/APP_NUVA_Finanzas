import React from 'react';
import { Button, StyleSheet, View, StatusBar, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Lottie extends React.Component {
  componentDidMount() {
    this.animation1.play();
    // Or set a specific startFrame and endFrame with:
    this.animation1.play(30, 100);

    this.animation2.play();
    // Or set a specific startFrame and endFrame with:
    this.animation2.play(20, 120);
  }

  componentWillUnmount() {
    console.log('me desmonte auxPieChart')
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <StatusBar barStyle='light-content' />
        <View style={{ marginLeft: 5, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Animatable.View animation='fadeInUpBig' duration={1500} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('REPORTEVENTAS')}>
              <LottieView
                ref={animation2 => {
                  this.animation2 = animation2;
                }}
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: '#000',
                  marginLeft: 0,
                }}
                source={require('../assets/413-shopping-basket-icon')}
              // OR find more Lottie files @ https://lottiefiles.com/featured*/
              />
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation='fadeInUpBig' duration={1500} delay={500} >
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('REPORTEGASTOS') }}>
              <LottieView
                ref={animation1 => {
                  this.animation1 = animation1
                }}
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: '#000',
                  marginRight: 25,
                }}
                source={require('../assets/24843-credit-cards_')}
              // OR find more Lottie files @ https://lottiefiles.com/featured*/
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <View
          style={
            {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }
          }
        >

          <Animatable.Text
            animation='fadeInLeft'
            duration={1500}
            delay={1200}
            style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'white', fontSize: 20, marginLeft: 56 }}
          >
            VENTAS
            </Animatable.Text>

          <Animatable.Text
            animation='fadeInRight'
            duration={1500}
            delay={1700}
            style={{ fontStyle: 'italic', fontWeight: 'bold', color: 'white', fontSize: 20, marginRight: 60 }}
          >
            GASTOS
            </Animatable.Text>
        </View>

        <View style={{ marginTop: 10, /*width: 600*/ }}>
          <Image
            resizeMode='contain'
            style={{ width: 440, height: 520, marginRight: 0 }}
            source={require('../assets/27203-kinoplay-sales.gif')}
          />
        </View>
      </View >
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