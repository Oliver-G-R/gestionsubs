import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { IconService, Subscription } from '../models/Sub';

interface CardSubProps {
    icon: IconService,
    subInfo: Subscription
}

export const CardSub = (Props:CardSubProps) => {
    const { 
        icon: { nameIcon, color }, 
        subInfo: {
            id,
            name,
            price,
            membership,
            description,
            firstPayment,
            cycle,
        }
    } = Props
    const [showInfo, setShowInfo] = useState(false)
    


    return (
        <TouchableOpacity 
            onPress={() => setShowInfo(!showInfo)}
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
                        type="material-community"
                        color={showInfo ? '#fff' : '#404040'}
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
                <View>
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
                        <Text style={style.textInfo}>
                            {name}
                        </Text>
                </View>
                    
                <View style={style.info}>
                        <Text style={style.textInfo}>
                            Descripcion    
                        </Text>
                        <Text style={style.textInfo}>
                            {description}
                        </Text>
                </View>
                    
                <View style={style.info}>
                    <Text style={style.textInfo}>
                        Fecha de inicio    
                    </Text>
                    <Text style={style.textInfo}>
                        {
                            new Date(firstPayment).toLocaleDateString()
                        }
                    </Text>
                </View>

                <View style={style.info}>
                    <Text style={style.textInfo}>
                        Fecha de pago
                    </Text>
                    <Text style={style.textInfo}>
                        {
                            new Date(firstPayment).toLocaleDateString()
                        }
                    </Text>
                </View>
                
                <View style={style.info}>
                    <Text style={style.textInfo}>
                        Ciclo de pago    
                    </Text>
                    <Text style={style.textInfo}>
                        {cycle}
                    </Text>
                </View>

               
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#E9E9E9',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 10,
        
    },
    textInfo:{
        color: '#fff',
    },

    /**
     * Estilos propios para cuando se muestra la informacion de la tarjeta
     */

    showBorder:{
        borderBottomColor: '#909090',
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
        gap: 7,

    },
    nameService:{
        fontWeight: 'bold',
        fontSize: 17,
        color: '#404040',

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
