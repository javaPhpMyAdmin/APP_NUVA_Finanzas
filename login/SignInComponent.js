import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Dimensions, Animated } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

export default class SignInComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            check_textInputChange: false,
            password: '',
            secureTextEntry: true,
        }
    }

    textInputChange(value) {
        if(value.length !== 0){
            this.setState({
                check_textInputChange: true
            })
        }else{
            this.setState({
                check_textInputChange: false
            })
        }
    }

    secureTextEntry(){
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }


    render(){
        return(
         <View style={styles.contianer}>
            <Animatable.View 
                style={styles.header}
                animation='bounceInDown'
                duration={3000}
            >
                <Text style={styles.text_header}>Bienvenido al login de</Text>
                <Text style={{marginLeft: 60, color: 'white', fontWeight: 'bold',fontSize: 30}}>
                   ¡ SUS FINANZAS !
                </Text>
            </Animatable.View>
            <Animatable.View 
                style={styles.footer}
                animation='fadeInUpBig'
            >
                <Text style={styles.text_footer}>
                    E-MAIL
                </Text>
                <View style={styles.action}>
                    <FontAwesome name='user-o' size={20} color='#05375a' />
                    <TextInput 
                        placeholder= 'Tu email...'
                        style={styles.textInput}
                        onChangeText={(text) => this.textInputChange(text)}
                    />
                    {this.state.check_textInputChange ?  
                        <Animatable.View
                            animation='bounceIn'
                        > 
                            <Feather 
                                name='check-circle'
                                color='green'
                                size={20}
                            />
                        </Animatable.View>
                    : 
                        null 
                    }
                </View>

                <Text style={[styles.text_footer, { marginTop: 35}]}>
                    Contraseña
                </Text>
                <View style={styles.action}>
                    <FontAwesome name='lock' size={20} color='#05375a' />
                    {this.state.secureTextEntry ? 
                        <TextInput 
                            secureTextEntry={true}
                            placeholder= 'Tu contraseña...'
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(text)=>this.setState({
                                password: text
                            })}
                        />
                    : 
                        <TextInput 
                            placeholder= 'Tu contraseña...'
                            style={styles.textInput}
                            value={this.state.password}
                            onChangeText={(text)=>this.setState({
                                password: text
                            })}
                        />
                    }
                    
                    <TouchableOpacity
                        onPress={()=>this.secureTextEntry()}
                    >
                        {this.state.secureTextEntry ? 
                            <Feather 
                                name='eye-off'
                                color='gray'
                                size={20}
                            />
                        :
                            <Feather 
                                name='eye'
                                color='gray'
                                size={20}
                            />
                        }
                        
                    </TouchableOpacity>
                </View>
                <Text style={{color: '#009bd1', marginTop: 15}}>Olvido su contraseña?</Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('RootStackLoginScreen')}
                    >    
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Ingresar</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('SignUpScreen')}
                    >
                        <View style={styles.button_container}>
                            <View style={styles.animation}>
                                <Text style={[styles.textSign, {color: '#4dc2f8'}]}>Crear una cuenta</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
         </View>
        )
    }
}


const styles = StyleSheet.create({
   contianer: {
       flex: 1,
       backgroundColor: '#0C0A0A'
   },
   header: {
       flex: 1,
       justifyContent: 'flex-end',
       paddingHorizontal: 20,
       paddingBottom: 50
   },
   footer: {
       flex: 2,
       backgroundColor: 'white',
       borderTopRightRadius: 30,
       borderTopLeftRadius: 30,
       paddingHorizontal: 20,
       paddingVertical: 30
   },
   text_header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginLeft: 22
   },
   text_footer: {
       color: '#05375a',
       fontSize: 18
   },
   action: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: 'gray',
       paddingBottom: 5
   },
   textInput: {
       flex: 1,
       paddingLeft: 10,
       color: '#05375a'
   },
   button: {
       alignItems:'center',
       marginTop: 50
   },
   signIn: {
       width: 350,
       height: 50,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 10
   },
   textSign: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white'
   },
   button_container: {
       alignItems: 'center',width: '100%',
       justifyContent: 'center',
       
   },
   animation: {
       width: 350,
       paddingVertical:10,
       marginTop: 30,
       borderRadius: 10,
       borderColor: '#4dc2f8',
       borderWidth: 2,
       justifyContent: 'center',
       alignItems: 'center',
       height: 50,
   }
})