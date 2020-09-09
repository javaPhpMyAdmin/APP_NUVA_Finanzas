import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'


export default class SignUpComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            check_textInputChange: false,
            password: '',
            secureTextEntry: true,
            password_confirm: '',
            secureTextEntry_confirm: true
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

    secureTextEntry_confirm(){
        this.setState({
            secureTextEntry_confirm: !this.state.secureTextEntry_confirm
        })
    }

    render(){
        return(
         <View style={styles.contianer}>
            <StatusBar barStyle='light-content' />
            <Animatable.View 
                animation='zoomOut' 
                style={styles.layout}
                duration= {1500}
            >
            </Animatable.View>
            <Animatable.View 
                animation='lightSpeedIn' 
                duration={1500} 
                style={styles.header}
            >
                <Text style={styles.text_header}>Crear mi CUENTA</Text>
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
                
                <Text style={[styles.text_footer, { marginTop: 35}]}>
                    Confirmar Contraseña
                </Text>
                <View style={styles.action}>
                    <FontAwesome name='lock' size={20} color='#05375a' />
                    {this.state.secureTextEntry_confirm ? 
                        <TextInput 
                            secureTextEntry={true}
                            placeholder= 'Confirmar Contraseña...'
                            style={styles.textInput}
                            value={this.state.password_confirm}
                            onChangeText={(text)=>this.setState({
                                password_confirm: text
                            })}
                        />
                    : 
                        <TextInput 
                            placeholder= 'Confirmar Contraseña...'
                            style={styles.textInput}
                            value={this.state.password_confirm}
                            onChangeText={(text)=>this.setState({
                                password_confirm: text
                            })}
                        />
                    }
                    
                    <TouchableOpacity
                        onPress={()=>this.secureTextEntry_confirm()}
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
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        Al registrarse acepta nuestros
                    </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        {" "}
                        Términos de Servicio
                    </Text>
                    <Text style={styles.color_textPrivate}>
                        {" "}
                        y
                    </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                        Política de Privacidad
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{marginTop:10, fontWeight:'bold', color: 'black', borderBottomColor:'black'}}>Leer Términos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('RootStackLoginScreen')}
                >
                    <View style={styles.button}>
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Registrarme</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
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
       paddingBottom: 40,
       paddingTop:0,
       marginTop: 0
   },
   footer: {
       flex: 2,
       backgroundColor: 'white',
       borderTopRightRadius: 30,
       borderTopLeftRadius: 30,
       paddingHorizontal: 20,
       paddingVertical: 50,
   },
   text_header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginLeft: 50
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
       marginTop: 20
   },
   signIn: {
       width: '100%',
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
   textPrivate: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       marginTop: 15
   },
   color_textPrivate: {
        color: 'gray'
   },
   layout: {
       width:'100%', 
       height: 90, 
       backgroundColor:'gray',/*rgb(68, 65, 49)*/ 
       position:'absolute',
       borderBottomLeftRadius: 180,
       borderBottomRightRadius: 180
    }
})