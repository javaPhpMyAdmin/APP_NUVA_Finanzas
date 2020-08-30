import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-chart-kit';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
    
    const screenWidth = Dimensions.get('window').width
    
    const data = [
      { name: 'Ventas', population: 1111, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 20 },
      { name: 'Gastos', population: 873, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 20 },
    ]


export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView>    
            <View style={{alignItems: 'center',justifyContent: 'center',paddingBottom:10}}>
                    <Image
                    resizeMode='contain'
                    style={styles.logo}
                    source={{
                        uri: 'https://image.freepik.com/vector-gratis/logotipo-rojo-sobre-fondo-negro_1195-52.jpg',
                    }}
                    />
                    <TouchableOpacity
                        onPress={()=>{this.props.navigation.navigate('ReviewDetails')}}
                    >
                        <Text style={{color: 'white',paddingLeft: 5}}>MI EMPRESA</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={{paddingTop: 15}}>
                    <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{color: '#fff', paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Ventas</Text>
                        <Text style={{color: '#fff', paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 1111</Text>
                        <TouchableOpacity>
                            <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold',paddingBottom:5}} name="md-add-circle" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Gastos</Text>
                        <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 873</Text>
                        <TouchableOpacity>
                            <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold',paddingBottom:5}} name="md-add-circle" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Resultado</Text>
                        <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 238</Text>
                        <TouchableOpacity>
                            <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold'}} name="md-add-circle" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.pieChart}>
                        <PieChart
                            data={data}
                            width={screenWidth}
                            height={220}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="10"
                        />
                </View> 
                <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}> 
                    <Text style={{color: '#fff',paddingLeft: 13, fontSize:30, fontWeight: 'bold'}}>Margen de ganancia</Text>
                    <Text style={{color: '#fff',paddingLeft: 20, fontSize:30, fontWeight: 'bold'}}>21 %</Text>
                </View>
    
                </ScrollView>
            </SafeAreaView>
        )
    }

}
// const  Home = ({navigation}) =>{
//     return(
//         <SafeAreaView style={styles.container}>
//         <ScrollView>    
//         <View style={{alignItems: 'center',justifyContent: 'center',paddingBottom:10}}>
//                 <Image
//                 style={styles.logo}
//                 source={{
//                     uri: 'https://image.freepik.com/vector-gratis/logotipo-rojo-sobre-fondo-negro_1195-52.jpg',
//                 }}
//                 />
//                 <TouchableOpacity
//                     onPress={()=>{navigation.navigate('ReviewDetails')}}
//                 >
//                     <Text style={{color: 'white',paddingLeft: 5}}>MI EMPRESA</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={{paddingTop: 15}}>
//                 <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
//                     <Text style={{color: '#fff', paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Ventas</Text>
//                     <Text style={{color: '#fff', paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 1111</Text>
//                     <TouchableOpacity>
//                         <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold',paddingBottom:5}} name="md-add-circle" size={24} color="black" />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
//                     <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Gastos</Text>
//                     <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 873</Text>
//                     <TouchableOpacity>
//                         <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold',paddingBottom:5}} name="md-add-circle" size={24} color="black" />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}>
//                     <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>Resultado</Text>
//                     <Text style={{color: '#fff',paddingLeft: 20, fontSize:33, fontWeight: 'bold'}}>$ 238</Text>
//                     <TouchableOpacity>
//                         <Ionicons style={{color: '#fff', paddingLeft: 40, fontSize:50, fontWeight: 'bold'}} name="md-add-circle" size={24} color="black" />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.pieChart}>
//                     <PieChart
//                         data={data}
//                         width={screenWidth}
//                         height={220}
//                         chartConfig={chartConfig}
//                         accessor="population"
//                         backgroundColor="transparent"
//                         paddingLeft="10"
//                     />
//             </View> 
//             <View style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}> 
//                 <Text style={{color: '#fff',paddingLeft: 20, fontSize:30, fontWeight: 'bold'}}>Margen de ganancia</Text>
//                 <Text style={{color: '#fff',paddingLeft: 20, fontSize:30, fontWeight: 'bold'}}>21 %</Text>
//             </View>

//             </ScrollView>
//         </SafeAreaView>
//     )}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(16, 19, 19);',
        height: windowHeight,
        width: windowWidth    
    },
    logo: {
        width: 106,
        height: 158,
        borderRadius: 250 / 2 ,
        justifyContent: 'center'
    },
    pieChart: {
        backgroundColor: 'rgb(16, 19, 19);',
        paddingTop: 10
    }
})