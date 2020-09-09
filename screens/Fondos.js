import React from 'react';
import { StyleSheet, View, Text, Image,  TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class Fondos extends React.Component {
  componentDidMount() {
    //this.animation1.play();
    // Or set a specific startFrame and endFrame with:
    //this.animation1.play(30, 130);
  }


        //<LottieView
        //   ref={animation1 => {
        //     this.animation1 = animation1;
        //   }}
        //   style={{
        //     width: 130,
        //     height: 130,
        //     backgroundColor: '#000',
        //     marginLeft: 0,
        //   }}
        //   source={require('../assets/24843-credit-cards (1)')}
        // // OR find more Lottie files @ https://lottiefiles.com/featured*/
        // />            

      //   <Image
      //   //resizeMode='contain'
      //   style={{ width: 40, height: 40, marginRight: 0, backgroundColor: '#000' }}
      //   source={require('../assets/18847-add-new-overflowing.gif')}
      // />
  render() {
    return (
       
        <View style={styles.Container}>
          <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 15}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>CAJA</Text>
            <View style={{ flexDirection: 'column', marginLeft: 45}}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, marginRight: 20 }}>$U</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, marginRight: 20 }}>US$</Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 25, paddingBottom: 10, }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>10,000</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35,  }}>500</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 50, marginLeft: 15}}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>BANCO</Text>
            <View style={{ flexDirection: 'column', marginLeft: 35}}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, marginRight: 20 }}>$U</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35, marginRight: 20 }}>US$</Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 15, paddingBottom: 50}}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>50,000</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35,  }}>1,000</Text>
            </View>
          </View>
          
          <View style={{ flexDirection: 'column', alignItems: 'center'}}>
          <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('RootStackLoginScreen')}
                    >    
                        <LinearGradient 
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Nuevo Movimiento</Text>
                        </LinearGradient>
                    </TouchableOpacity>  


                    <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('RootStackLoginScreen')}
                >    
                    <LinearGradient 
                        colors={['#5db8fe', '#39cff2']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Último Movimiento</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('RootStackLoginScreen')}
                >    
                    <LinearGradient 
                        colors={['#5db8fe', '#39cff2']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Emitir Reporte</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
          <View > 
          </View>
        </View>
          
        
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#000',
    flex: 1,
    marginTop: 50,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 27
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
});