import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TranslateY } from 'react-native-motion'
import { TouchableOpacity } from 'react-native-gesture-handler';


export class BarChart extends Component {
    render() {
        const { height, valueY, contentContainerStyle, style, labelTop, children, labelBottom, ...rest } = this.props

        const value = height - valueY;

        return (
            <View style={[styles.barContainer, contentContainerStyle]}>
                <TouchableOpacity onPress={() => alert('desde barChart')}>
                    <TranslateY startOnDidMount animateOnDidMount initialValue={height} value={value} {...rest}>
                        {labelTop}
                        <View style={[style, { height }]}>
                            <View style={{ height: valueY }}>
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
        width: 50,
        overflow: 'hidden'
    }
});

export default BarChart;