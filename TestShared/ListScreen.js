import React, {Component} from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image } from 'react-native'

import { SharedElement } from 'react-native-shared-element'
import TouchableScale from 'react-native-touchable-scale';

const ListScreen = ({navigation}) => {
        const fotito = 'fotito'
        const testito = 'testito'
        const { width, height} = Dimensions.get('window')
        return(
            <View style={{ flex: 1}}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerDate}>MONDAY 18 MAY</Text>
                        <Text style={styles.headerTitle}>Blog</Text>
                    </View>
                </View>              
                <View>
                
                    <TouchableScale
                        activeScale={0.9}
                        tension={50}
                        friction={7}
                        useNativeDriver
                        onPress={()=> navigation.navigate('DetailScreen', {id: 1, fotito1: fotito, testito1: testito})}
                    >
                        <SharedElement
                            id={1}
                        >
                            <Image 
                            resizeMode='cover'
                            source={require('../assets/hacker-grades-feature.jpg')}
                            style={{width: width - 90, height: height - 450, borderRadius: 14, marginRight: 30}}
                            />
                        </SharedElement>

                        <SharedElement
                            id={testito} 
                            style={{width: width - 90, position: 'absolute', bottom: 100, left: 10, paddingHorizontal: 10}}
                        >
                            <Text style={styles.blogTitle}>Algun texto para la imagen si es que lo requiere</Text>
                        </SharedElement>

                        <View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 20, left: 10}}>
                            <SharedElement
                            id={fotito}>
                                <Image style={styles.blogProfilePic} source={require('../assets/cancun-wallpapers-28479-2900528.jpg')}/>
                            </SharedElement>
                        </View>
                        

                    </TouchableScale>
                </View>


                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}>
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View>
                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}>
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View >
                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}> 
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View>
                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}>
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View>
                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}>
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View>
                <View style={{ marginBottom: 20, paddingRight: 20, marginTop:20}}>
                    <Text>MAS COSAS PARA MOSTRAR EN ESTA AREA</Text>
                </View>


            </View>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginTop: 40,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    headerDate: {
        fontSize: 14,
        fontWeight: '700',
        color: 'orange',
        textTransform: 'uppercase'
    },
    headerTitle: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    headerImage: {
        width: 55,
        height: 55,
        borderRadius: 10
    },
    blogProfilePic: {
        height: 70,
        width: 70,
        borderRadius: 10,
        marginRight: 14
    },
    blogTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 28
    }


})

export default ListScreen;