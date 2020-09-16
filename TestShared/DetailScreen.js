import React, {Component} from 'react';
import { Image, Text, View, Dimensions, StyleSheet } from 'react-native'
import { SharedElement } from 'react-native-shared-element';

import {Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default DetailScreen = props => {
    const {width, height} = Dimensions.get('window')
    const {id, fotito1, testito1} = props.route.params;
    
    
    return(
        <View style={styles.container}>
            <View>
                <SharedElement
                    id={id}
                >
                    <Image 
                        resizeMode='cover' 
                        source={require('../assets/hacker-grades-feature.jpg')} 
                        style={{width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                    />
                </SharedElement>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 14, left: 10 }}
                >
                    <SharedElement 
                        id={fotito1}
                    >
                        <Image 
                            style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}} 
                            source={require('../assets/cancun-wallpapers-28479-2900528.jpg')}
                        />
                    </SharedElement>
                    
                </View>
            </View>
            <View style={{position: 'absolute', top: 80, left: 10}}>
                <TouchableOpacity onPress={()=> props.navigation.goBack('ListScreen')}>
                    <Feather name= 'arrow-left' size={24} color='white'/>
                </TouchableOpacity>
            </View>
        
        
        
            <View>
                <SharedElement 
                    id={testito1}
                    style={{width: width - 30, marginBottom: 14}}
                >
                    <Text style={{fontSize: 22, fontWeight: 'bold', lineHeight: 32}}>Algun texto para la imagen si es que lo requiere</Text>
                </SharedElement>


                <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las indus Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las indus Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las indus Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las indus Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las indus
                </Text>

                
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:60
    }
})