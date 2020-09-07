import React from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native'

import { Text, variables } from 'native-base'
import { get, maxBy, floor } from 'lodash'
import BarChart from './index'

export default class ScreenMotion extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            barChartHeight: 400,
            items: [
                { value: 400, month: 'Enero' },
                { value: 70, month: 'Febrero' },
                { value: 600, month: 'Marzo' },
                { value: 50, month: 'Abril' },
                { value: 30, month: 'Mayo' },
                { value: 500, month: 'Junio' },
            ]
        }
    }


    UNSAFE_componentWillMount() {
        const { height } = Dimensions.get('window');
        this.getBarChartHeight(height)
    }

    getBarChartHeight(heightScreen) {
        this.setState({
            barChartHeight: heightScreen - variables.toolbarHeight - 200
        })
    }

    _onLayout = (e) => {
        console.log('incline')
        const heightScreen =  700//e.nativeEvent.layout.height
        this.getBarChartHeight(heightScreen)
    }

    renderBar(item, index, maxValue) {
        const { value, month } = item
        const { barChartHeight } = this.state
        const valueY = value * barChartHeight / maxValue
       

        return (

            <BarChart
                key={'barChart' + index}
                height={barChartHeight}
                valueY={floor(valueY, 2)}
                style={{ backgroundColor: 'green', borderTopRightRadius:10, borderTopLeftRadius:10 }}
                labelTop={<Text style={{ textAlign: 'center', color: 'white' }}>{value}</Text>}
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

            <View>
                <View style={styles.container}>
                <View /*onLayout={(e) => this.onLayout(e)}*/ style={styles.content}>
                        <View style={[styles.barChartContainer, { height: barChartHeight + 50, }]}>
                            {items.map((item, index) => this.renderBar(item, index, maxValue))}
                            <View style={styles.borderLine}></View>
                        </View>
                </View>               
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


const backgroundColor = '#000'
const borderColor = 'red'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: '100%'
    },
    content: {
        flex: 1,
        paddingTop: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
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
        maxWidth: 900,
        borderWidth: 0,
        borderColor,
        paddingTop: 10,
        marginBottom: 10,
        backgroundColor,
        
    },
    labelBottom: {
        height: 30,
        textAlign: 'center',
        backgroundColor,
        color: 'white',
    },
    borderLine: {
        width: '100%',
        position: 'absolute',
        borderWidth: 0.5,
        borderColor: 'black',
        bottom: 10
    }
})


