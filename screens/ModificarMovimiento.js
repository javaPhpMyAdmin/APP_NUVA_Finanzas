import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default ModificarMovimiento = ({ navigation }) => {

    const [show, setShow] = useState(false)
    const [showData, setShowData] = useState(false)
    const [fecha, setFecha] = useState('')

    const showDatepicker = () => {
        setShow(!show)
    };

    const auxFunction = (values) => {

        const auxJson = {
            'Tipo_de_Movimiento': values.tipoMovimiento,
            'Forma_de_pago': values.formaDePago,
            'Fecha_de_Movimiento': moment(fecha).format('DD-MM-YYYY'),
            'Moneda': values.moneda,
            'Importe': values.importe,
            'Motivo': values.motivo
        }

        alert(JSON.stringify(auxJson))
    }

    const deleteFunc = () => {
        alert("Funcion eliminar test")
    }

    return (
        <ScrollView style={styles.container1}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Formik
                    initialValues={
                        {
                            tipoMovimiento: 'aporte',
                            formaDePago: 'caja',
                            fechaMovimiento: new Date(),
                            moneda: 'pesos',
                            importe: '',
                            motivo: ''
                        }
                    }
                    onSubmit={(values, action) => {
                        auxFunction(values);
                        action.resetForm();
                        setFecha('');
                        setShowData(false);
                    }}
                >

                    {(props) => (

                        <View style={styles.contianer}>

                            <Text style={[styles.text_footer, { marginTop: 10 }]}>
                                Tipo de Movimiento
                    </Text>

                            <View style={{ paddingLeft: 60, paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', paddingLeft: 16, paddingTop: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 12 }}>
                                            Aporte
                                </Text>
                                    </View>
                                    <RadioButton
                                        value={props.values.tipoMovimiento}
                                        status={props.values.tipoMovimiento === 'aporte' ? 'checked' : 'unchecked'}
                                        onPress={() => { props.setFieldValue('tipoMovimiento', 'aporte') }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 6 }}>
                                            Retiro
                                </Text>
                                    </View>
                                    <View style={{ paddingLeft: 12 }}>
                                        <RadioButton
                                            value={props.values.tipoMovimiento}
                                            status={props.values.tipoMovimiento === 'retiro' ? 'checked' : 'unchecked'}
                                            onPress={() => { props.setFieldValue('tipoMovimiento', 'retiro') }}
                                        />
                                    </View>

                                </View>
                            </View>


                            <Text style={[styles.text_footer, { marginTop: 35 }]}>
                                Forma de Pago
                    </Text>

                            <View style={{ paddingLeft: 60, paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', paddingLeft: 16, paddingTop: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 30 }}>
                                            Caja
                                </Text>
                                    </View>
                                    <RadioButton
                                        value={props.values.formaDePago}
                                        status={props.values.formaDePago === 'caja' ? 'checked' : 'unchecked'}
                                        onPress={() => { props.setFieldValue('formaDePago', 'caja') }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 6 }}>
                                            Banco
                                </Text>
                                    </View>
                                    <View style={{ paddingLeft: 12 }}>
                                        <RadioButton
                                            value={props.values.formaDePago}
                                            status={props.values.formaDePago === 'banco' ? 'checked' : 'unchecked'}
                                            onPress={() => { props.setFieldValue('formaDePago', 'banco') }}
                                        />
                                    </View>

                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', paddingTop: 15, width: '100%', height: 110 }}>
                                <Text style={[styles.text_footer, { marginTop: 25 }]}>
                                    Fecha
                        </Text>
                                {
                                    showData ?

                                        <Text
                                            style={[styles.text_footer, { marginTop: 25 }]}
                                        >
                                            {moment(fecha).format('DD-MM-YYYY')}
                                        </Text>
                                        :
                                        <Text
                                            style={[styles.text_footer, { marginTop: 25 }]}
                                        >
                                            {''}
                                        </Text>
                                }

                                <View style={{ justifyContent: 'center', paddingLeft: 45, paddingBottom: 19 }}>
                                    <TouchableOpacity onPress={showDatepicker}>
                                        <AntDesign name='calendar' size={45} color='#f4511e' />
                                    </TouchableOpacity>
                                </View>
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={props.values.fechaMovimiento}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={
                                            (fechaMovimiento, date) => {
                                                setShow(false);
                                                setShowData(true);
                                                setFecha(moment(date));
                                            }
                                        }
                                    />
                                )}
                            </View>

                            <Text style={[styles.text_footer, { marginTop: 5 }]}>
                                Moneda
                    </Text>
                            <View style={{ paddingLeft: 60, paddingTop: 10 }}>
                                <View style={{ flexDirection: 'row', paddingLeft: 16, paddingTop: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 6 }}>
                                            Pesos
                                </Text>
                                    </View>
                                    <View style={{ paddingLeft: 10 }}>
                                        <RadioButton
                                            value={props.values.moneda}
                                            status={props.values.moneda === 'pesos' ? 'checked' : 'unchecked'}
                                            onPress={() => { props.setFieldValue('moneda', 'pesos') }}
                                        />
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 16, color: 'white', paddingRight: 6 }}>
                                            Dólares
                                </Text>
                                    </View>
                                    <RadioButton
                                        value={props.values.moneda}
                                        status={props.values.moneda === 'dolares' ? 'checked' : 'unchecked'}
                                        onPress={() => { props.setFieldValue('moneda', 'dolares') }}
                                    />
                                </View>
                            </View>

                            <Text style={[styles.text_footer, { marginTop: 35 }]}>
                                Importe
                    </Text>
                            <View style={styles.action}>
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Monto del importe...'
                                    style={styles.textInput}
                                    value={props.values.importe}
                                    onChangeText={props.handleChange('importe')}
                                />

                            </View>

                            <Text style={[styles.text_footer, { marginTop: 35 }]}>
                                Motivo
                    </Text>
                            <View style={styles.action}>
                                <TextInput
                                    multiline={true}
                                    placeholder='Motivo del movimiento'
                                    style={[styles.textInput]}
                                    value={props.values.motivo}
                                    onChangeText={props.handleChange('motivo')}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 7 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <AntDesign name='down' size={35} color='white' />
                                </View>
                                <View style={{ alignItems: 'center', paddingTop: 3 }}>
                                    <AntDesign name='up' size={35} color='white' />
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => props.handleSubmit()}
                            >
                                <View style={styles.button}>
                                    <LinearGradient
                                        colors={['#5db8fe', '#39cff2']}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, { color: 'white' }]}>Agregar Movimiento</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>

            </TouchableWithoutFeedback>

            <TouchableOpacity
                onPress={() => deleteFunc()}
            >
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#5db8fe', '#39cff2']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: 'white' }]}>Eliminar Movimiento</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <View style={[styles.button, { paddingBottom: 20, paddingTop: 2 }]}>
                    <LinearGradient
                        colors={['#5db8fe', '#39cff2']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: 'white' }]}>Salir</Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        marginTop: 0,
        flex: 1,
        backgroundColor: '#0f0f0a'
    },
    contianer: {
        flex: 1,
        backgroundColor: '#000'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        width: 350
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 0
    },
    text_footer: {
        color: 'white',
        fontSize: 20,
        marginLeft: 15
    },
    textInput: {
        paddingLeft: 10,
        color: 'white'

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 5,
        width: 360,
        marginLeft: 15
    },
    signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 2
    },
})