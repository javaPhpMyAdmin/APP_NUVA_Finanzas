import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-chart-kit';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import DonutAuto from './DonutChart/TestDonut'




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}

const screenWidth = Dimensions.get('window').width

const data = [
    { name: 'Ventas', population: 1111, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 20 },
    { name: 'Gastos', population: 873, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 20 },
]


//<ScrollView >    
//</ScrollView> <Animatable.View animation='fadeInDownBig' duration={2000} style={{alignItems: 'center',justifyContent: 'center',/*paddingBottom:'10'*/}}>
//</Animatable.View>   <Image
//     resizeMode='contain'
//     style={styles.logo}
//     source={{
//         uri: 'https://image.freepik.com/vector-gratis/logotipo-rojo-sobre-fondo-negro_1195-52.jpg',
//     }}
//     />
//     <TouchableOpacity

//     >
//         <Text style={{color: 'white',paddingLeft: 5}}>MI EMPRESA</Text>
//     </TouchableOpacity>
// </Animatable.View>


//footer
// <Animatable.View animation='lightSpeedIn' duration={900} style={{flexDirection:'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10}}> 
//     <Text style={{color: '#fff',paddingLeft: 13, fontSize:30, fontWeight: 'bold'}}>Margen de ganancia</Text>
//     <Text style={{color: '#fff',paddingLeft: 20, fontSize:30, fontWeight: 'bold'}}>21 %</Text>
// </Animatable.View>

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ScrollView>
                    <View style={{ paddingTop: 15, backgroundColor: '#000' }}>
                        <Animatable.View
                            animation='lightSpeedIn'
                            duration={1500}
                            style={{ justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 5, paddingTop: 50, paddingBottom: 10, width: '100%' }}
                        >
                            <Text style={{ color: '#fff', paddingLeft: 7, fontSize: 33, fontWeight: 'bold' }}>Ventas</Text>
                            <Text style={{ color: '#fff', paddingLeft: 7, fontSize: 33, fontWeight: 'bold' }}>$ 1,111</Text>
                            <Animatable.View animation='zoomInUp' delay={1000} duration={700} style={{ width: 48, alignItems: 'center', overflow: 'hidden', position: 'relative', marginRight: 7 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('NUEVAVENTA') }}>
                                    <Ionicons style={{ color: '#fff', fontSize: 50, fontWeight: 'bold', paddingBottom: 5 }} name="md-add-circle" size={24} color="black" />
                                </TouchableOpacity>
                            </Animatable.View>
                        </Animatable.View>
                        <Animatable.View
                            animation='lightSpeedIn'
                            delay={500} duration={1500}
                            style={{ justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 5, paddingTop: 10, paddingBottom: 10, width: '100%' }}
                        >
                            <Text style={{ color: '#fff', paddingLeft: 7, fontSize: 33, fontWeight: 'bold' }}>Gastos</Text>
                            <Text style={{ color: '#fff', paddingLeft: 23, fontSize: 33, fontWeight: 'bold' }}>$ 873</Text>
                            <Animatable.View
                                animation='zoomInUp'
                                delay={1500}
                                style={{ width: 48, alignItems: 'center', position: 'relative', marginRight: 7 }}
                            >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('NUEVOGASTO') }}>
                                    <Ionicons style={{ color: '#fff', fontSize: 50, fontWeight: 'bold', paddingBottom: 5 }} name="md-add-circle" size={24} color="black" />
                                </TouchableOpacity>
                            </Animatable.View>
                        </Animatable.View>
                        {<Animatable.View
                            animation='lightSpeedIn' delay={1000}
                            duration={1500}
                            style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5, paddingTop: 10, paddingBottom: 10, width: '100%' }}
                        >
                            <Text style={{ color: '#fff', paddingLeft: 7, fontSize: 33, fontWeight: 'bold' }}>Resultado</Text>
                            <View style={{}}>
                                <Text style={{ color: '#fff', paddingLeft: 47, fontSize: 33, fontWeight: 'bold' }}>$ 238</Text>
                            </View>
                            {/*<Animatable.View animation='zoomInUp'delay={2000} style={{width:48,alignItems:'center',overflow:'hidden',position:'relative',marginRight:7}}>
                            <TouchableOpacity style={{}}>
                                <Ionicons style={{color: '#fff', fontSize:50, fontWeight: 'bold',paddingBottom:5}} name="md-add-circle" size={24} color="black" />
                            </TouchableOpacity>
                    </Animatable.View>*/}
                        </Animatable.View>}
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AUXPIECHART')}>
                        <Animatable.View animation='zoomIn' duration={2000} style={styles.pieChart}>
                            <PieChart
                                data={data}
                                width={screenWidth}
                                height={220}
                                chartConfig={chartConfig}
                                accessor="population"
                                backgroundColor="transparent"
                                paddingLeft="10"
                            />
                        </Animatable.View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <Animatable.View animation='lightSpeedIn' duration={900} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: 12 }}>
                            <Text style={{ color: '#fff', paddingLeft: 13, fontSize: 30, fontWeight: 'bold' }}>Margen de</Text>
                            <Text style={{ color: '#fff', paddingLeft: 5, fontSize: 30, fontWeight: 'bold' }}>Ganancia</Text>
                        </Animatable.View>
                        <DonutAuto />
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
        backgroundColor: '#000',
        height: windowHeight,
        width: windowWidth
    },
    logo: {
        width: 106,
        height: 158,
        borderRadius: 250 / 2,
        justifyContent: 'center'
    },
    pieChart: {
        backgroundColor: '#000',
        paddingTop: 10
    }
})