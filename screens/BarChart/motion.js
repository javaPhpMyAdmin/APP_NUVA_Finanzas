import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'

import { Container, Content, Text, variables } from 'native-base'

import { LinearGradient } from 'react-native-linear-gradient'

import { get, maxBy, floor } from 'lodash'
import BarChart from './index'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ScreenMotion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            barChartHeight: 0,
            items: [
                { value: 400 },
                { value: 70 },
                { value: 600 },
                { value: 50 },
                { value: 30 },
                { value: 500 },
            ]
        }
    }


    UNSAFE_componentWillMount() {
        const { height } = Dimensions.get('window');
        this.getBarChartHeight(height)
    }

    getBarChartHeight(height) {
        this.setState({
            barChartHeight: height - variables.toolbarHeight - 200
        })
    }

    onLayout = ({ nativeEvent }) => {
        console.log('incline')
        const { height } = nativeEvent.onLayout
        this.getBarChartHeight(height)
    }

    renderBar({ value }, index, maxValue) {
        const { barChartHeight } = this.state
        const valueY = value * barChartHeight / maxValue

        return (

            <BarChart
                key={'barChart' + index}
                height={barChartHeight}
                valueY={floor(valueY, 2)}
                style={{ backgroundColor: '#8AC5F6' }}
                labelTop={<Text style={{ textAlign: 'center' }}>{value}</Text>}
                labelBottom={
                    <Text style={styles.labelBottom}>{index + 1}</Text>
                }
            >
                <View></View>
            </BarChart>

        )
    }

    render() {
        const { items, barChartHeight } = this.state
        const maxValue = get(maxBy(items, 'value'), 'value', 1)

        return (

            <View>
                <View style={[styles.barChartContainer, { height: barChartHeight + 50 }]}>
                    {items.map((item, index) => this.renderBar(item, index, maxValue))}
                    <View style={styles.borderLine}></View>
                </View>
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


const backgroundColor = 'white'
const borderColor = '#D3D3D3'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    content: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 3
    },
    barChartContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        overflow: 'hidden',
        justifyContent: 'space-between',
        maxWidth: 400,
        borderWidth: 1,
        borderColor,
        paddingTop: 10,
        marginBottom: 10,
        backgroundColor,
    },
    labelBottom: {
        height: 20,
        textAlign: 'center',
        backgroundColor,
    },
    borderLine: {
        width: '100%',
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'black',
        bottom: 20
    }
})


