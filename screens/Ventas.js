import React from 'react';
import GraficoVentas from '../screens/BarChart/GraficoVentas'

//PASAR CON REDUX A FUTURO, POR PROPS AL GRAFICO LOS MESES Y VALORES DE VENTAS MENSUALES
export default Ventas = ({ navigation }) => {
    return (
        <GraficoVentas navigation={navigation} />
    )
}    