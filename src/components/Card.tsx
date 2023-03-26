import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { IconService, Subscription } from '../models/Sub';
import { SubsFormModal } from './SubsFormModal';

interface CardSubProps {
    icon: IconService,
    subInfo: Subscription
}

export const CardSub = (Props:CardSubProps) => {
    const { 
        icon: { nameIcon, color, type }, 
        subInfo: {
            id,
            name,
            price,
            membership,
            description,
            paymentDay,
            cycle,
        }
    } = Props
    const [showInfo, setShowInfo] = useState(false)
    const [showFormSubModal, setShowFormSubModal] = useState(false)

    
    return (
        <>
            <TouchableOpacity 
                onPress={() => setShowInfo(!showInfo)}
                onLongPress={() => setShowFormSubModal(true)}
                activeOpacity={0.8}
                style={[
                    style.container, 
                    showInfo && {
                        backgroundColor: color,
                    }
                ]}>
                <View style={[
                    style.header,
                    showInfo && style.showBorder, 
                    ]}>
                    <View style={style.service}>
                        <Icon
                            name={nameIcon}
                            type={type}
                            color={showInfo ? '#fff' : color}
                            size={40}
                        />
                        <Text style={[style.nameService, showInfo && {
                            color: '#fff'
                        }]}>
                            {
                                name
                            }
                        </Text>
                    </View>
                    <View style={style.paymentContent}>
                        <Text style={[style.price, showInfo && {
                            color: '#fff'
                        }]}>
                            $ {price}
                        </Text>
                        <Text style={[style.membership, showInfo && {
                            color: '#fff'
                        }]}>
                            {membership}
                        </Text>
                    </View>
                </View>
    
                {/* cuerpo de la tarjeta */}
    
                <View style={[
                    style.body,
                    showInfo && {display: 'flex'},
                ]}>
                    <View style={style.info}>
                            <Text style={style.textInfo}>
                                Nombre
                            </Text>
                            <Text style={[style.textInfo, style.textInfoValue]}>
                                {name}
                            </Text>
                    </View>
                        
                    {description && <View style={style.info}>
                            <Text style={style.textInfo}>
                                Descripcion    
                            </Text>
                            <Text style={[style.textInfo, style.textInfoValue]}>
                                {description}
                            </Text>
                    </View>}
                        
                    <View style={style.info}>
                        <Text style={style.textInfo}>
                            Fecha de pago
                        </Text>
                        <Text style={[style.textInfo, style.textInfoValue]}>
                            {
                                new Date(paymentDay).toLocaleDateString('es-ES')
                            }
                        </Text>
                    </View>
                    
                    <View style={style.info}>
                        <Text style={style.textInfo}>
                            Ciclo de pago    
                        </Text>
                        <Text style={[style.textInfo, style.textInfoValue]}>
                            {cycle}
                        </Text>
                    </View>
    
                   
                </View>
            </TouchableOpacity>
            <SubsFormModal
                showModal={showFormSubModal}
                setShowModal={setShowFormSubModal}
                infoSubAvailable={{
                    nameIcon,
                    color,
                    title: name,
                    type
                }}
                currentId={id}
            />
        </>
    )
}


const style = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#1f1e1e',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 6,

        
    },
    textInfo:{
        color: '#fff',
    },
    textInfoValue: {
        fontWeight: 'bold',
    },

    paymentContent: {
        width: 100,
        alignItems: 'flex-end',
    },

    /**
     * Estilos propios para cuando se muestra la informacion de la tarjeta
     */

    showBorder:{
        borderBottomColor: '#ffff',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 20,
    },

    /*******/

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    service:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        width: 100,
    },
    nameService:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff',

    },
    price:{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#404040',
    },
    membership:{
        fontSize: 12,
        color: '#909090',
        
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    body:{
        display: 'none',
    }

})
