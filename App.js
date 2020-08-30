import React, {Component} from 'react';
// import {createStackNavigator, headerStyle} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
// import {Ionicons, AntDesign} from '@expo/vector-icons';



// import About from './screens/about'
// import Home from './screens/home';
// import ReviewDetails from './screens/reviewDetails';
import RootStack from './login/RootStack'
import RootStackLogin from './AfterLogin/RootStackLogin'

export default class App extends Component{
  render(){
    return(
      // <RootStackLogin/>
      <RootStack/>
    );
  }
}
// const TabNavigator = createBottomTabNavigator({
//   RESUMEN: createStackNavigator({
//       RESUMEN: Home,
//       ReviewDetails: ReviewDetails,
//       headerMode: 'screen',
      
          
//   },
//    { 
//      defaultNavigationOptions: { 

//       headerShown: false,
//       // headerStyle: {
//       //     backgroundColor: 'rgb(16, 19, 19)',
//       // },
//       // headerTintColor: '#aaff',
//       // headerTitleStyle: {
//       //     fontWeight: 'bold',
//       // }
//     }
//   }),

//   GASTOS: createStackNavigator({
//     GASTOS: About,
//   }),

//   VENTAS: createStackNavigator({
//     VENTAS: ReviewDetails,
//   }),

//   RESULTADOS: createStackNavigator({
//     RESULTADOS: ReviewDetails,
//   }),
  
//   FONDOS: createStackNavigator({
//     FONDOS: ReviewDetails,
//   }),
// },
// {
  // defaultNavigationOptions: ({navigation})=>({
  //   tabBarIcon: ({focused, horizontal, tintColor}) => {
  //     const {routeName} = navigation.state
  //     let IconComponent = Ionicons
  //     let iconName
  //     if (routeName === 'RESUMEN'){
  //       iconName = focused ? 'infocirlce' : 'infocirlceo' /*'ios-information-circle' : 'ios-information-circle-outline'*/
  //     }else if (routeName === 'GASTOS'){
  //       iconName = focused ? 'form' : 'form'/*'ios-list-box' : 'ios-list'*/
  //     }else if (routeName === 'VENTAS'){
  //       iconName = 'shoppingcart'
  //     }else if (routeName === 'RESULTADOS'){
  //       iconName = 'piechart'
  //     }else if (routeName === 'FONDOS'){
  //       iconName = 'carryout'
  //     }
  //     return <AntDesign name={iconName} size={25} color={tintColor}/>
  //     /*<IconComponent name ={iconName} size= {25} color = {tintColor}></IconComponent>*/
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


//const App = createAppContainer(TabNavigator)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
