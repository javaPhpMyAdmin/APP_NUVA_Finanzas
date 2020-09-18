import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Image} from 'react-native';
import { Text } from 'react-native-animatable';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation'
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { AntDesign } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';


const items= [
    {
        nroDocumento: 'I2000001',
        fecha: '30-09-20',
        moneda: 'Pesos',
        importe: '1500000',
        iva: '23600',
        total: '1736000',
        proveedor: 'Pepito1ito1ito',
        forma_pago: 'Efectivo',
        tipo_gasto: 'Alquiler'
    },
    {
        nroDocumento: 'I2000002',
        fecha: '30-09-20',
        moneda: 'Pesos',
        importe: '1000',
        iva: '400',
        total: '1400',
        proveedor: 'Pepito12',
        forma_pago: 'Débito',
        tipo_gasto: 'DGI'
    },
    {
        nroDocumento: 'I2000003',
        fecha: '31-09-20',
        moneda: 'Dólares',
        importe: '2000',
        iva: '800',
        total: '2800',
        proveedor: 'Pepito3',
        forma_pago: 'Crédito',
        tipo_gasto: 'BPS'  
    },
    {
        nroDocumento: 'I2000001',
        fecha: '30-09-20',
        moneda: 'Pesos',
        importe: '1500',
        iva: '236',
        total: '1736',
        proveedor: 'Pepito1',
        forma_pago: 'Efectivo',
        tipo_gasto: 'UTE' 
    },
    {
        nroDocumento: 'I2000002',
        fecha: '30-09-20',
        moneda: 'Pesos',
        importe: '1000',
        iva: '400',
        total: '1400',
        proveedor: 'Pepito12',
        forma_pago: 'Débito',
        tipo_gasto: 'Mercaderia'  
    },
    {
        nroDocumento: 'I2000003',
        fecha: '31-09-20',
        moneda: 'Dólares',
        importe: '2000',
        iva: '800',
        total: '2800',
        proveedor: 'Pepito3',
        forma_pago: 'Crédito',
        tipo_gasto: 'DGI'   
    },
]


