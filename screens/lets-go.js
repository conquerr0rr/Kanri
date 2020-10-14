import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Illustration from '../assets/svgs/illustration.svg';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const LetsGo = () => {
    return (
        <>
        <View style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.ManageText}>Manage your lifestyle</Text>
                <Text style={styles.ManageTextBold}>Anywhere</Text>
                </View>
                <Illustration />
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.submitText}>Lets Go</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
 
    textContainer: {
        // backgroundColor: 'red',
        marginTop: hp('15%')
    },
    ManageText: {
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'Raleway-ExtraLight',
        textAlign: 'center',
    },
    ManageTextBold: {
        color: 'white',
        fontSize: hp('3%'),
        fontFamily: 'Raleway-Bold',
        // textAlign: 'center',
    },
    submitBtn: {
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: 'white',
        width: wp('45 %'),
        paddingTop: '2%',
        paddingBottom: '3%',
        marginTop: hp('10%')
    },
    submitText: {
        fontFamily: 'Raleway-Regular',
        fontSize: hp('2.3%'),
        textAlign: 'center',
        color: 'white'
    },
});

export default LetsGo;