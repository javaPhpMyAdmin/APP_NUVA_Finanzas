import * as React from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Donut from './donut'

const data = [{
  percentage: 240,
  color: '#222',
  max: 500
}]

export default function DonutAuto() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
         <Donut percentage={data.percentage} color={data.color} delay={500} max={data.max}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,//Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 5,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});