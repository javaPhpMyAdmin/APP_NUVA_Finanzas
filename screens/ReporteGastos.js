import React from 'react';
import { Button, StyleSheet, View, StatusBar, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ReporteGastos extends React.Component {
    componentDidMount() { }

    componentWillUnmount() {
        console.log('me desmonte ReporteGastos')
    }

    render() {
        return (
            <View style={[styles.animationContainer, { marginWidht: 20, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }]}>
                <StatusBar barStyle='light-content' />
                <View style={{ marginLeft: 5, marginTop: 10, flexDirection: 'column' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 60 }}>REPORTE</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 60 }}>DE</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 60 }}>GASTOS</Text>
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