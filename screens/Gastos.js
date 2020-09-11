import React from 'react';
import GraficoGastos from '../screens/BarChart/GraficoGastos'

//PASAR CON REDUX A FUTURO, POR PROPS AL GRAFICO LOS MESES Y VALORES DE GASTOS MENSUALES
export default Gastos = ({ navigation }) => {
    return (
        <GraficoGastos navigation={navigation} />
    )
}