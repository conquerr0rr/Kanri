import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Logo from '../assets/svgs/logo.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Login = () => {
    return (
        <>
            <View style={styles.background}>
                <Logo style={styles.logo} width={180} height={120} />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeHeading}>Welcome!</Text>
                    <Text style={styles.welcomeText}>Lorem Ipsum dolor sit amet, conseteur sadipcsing elitr.</Text>
                </View>

                <View style={styles.loginContainer}>
                    <Text style={styles.loginHeading}>Please login to your account.</Text>
                    <TextInput placeholder={'Email'} placeholderTextColor={'grey'} style={styles.inputField}></TextInput>
                    <TextInput placeholder={'Password'} placeholderTextColor={'grey'} style={styles.inputField}></TextInput>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </View>
            </View>
            <View style={styles.whiteBackground}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 0.88,
        backgroundColor: '#150B27',
        alignItems: 'center',
        fontFamily: 'Rockwell',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    logo: {
        marginTop: hp('10%'),
    },
    welcomeContainer: {
        // backgroundColor: 'red',
        marginTop: hp('12%'),
        width: wp('60%')
    },
    welcomeHeading: {
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
    },
    welcomeText: {
        color: 'white',
        fontSize: hp('2%'),
        fontFamily: 'Raleway-Light',
        textAlign: 'center',
        marginTop: '4%'
    },
    loginContainer: {
        marginTop: hp('16%'),
        width: wp('70%'),
    },
    loginHeading: {
        fontSize: hp('2%'),
        fontFamily: 'Raleway-Bold',
        color: 'white',
        marginBottom: hp('4%'),
        textAlign: 'center',

    },
    inputField: {
        borderBottomColor: 'grey',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        fontFamily: 'Raleway-Light',
    },
    forgotText: {
        color: 'grey',
        fontFamily: 'Raleway-Light',
        textAlign: 'center',
        marginTop: hp('1.5%')
    },
    whiteBackground: {
        flex: 0.12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtn: {
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: 'black',
        width: wp('50%'),
        padding: '3%'
    },
    submitText: {
        fontFamily: 'Raleway-Medium',
        fontSize: hp('2.3%'),
        textAlign: 'center'
    },
});

export default Login;