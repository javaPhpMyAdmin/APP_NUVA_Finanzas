import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Fondos extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View >
          <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 15, justifyContent: 'space-between' }}>
            <Animatable.Text animation='flipInY' duration={1700} style={{ color: 'white', fontWeight: 'bold', fontSize: 30, paddingTop: 4 }}>CAJA</Animatable.Text>
            <Animatable.View animation='flipInY' duration={1700} delay={1000} style={{ flexDirection: 'column', marginLeft: 45 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginRight: 20, paddingLeft: 3, marginTop: 3 }}>$U</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginRight: 20, paddingTop: 8 }}>US$</Text>
            </Animatable.View>
            <Animatable.View
              animation='flipInY'
              duration={1700}
              delay={1900}
              style={{ flexDirection: 'column', paddingBottom: 10, alignItems: 'flex-end', paddingRight: 13, justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>1000000</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>5000</Text>
            </Animatable.View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 50, marginLeft: 15, justifyContent: 'space-between' }}>
            <Animatable.Text animation='flipInY' duration={1700} style={{ color: 'white', fontWeight: 'bold', fontSize: 30, paddingTop: 4 }}>BANCO</Animatable.Text>
            <Animatable.View animation='flipInY' duration={1700} delay={1000} style={{ flexDirection: 'column', marginLeft: 30 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginRight: 20, paddingLeft: 3, paddingTop: 3 }}>$U</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginRight: 20, paddingTop: 12 }}>US$</Text>
            </Animatable.View>
            <Animatable.View
              animation='flipInY'
              duration={1700}
              delay={1900}
              style={{ flexDirection: 'column', paddingBottom: 20, alignItems: 'flex-end', paddingRight: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, }}>5000000</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, }}>1000</Text>
            </Animatable.View>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginTop: 60 }}>
            <Animatable.View
              style={{ marginBottom: 25 }}
              animation='fadeInRight'
              duration={1500}
              delay={500}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NUEVOMOVIMIENTO')}
              >
                <LinearGradient
                  colors={['#5db8fe', '#39cff2']}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Nuevo Movimiento</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
              style={{ marginBottom: 25 }}
              animation='fadeInLeft'
              duration={1500}
              delay={1000}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MODIFICARMOVIMIENTO')}
              >
                <LinearGradient
                  colors={['#5db8fe', '#39cff2']}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}>Último Movimiento</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
              style={{ marginBottom: 25 }}
              animation='fadeInRight'
              duration={1500}
              delay={1500}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('RootStackLoginScreen')}
              >
                <LinearGradient
                  colors={['#5db8fe', '#39cff2']}
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign,]}>Emitir Reporte</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View >
          </View>
        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: 0,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20
  },
  signIn: {
    width: 270,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
});