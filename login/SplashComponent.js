import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, tou } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SplashComponent extends Component{
    render(){
        return(
         <View style={styles.contianer}>
            <StatusBar  barStyle='light-content' />  
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn' 
                    duration={1500}
                    source={{
                        uri: 'https://image.freepik.com/vector-gratis/logotipo-rojo-sobre-fondo-negro_1195-52.jpg',
                    }}
                    resizeMode='stretch'
                    style={styles.logo}
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'
            >
                <Text style={styles.textFooter1}>Manten al dia tus finanzas</Text>
                <Text style={styles.textFooter2}>Inicia sesión con tu cuenta</Text>
                <Animatable.View animation='zoomInDown' duration={3500} style={styles.button}> 
                    <TouchableOpacity 
                        onPress={()=> this.props.navigation.navigate('SignInScreen')}
                    >
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Empezar</Text>
                            <MaterialIcons 
                                name='navigate-next' 
                                color='white'
                                size={20}    
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </Animatable.View>
                
            </Animatable.View>
         </View>
        )
    }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
   contianer: {
       flex: 1,
       backgroundColor: '#0C0A0A'//'#05375a'
   },
   header: {
       flex: 2,
       justifyContent: 'center',
       alignItems: 'center'
   },
   footer: {
       flex: 1,
       backgroundColor: '#FFF',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       paddingHorizontal: 30,
       paddingVertical: 50
   },
   logo : {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2
   },
   textFooter1: {
       color: 'black',//'#05375a',
       fontWeight: 'bold',
       fontSize: 30
   },
   textFooter2: {
       color: 'gray',
       marginTop: 5
   },
   button: {
       alignItems: 'flex-end',
       marginTop:30
   },
   signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
   },
   textSign: {
       color: 'white',
       fontWeight: 'bold'
   }
})