import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TranslateY } from 'react-native-motion'
import { TouchableOpacity } from 'react-native-gesture-handler';


export class BarChart extends Component {
    render() {
        const { height, valueY, contentContainerStyle, style, labelTop, children, labelBottom, mes, ...rest } = this.props

        const value = height - valueY;
        return (
            <View style={[styles.barContainer, contentContainerStyle]}>
                <TouchableOpacity onPress={() => alert(`Reporte para el mes de: ${mes} `)}>
                    <TranslateY  startOnDidMount animateOnDidMount initialValue={height} value={value} {...rest}>
                        {labelTop}
                        <View style={[style, { height: height}]}>
                            <View style={{ height: valueY}}>
                                {children}
                            </View>
                        </View>
                    </TranslateY>
                </TouchableOpacity>
                {labelBottom}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    barContainer: {
        width: 92,
        overflow: 'visible',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        padding: 7
    }
});

export default BarChart;