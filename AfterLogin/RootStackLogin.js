import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AntDesign } from '@expo/vector-icons';

import Resultados from '../screens/Resultados'
import Home from '../screens/home';
import Ventas from '../screens/Ventas'
import Gastos from '../screens/Gastos'
import Fondos from '../screens/Fondos'


import ScreenMotion from '../screens/BarChart/motion'

import TestBarChart from '../screens/BarChart/TestBarChart'

import DonutAuto from '../screens/DonutChart/TestDonut'

const TabNavigator = createBottomTabNavigator({
  RESUMEN: createStackNavigator({
    RESUMEN: Home,
    VENTAS: Ventas,
    headerMode: 'screen',
  },
    {
      defaultNavigationOptions: {
        headerShown: false,
      }
    }),

  GASTOS: createStackNavigator({
    GASTOS: Gastos,
  },
    {
      defaultNavigationOptions: {
        headerShown: false,
      }
    }),

  VENTAS: createStackNavigator({
    VENTAS: Ventas,
  },
    {
      defaultNavigationOptions: {
        headerShown: false,
      }
    }),

  // RESULTADOS: createStackNavigator({
  //   RESULTADOS: Resultados,
  // },
  // { 
  //   defaultNavigationOptions: { 
  //    headerShown: false,
  //  }
  // }),

  FONDOS: createStackNavigator({
    FONDOS: TestBarChart, //ScreenMotion, //SOLO PARA TESTING, IRIA EN VENTAS ORIGINALMENTE
  }, {
    defaultNavigationOptions: {
      headerShown: false,
    }
  }),
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'RESUMEN') {
          iconName = focused ? 'infocirlce' : 'infocirlceo' /*'ios-information-circle' : 'ios-information-circle-outline'*/
        } else if (routeName === 'GASTOS') {
          iconName = focused ? 'form' : 'form'/*'ios-list-box' : 'ios-list'*/
        } else if (routeName === 'VENTAS') {
          iconName = 'shoppingcart'
        } else if (routeName === 'RESULTADOS') {
          iconName = 'piechart'
        } else if (routeName === 'FONDOS') {
          iconName = 'carryout'
        }
        return <AntDesign name={iconName} size={25} color={tintColor} />
        /*<IconComponent name ={iconName} size= {25} color = {tintColor}></IconComponent>*/
      }
    }),

    tabBarOptions: {
      activeTintColor: 'green',
      backgroundColor: 'green',
      keyboardHidesTabBar: false,
      tabStyle: {
        backgroundColor: '#000',
      },
      lableStyle: {
        fontSize: 12,
      }

    }
  }
);


export default createAppContainer(TabNavigator)
// const TabNavigator = createBottomTabNavigator({
//       TabA: createStackNavigator({
//           MOVIES: Home,
//           ReviewDetails: ReviewDetails,
//           headerMode: 'none'
//       }),

//       TabB: createStackNavigator({
//         TabB: About,
//       }),

//       TabC: createStackNavigator({
//         TabC: ReviewDetails,
//       }),
//     },
//     {
//     defaultNavigationOptions: ({navigation})=>({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state
//         let IconComponent = Ionicons
//         let iconName
//         if (routeName === 'TabA'){
//           iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
//         }else if (routeName === 'TabB'){
//           iconName = focused ? 'ios-list-box' : 'ios-list'
//         }

//         return <IconComponent name ={iconName} size= {25} color = {tintColor}></IconComponent>
//       }
//     }),

//       tabBarOptions:{
//         activeTintColor: '#fff',
//         backgroundColor: '#f4511e',
//         keyboardHidesTabBar: false,
//         tabStyle: {
//           backgroundColor: '#000',
//         },
//         lableStyle: {
//           fontSize: 12,
//         }


//     }  
// }
// );


//   TabA: createStackNavigator({
//       MOVIES: Home,
//       ReviewDetails: ReviewDetails,
//       headerMode: 'none'
//   }),

//   TabB: createStackNavigator({
//     TabB: About,
//   }),

//   TabC: createStackNavigator({
//     TabC: ReviewDetails,
//   }),
// },
// {
// defaultNavigationOptions: ({navigation})=>({
//   tabBarIcon: ({focused, horizontal, tintColor}) => {
//     const {routeName} = navigation.state
//     let IconComponent = Ionicons
//     let iconName
//     if (routeName === 'TabA'){
//       iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
//     }else if (routeName === 'TabB'){
//       iconName = focused ? 'ios-list-box' : 'ios-list'
//     }

//     return <IconComponent name ={iconName} size= {25} color = {tintColor}></IconComponent>
//   }
// }),

//   tabBarOptions:{
//     activeTintColor: '#fff',
//     backgroundColor: '#f4511e',
//     keyboardHidesTabBar: false,
//     tabStyle: {
//       backgroundColor: '#000',
//     },
//     lableStyle: {
//       fontSize: 12,
//     }

//   }
// }  
// );



// const TabNavigator = createBottomTabNavigator({

//     TabA: createStackNavigator({
//       MOVIES: Home,
//       ReviewDetails: ReviewDetails,
//       headerMode: 'none'
//     }),

//     TabB: createStackNavigator({
//       TabB: About,
//     }),

//     TabC: createStackNavigator({
//       TabC: ReviewDetails,
//     })
//   },

//     //  Home, //createStackNavigator({
//     //     RESUMEN: Home,
//     //     ReviewDetails: ReviewDetails,
//     //     headerMode: 'screen',   
//     // },
//     //  { 
//     //    defaultNavigationOptions: { 
//     //     headerShown: false,
//     //   }
//     // }),

//     // GASTOS: createStackNavigator({
//     //   GASTOS: About,
//     // }),

//     // VENTAS: createStackNavigator({
//     //   VENTAS: ReviewDetails,
//     // }),

//     // RESULTADOS: createStackNavigator({
//     //   RESULTADOS: ReviewDetails,
//     // }),

//     // FONDOS: createStackNavigator({
//     //   FONDOS: ReviewDetails,
//     // }),

//   {
//     defaultNavigationOptions: ({navigation})=>({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state
//         let iconName
//         if (routeName === GASTOS/*'RESUMEN'*/){
//           iconName = focused ? 'infocirlce' : 'infocirlceo' /*'ios-information-circle' : 'ios-information-circle-outline'*/
//         }else if (routeName === 'VENTAS'/*'GASTOS'*/){
//           iconName = focused ? 'form' : 'form'/*'ios-list-box' : 'ios-list'*/
//         }else if (routeName === 'RESULTADOS'/*'VENTAS'*/){
//           iconName = 'shoppingcart'
//         }else if (routeName === 'FONDOS' /*'RESULTADOS'*/){
//           iconName = 'piechart'
//         // }else if (routeName === 'FONDOS'){
//         //   iconName = 'carryout'
//         }
//           return <AntDesign name={iconName} size={25} color={tintColor}/>
//       }
//   })

//     tabBarOptions:{
//       activeTintColor: '#fff',
//       backgroundColor: '#f4511e',
//       keyboardHidesTabBar: false,
//       tabStyle: {
//         backgroundColor: '#000',
//       },
//       lableStyle: {
//         fontSize: 12,
//       }

//     }

// }
// );

