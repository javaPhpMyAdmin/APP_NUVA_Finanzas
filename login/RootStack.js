import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HandlerStack from '../AfterLogin/HandlerStack'

import RootStackLogin from '../AfterLogin/RootStackLogin'

import SplashComponent from './SplashComponent';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';


//SOLO PARA TESTING DESPUES ELIMINAR COMPONENTE
import Fondos from '../screens/Fondos'
import NuevoMovimiento from '../screens/NuevoMovimiento'
import Lottie from '../screens/auxPieChart'
import ModificarMovimiento from '../screens/ModificarMovimiento'

import ReporteVentas from '../screens/ReporteVentas'
import ReporteGastos from '../screens/ReporteGastos'

import Shared from '../TestShared/index'
//

const StackNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashComponent,//ReporteVentas,////Shared,
        navigationOptions: {
            headerShown: false
        }
    },
    SignInScreen: {
        screen: SignInComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen: {
        screen: SignUpComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    RootStackLoginScreen: {
        screen: RootStackLogin,
        navigationOptions: {
            headerShown: false
        }
    },

});


export default createAppContainer(StackNavigator);