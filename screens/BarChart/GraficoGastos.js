import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Text, variables } from 'native-base'
import { get, maxBy, floor } from 'lodash'
import BarChart from './index'
import { ScrollView } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation'
import { AntDesign } from '@expo/vector-icons';




export default class GraficoGastos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nuevo: this.props.nuevo,
            ultimo: this.props.ultimo,
            max: 0,
            barChartHeight: 0,
            items: [
                { value: 280, month: 'Enero' },
                { value: 250, month: 'Febrero' },
                { value: 254, month: 'Marzo' },
                { value: 89, month: 'Abril' },
                { value: 280, month: 'Mayo' },
                { value: 250, month: 'Junio' },
                { value: 254, month: 'Julio' },
                { value: 89, month: 'Agosto' },
                { value: 280, month: 'Setiembre' },
                { value: 250, month: 'Octubre' },
                { value: 254, month: 'Noviembre' },
                { value: 500, month: 'Diciembre' },
            ]
        }
    }



    landscape = function changeScreenOrientation() {
        const a = //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);//ScreenOrientation.ScreenOrientationInfo
            console.log('try orientation', a)
    }

    portrait = async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }

    UNSAFE_componentWillMount() {
        this.landscape();
        const { height } = Dimensions.get('window');
        this.getBarChartHeight(height)
    }

    componentWillUnmount() {
        // this.portrait()
    }

    getBarChartHeight(heightScreen) {
        this.setState({
            barChartHeight: heightScreen - variables.toolbarHeight - 210       
        })
    }

    // _onLayout = (e) => {
    //     //console.log('incline', e.nativeEvent.layout.height)
    //     const heightScreen =  700//
    //     this.getBarChartHeight(heightScreen)
    // }

    getMaxValue() {
        const maxVaalue = get(maxBy(items, 'value'), 'value', 1);
        setMax(maxVaalue);
    }

    renderBar(item, index, maxValue) {
        const { value, month } = item
        const { barChartHeight } = this.state
        const valueY = value * barChartHeight / maxValue


        return (

            <BarChart
                mes={month}
                key={'barChart' + index}
                height={barChartHeight}
                valueY={floor(valueY, 2)}
                style={{ backgroundColor: 'green', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                labelTop={<Text style={{ textAlign: 'center', color: 'white', paddingTop: 10 }}>{value}</Text>}
                labelBottom={
                    <Text style={styles.labelBottom}>{month}</Text>
                }
            >
                <View ></View>
            </BarChart>

        )
    }

    render() {
        const { items, barChartHeight } = this.state
        const maxValue = get(maxBy(items, 'value'), 'value', 1)


        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, marginLeft: 5, marginRight: 15 }}>

                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('NUEVOGASTO') }}
                        style={{}}
                    >
                        <View sytle={{ flexDirection: 'row' }}>
                            <LinearGradient
                                colors={['#5db8fe', '#39cff2']}
                                style={[styles.signIn, { flexDirection: 'row' }]}
                            >
                                <Text style={[styles.textSign, { marginRight: 5 }]}>Nuevo Gasto</Text>
                                <AntDesign name='checkcircleo' size={33} color='#000' />
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('RootStackLoginScreen')}
                    >
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={[styles.signIn, { flexDirection: 'row' }]}
                        >
                            <Text style={[styles.textSign, { marginRight: 3 }]}>Último Gasto</Text>
                            <AntDesign name='form' size={33} color='#000' />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: 'row', paddingBottom:15,paddingTop:20, justifyContent: 'space-between'}}>
                    <Text style={{color:'white', paddingLeft:12,fontSize: 25, fontWeight: 'bold'}}>Anual</Text>
                    <Text style={{color:'white', fontSize: 27, fontWeight: '700'}}>$ 873</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'white', paddingRight: 15, fontSize: 20, fontStyle: 'italic', paddingTop:5}}>Reporte</Text>
                    </TouchableOpacity>
                    
                </View>

                <ScrollView /*onLayout={(e)=>{this._onLayout(e)}}*/ alwaysBounceHorizontal={false} horizontal={true}>

                    <View /*onLayout={(e) => this.onLayout(e)}*/ style={styles.content}>
                        <View style={[styles.barChartContainer, { height: barChartHeight + 80 }]}>
                            {items.map((item, index) => this.renderBar(item, index, maxValue))}
                            <View style={styles.borderLine}></View>
                        </View>
                    </View>
                </ScrollView>
            </View>

            // <View>
            //     <Text>hello</Text>
            //     <LinearGradient colors={['#6441A5', '#2a0845']} style={{ flex: 1 }}>
            //         <Container style={styles.container}>
            //             <Content onLayout={(e) => this.onLayout(e)} contentContainerStyle={styles.content}>
            //                 <Text style={styles.animateTitle}>Estadisticas de las ventas</Text>
            //                 <View style={[styles.barChartContainer, { height: barChartHeight + 50 }]}>
            //                     {items.map((item, index) => this.renderBar(item, index, maxValue))}
            //                     <View style={styles.borderLine}></View>
            //                 </View>
            //             </Content>
            //         </Container>
            //     </LinearGradient>
            // </View>
        )
    }
}


const backgroundColor = '#000'
const borderColor = 'red'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: '100%',
        width: '100%',
        backgroundColor
    },
    content: {
        flex: 1,
        paddingTop: 5,
        backgroundColor
    },
    title: {
        flex: 3
    },
    barChartContainer: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: 19,
        marginRight: 10,
        borderColor,
        backgroundColor,
    },
    labelBottom: {
        height: 38,
        textAlign: 'center',
        paddingTop: 4,
        backgroundColor,
        color: 'white',
    },
    borderLine: {
        width: '100%',
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'red',
        bottom: 12,
    },
    signIn: {
        width: 175,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
})