export default ReporteVentas = ({navigation}) => {
    
    const [show, setShow] = useState(false)
    const [showData, setShowData] = useState(false)
    const [fecha, setFecha] = useState('')
    
    const [showhasta, setShowhasta] = useState(false)
    const [showDatahasta, setShowDatahasta] = useState(false)
    const [fechahasta, setFechahasta] = useState('')

    const showDatepicker = () => {
        setShow(!show)
    };

    const showDatepickerHasta = () => {
        setShowhasta(!showhasta)
    };

    landscape = function changeScreenOrientation() {
        const a = ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);//ScreenOrientation.ScreenOrientationInfo
    }

    portrait = function changeScreenOrientation() {
        const a = ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);//ScreenOrientation.ScreenOrientationInfo
    }

    const isFocused = navigation.isFocused();
    
    useEffect(()=> { 
        isFocused ? landscape() : null;
        console.log(`Is Focused ${isFocused}`)

        return(()=>{
            portrait()
        })
        
    }, [])

    return (
        <SafeAreaView style={styles.container}>
        <View >
            <StatusBar barStyle='light-content' />
            <ScrollView alwaysBounceVertical={true} style={{paddingRight: 10}}>
                <Animatable.View animation='fadeInLeftBig' duration={1500} style={{flexDirection: 'row', paddingHorizontal: 19, justifyContent: 'flex-start'}}>
                    <View style={{ flexDirection: 'row', paddingTop: 5, marginRight: 20 }}>
                        <Text style={[styles.text_footer, { marginTop: 35, color: 'white', fontSize: 25 }]}>
                            Desde
                        </Text>
                        {
                            showData ?

                                <Text
                                    style={[styles.textVenta, { marginTop: 40 }]}
                                >
                                    {moment(fecha).format('DD-MM-YYYY')}
                                </Text>
                                :
                                <Text
                                    style={[styles.textVenta, { marginTop: 40 }]}
                                >
                                    {''}
                                </Text>
                        }

                        <View style={{ justifyContent: 'center', paddingLeft: 30 }}>
                            <TouchableOpacity onPress={showDatepicker}>
                                <AntDesign name='calendar' size={45} color='#f4511e' />
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={(fecha_venta, date) => {
                                    console.log(date)
                                    setShow(false);
                                    setShowData(true);
                                    setFecha(date);
                                }}
                            />
                        )}
                    </View>
                    
                    <View style={{ flexDirection: 'row', paddingTop: 5, width: '100%', height: 110, marginRight: 10, paddingLeft: 25 }}>
                        <Text style={[styles.text_footer, { marginTop: 35, color: 'white', fontSize: 25 }]}>
                            Hasta
                        </Text>
                        {
                            showDatahasta ?

                                <Text
                                    style={[styles.textVenta, { marginTop: 40 }]}
                                >
                                    {moment(fechahasta).format('DD-MM-YYYY')}
                                </Text>
                                :
                                <Text
                                    style={[styles.textVenta, { marginTop: 40 }]}
                                >
                                    {''}
                                </Text>
                        }

                        <View style={{ justifyContent: 'center', paddingLeft: 25 }}>
                            <TouchableOpacity onPress={showDatepickerHasta}>
                                <AntDesign name='calendar' size={45} color='#f4511e' />
                            </TouchableOpacity>
                        </View>
                        {showhasta && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date()}
                                mode='date'
                                is24Hour={true}
                                display="default"
                                onChange={(fecha_venta1, date) => {
                                    console.log(date)
                                    setShowhasta(false);
                                    setShowDatahasta(true);
                                    setFechahasta(date);
                                }}
                            />
                        )}
                        
                        <View style={{paddingLeft: 25, paddingTop: 27}}>
                            <TouchableOpacity 
                                style={{}} 
                                onPress={()=>{}
                            }>
                                <LinearGradient
                                    colors={['#5db8fe', '#39cff2']}
                                    style={[styles.actualizaMain]}
                                >
                                    <Text 
                                        style={[styles.textActualiza]}>Actualizar</Text>                            
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>  
                    </View>   
                </Animatable.View>
                
                    {/*CABEZERA DE LA TABLA*/}
                    <Animatable.View animation='bounceInRight' duration={2000} delay={1100} style={{flexDirection: 'row', paddingLeft: 7}}>
                        <View 
                            style={{
                                width: 50, 
                                height: 60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white' , 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderLeftWidth: 1,
                                borderLeftColor: 'white',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                                }}
                        >
                            <Text style={styles.textCabezera}>Row</Text>
                        </View>
                        <View 
                            style={{
                                width: 100, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white' , 
                                justifyContent: 'center',
                                alignItems: 'center',
                               borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.textCabezera}>Nro.</Text>
                                <Text style={styles.textCabezera}>Documento</Text>
                            </View>
                        </View>
                        <View 
                            style={{
                                width: 85, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>Fecha</Text>
                        </View>
                        <View 
                            style={{
                                width: 60, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>Moneda</Text>
                        </View>
                        <View 
                            style={{
                                width: 80, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>Importe</Text>
                        </View>
                        <View 
                            style={{
                                width: 50, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>IVA</Text>
                        </View>
                        <View 
                            style={{
                                width: 70, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>Total</Text>
                        </View>
                        <View 
                            style={{
                                width: 110, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white',
                                borderRightColor: 'white', 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1}}
                        >
                            <Text style={styles.textCabezera}>Proveedor</Text>
                        </View>
                        <View   
                            style={{
                                width: 70, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white' , 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1
                                }}
                        >
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.textCabezera}>Forma</Text>
                            <Text style={styles.textCabezera}>de Pago</Text>
                        </View>
                        </View>
                        
                        <View   
                            style={{
                                width: 75, 
                                height:60, 
                                borderRightWidth: 1, 
                                borderTopWidth: 1, 
                                borderTopColor: 'white', 
                                borderRightColor: 'white' , 
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1
                                }}
                        >
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.textCabezera}>Tipo</Text>
                            <Text style={styles.textCabezera}>de Gasto</Text>
                        </View>
                        </View>     
                    </Animatable.View>
                    
                    {/** ITERACION SOBRE LOS DATOS OBTENIDOS PARA RANGO DE FECHAS, CREANDO CADA FILA CORRESPONDIENTE */}
                    {
                        items.map((item, index) => {
                            return(
                                <Animatable.View 
                                    animation='bounceInLeft'
                                    duration={2000}
                                    delay={2000} 
                                    key={index} 
                                    style={{flexDirection: 'row', paddingLeft: 7}
                                }>
                                <View
                                    
                                    style={{
                                        width: 50, 
                                        height: 60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white' , 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderLeftWidth: 1,
                                        borderLeftColor: 'white',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1
                                        }}
                                >
                                    <Text style={[styles.textTabla, {color: 'white'}]}>{index + 1}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 100, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white' , 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={styles.textTabla}>{item.nroDocumento}</Text>
                                    </View>
                                </View>
                                <View 
                                    style={{
                                        width: 85, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.fecha}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 60, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.moneda}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 80, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.importe}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 50, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.iva}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 70, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.total}</Text>
                                </View>
                                <View 
                                    style={{
                                        width: 110, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white',
                                        borderRightColor: 'white', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1}}
                                >
                                    <Text style={styles.textTabla}>{item.proveedor}</Text>
                                </View>
                                <View   
                                    style={{
                                        width: 70, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white' , 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1
                                        }}
                                >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.textTabla}>{item.forma_pago}</Text>
                                </View>
                                </View>
                                
                                <View   
                                    style={{
                                        width: 75, 
                                        height:60, 
                                        borderRightWidth: 1, 
                                        borderTopWidth: 1, 
                                        borderTopColor: 'white', 
                                        borderRightColor: 'white' , 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderBottomColor: 'white',
                                        borderBottomWidth: 1
                                        }}
                                >
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.textTabla}>{item.tipo_gasto}</Text>
                                </View>
                                </View>   
                            </Animatable.View>
                            )
                        })
                    }
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 30, paddingTop: 35, paddingBottom: 40, paddingLeft:20}}>
                        <View style={{flexDirection: 'column', paddingBottom: 10}}>
                            <Text style={styles.textFinal}>Promedio</Text>
                            <Text style={styles.textFinal}>mensual</Text>
                            <Text style={styles.textFinal}>de GASTOS</Text>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <Text style={styles.textFinal}>15005325</Text>
                        </View>

                        <View style={{paddingTop: 0}}>
                            <View style={{paddingLeft: 17}}>
                                <Text style={[styles.textFinal, {fontSize:20, paddingBottom: 10}]}>Exportar</Text>
                            </View>
                            <View style={{flexDirection: 'row', }}>
                                <View style={{paddingRight: 15}}>
                                    <TouchableOpacity onPress={() => {}}>
                                        <AntDesign name='pdffile1' size={45} color='#f4511e' />
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={{paddingRight: 35}}>
                                    <TouchableOpacity onPress={() => {}}>
                                        <Image
                                            resizeMode='contain'
                                            style={{ width: 55, height: 48, }}
                                            source={require('../assets/microsoft_excel_22733.png')}
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </View>
                        </View>
                    </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#000',
    },
    buttonContainer: {
        paddingTop: 20,
    },
    textAux: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    textActualiza: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    actualizaMain: {
        width: 145,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: 'red'
    },
    textVenta: {
        color: '#f4511e',
        fontSize: 20,
        marginLeft: 15
    },
    textTabla: {
        color: 'white', 
        fontSize: 14, 
    },
    textCabezera: {
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold',
    },
    textFinal: {
        color: 'white',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});