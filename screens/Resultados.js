import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DonutAuto from './DonutChart/TestDonut'

export default Resultados = () =>{

    const items = [
        { egreso: 280, ingreso: 133 , acumulado: -147, month: 'Enero' },
        { egreso: 250, ingreso: 452 , acumulado: 202, month: 'Febrero' },
        { egreso: 254, ingreso: 125 , acumulado: -129, month: 'Marzo' },
        { egreso: 89,  ingreso: 401 , acumulado: 312, month: 'Abril' },
        { egreso: 280, ingreso: 133 , acumulado: -147, month: 'Mayo' },
        { egreso: 250, ingreso: 452 , acumulado: 202, month: 'Junio' },
        { egreso: 254, ingreso: 125 , acumulado: -129, month: 'Julio' },
        { egreso: 89,  ingreso: 401 , acumulado: 312, month: 'Agosto' },
        { egreso: 280, ingreso: 133 , acumulado: -147, month: 'Setiembre' },
        { egreso: 250, ingreso: 452 , acumulado: 202, month: 'Octubre' },
        { egreso: 254, ingreso: 125 , acumulado: -129, month: 'Noviembre' },
        { egreso: 500, ingreso: 401 , acumulado: -312, month: 'Diciembre' },
    ]

    return(
        <View style={styles.container}>
            <View style={{ height: 300, paddingBottom: 15, paddingLeft:15, paddingRight: 15}}>
            <ScrollView horizontal={true} >
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <View style={{flexDirection: 'column', paddingTop: 50}}>
                    <View style={{ flexDirection: 'row', paddingRight: 45, paddingBottom: 30, justifyContent: 'space-between'}}>
                        <Text style={[styles.textRow, {paddingRight: 20}]}>Ingresos</Text>
                        <Text style={[styles.textRow, {paddingLeft: 20}]}>1111</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingRight: 45, paddingBottom: 15, justifyContent: 'space-between'}}>
                        <Text style={styles.textRow}>Egresos</Text>
                        <Text style={[styles.textRow, {paddingLeft: 20}]}>873</Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 5}}>
                        <Text style={styles.textRow}>Resultado</Text>
                        <Text style={styles.textRow}>Acumulado</Text>
                    </View>
                </View>
                
                {items.map((item, index)=>{
                    return (
                        <View key={index} style={{ paddingTop: 50, alignItems: 'center'}}>
                            <Text style={[styles.textRow, {paddingLeft: 3, paddingRight: 15, paddingBottom: 30}]}>{item.ingreso}</Text>
                            <Text style={[styles.textRow, {paddingLeft: 5, paddingRight: 20, paddingBottom: 30}]}>{item.egreso}</Text>
                            <Text style={[styles.textRow, {paddingLeft: 5, paddingRight: 20}]}>{item.acumulado}</Text>
                            <Text style={[styles.textRow, {paddingLeft: 5, paddingRight: 20, paddingTop: 20, color: 'blue'}]}>{item.month}</Text>
                        </View>
                    )
                })}
            
            </View>
           </ScrollView>
            </View>
           
            <View style={{ paddingTop: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text  
                            style={[styles.textRow, {paddingLeft: 15, fontSize: 30, fontWeight: 'bold'}]}
                        >
                        Resultado 
                        </Text>
                        <Text style={[styles.textRow, {paddingLeft: 15, fontSize: 30, fontWeight: 'bold'}]}>
                        Final
                        </Text>
                    </View>
                    <Text  style={[styles.textRow, {paddingRight: 30, fontSize: 40, paddingTop: 10}]}>238</Text>
                </View>
            </View>
            
            <View style={{flexDirection: 'row', paddingTop: 40, paddingRight: 15}}>
                <View style={{ paddingTop: 10, paddingRight: 30}}>
                    <Text  style={[styles.textRow, {paddingLeft: 15, fontSize: 35, paddingTop: 10}]}>Margen de </Text>
                    <Text  style={[styles.textRow, {paddingLeft: 15, fontSize: 35, paddingTop: 10}]}>Ganancia</Text>
                </View>
                <DonutAuto />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: '100%',
        width: '100%',
        paddingBottom: 15
    },
    textRow: {
        color: 'white',
        fontSize: 20
    }
})