import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Fondos extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
    console.log('me monte')
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('../assets/4922-search-files.json')}
        // OR find more Lottie files @ https://lottiefiles.com/featured*/
        />
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this.resetAnimation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});