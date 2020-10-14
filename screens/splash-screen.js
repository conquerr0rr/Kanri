import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Logo from '../assets/svgs/logo.svg';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
            console.log('hello');
        }, 1500);
    });
    return (
        <View style={styles.background}>
            <Logo style={styles.logo} width={300} />
        </View>
    )
};


const styles = StyleSheet.create({
    logo: {
        marginLeft: '8%',
        top: '-4%',
    },
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#150B27',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default Splash;