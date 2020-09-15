import React, { useState } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native'

import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';

let startAncestor = null
let startNode = null

let endAncestor = null
let endNode = null

const position = new Animated.Value(0);

export default TestShared = () => {

    return (
        <View>

            <View ref={ref => startAncestor = nodeFromRef(ref)}>

                <SharedElement onNode={node => startNode = node}>
                    <Image style={styles.image} source={require('../assets/hacker-grades-feature.jpg')} />
                </SharedElement>

            </View>




            <View ref={ref => endAncestor = nodeFromRef(ref)}>

                <SharedElement onNode={node => endNode = node}>
                    <Image style={styles.image} source={require('../assets/hacker-grades-feature.jpg')} />
                </SharedElement>

            </View>


            <View style={StyleSheet.absoluteFill}>
                <SharedElementTransition
                    start={{
                        node: startNode,
                        ancestor: startAncestor
                    }}
                    end={{
                        node: endNode,
                        ancestor: endAncestor
                    }}
                    position={position}
                    animation='move'
                    resize='auto'
                    align='auto'
                />
            </View>
        </View>
    );



}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 180
    }
})
