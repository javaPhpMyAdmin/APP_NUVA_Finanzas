import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import ListScreen from './ListScreen'
import DetailScreen from './DetailScreen'

const Stack = createSharedElementStackNavigator();

const Shared = ({navigation}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = 'List'
                screenOptions= {{
                    headerShown: false
                }}    
            >
                <Stack.Screen name='ListScreen' component={ListScreen} />
                <Stack.Screen
                    name='DetailScreen'
                    component={DetailScreen}
                    options={ navigation => ({
                        headerBackTitleVisible: false,
                        cardStyleInterpolator: ({current: {progress}}) => {
                            return{
                                cardStyle: {
                                    opacity: progress
                                }
                            }
                        }
                    })}

                    sharedElementsConfig = {(route) => {
                        const {id, fotito1, testito1} = route.params
                        return [
                            {
                                id,
                                animation: 'move',
                                resize: 'clip',
                                align: 'center-top',    
                            },
                            {
                                id: {testito1},
                                animation: 'fade',
                                resize: 'clip',
                                align: 'left-center'
                            },
                            {
                                id: {fotito1},
                                animation: 'move',
                                resize: 'clip',
                                align: 'left-center'
                            }
                        ]
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Shared