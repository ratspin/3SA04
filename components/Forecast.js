
import React from 'react';
import { Text,View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
        <View >
            <Text >"" </Text>
            <Text >"" </Text>
            <Text style={styles.innerText2}>{props.main}</Text>
            <Text style={styles.innerText}>{props.description}</Text>
            <Text style={styles.innerText}>{props.temp} °C</Text>
        </View>
        <View >
            <Text >"" </Text>
            <Text >"" </Text>
            <Text style={styles.innerText3}>Wind speed : {props.wind} m/s</Text>
            <Text style={styles.innerText3}>Temperature Min{props.tempMin}°C</Text>
            <Text style={styles.innerText3}>Temperature Max{props.tempMax}°C</Text>
        </View>
        </View>
    );
   }

   
   const styles = StyleSheet.create({
    innerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23,
        // paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    innerText2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
        // paddingBottom: 15,
        textShadowOffset: {width: 2,height: 2},
        textShadowRadius: 10,
        textShadowColor:'black',
    },
    innerText3:{
        fontSize: 20,
        textAlign:'center',
    },

   });
 