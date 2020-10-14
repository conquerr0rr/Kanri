import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Button, Linking, date, Image } from 'react-native';
import Illustration from '../assets/svgs/illustration.svg';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import SlidingUpPanel from 'rn-sliding-up-panel';

const Home = () => {

    var currentDate = new Date();
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    console.log(day, month);

    Date.prototype.monthName = function () {
        return this.toUTCString().split(' ')[2]
    };
    Date.prototype.dayName = function () {
        return this.toUTCString().split(' ')[0]
    };
    var currentMonth = currentDate.monthName();
    var currentDay = currentDate.dayName();
    console.log(currentDay);

    return (
        <>
            <View style={styles.background}>
                {/* Welcome User Section */}
                <View style={styles.welcomeBack}>
                    <Text style={styles.welcomeText}>Welcome back,
                <Text style={styles.welcomeTextBold}> Abhijeet</Text>
                    </Text>
                </View>


                {/* Calendar Section */}
                <View style={styles.CalenderSection}>
                    {/* Left part  */}
                    <TouchableOpacity onPress={() => Linking.openURL('content://com.android.calendar/time/')}>
                        <Text style={styles.calendarTextBold}>Today <Icon name="calendar-alt" size={22} color="white" />
                        </Text>
                        <Text style={styles.calendarText}>{currentDay} {day} {currentMonth}  </Text>

                    </TouchableOpacity>
                    {/* Right part */}
                    <TouchableOpacity >

                        <View style={styles.circle}>
                            <Text style={styles.circleNumber}>4</Text>
                        </View>
                        <Text style={styles.calendarText}>Beginner</Text>

                    </TouchableOpacity>
                </View>

                {/* Main Content Section */}
                <ScrollView >
                    <View style={styles.MainContent}>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Text style={styles.MainHeading}>My Plans </Text>
                            <Text style={styles.subscriptText}>(14)</Text>
                        </View>
                        {/* <Button title='Show panel'  /> */}
                    </View>

                </ScrollView>
                <View style={styles.BottomBar}>
                    <TouchableOpacity style={styles.BarsettingsIcon} onPress={() => _panel.show()}>
                        <Icon name="bars" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addShape} hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}>
                        <Icon name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <SlidingUpPanel ref={c => _panel = c} friction={3} >
                <View style={styles.SettingsContainer}>
                    <View style={styles.UserProfile}>
                        <TouchableOpacity>
                            {/* <Icon style={styles.settingsIconUser} name="user-alt" size={50} color="white" /> */}
                            <Image
                                style={styles.settingsIconUser}
                                source={require('../assets/images/user-img.jpeg')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.welcomeTextBold}>   Abhijeet Gautam</Text>
                            <Text style={styles.calendarText}>     chikoo@gmail.com </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.multipleSettingsContainer}>
                        <Icon style={styles.settingsIcon} name="sun" size={30} color="white" />
                        <Text style={styles.settingsText}>Change Theme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.multipleSettingsContainer}>
                        <Icon style={styles.settingsIcon} name="question-circle" size={30} color="white" />
                        <Text style={styles.settingsText}>Help & Suggestions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.multipleSettingsContainer}>
                        <Icon style={styles.settingsIcon} name="info-circle" size={30} color="white" />
                        <Text style={styles.settingsText}>Take a tour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.multipleSettingsContainer}>
                        <IconMaterial style={styles.settingsIcon} name="star-circle" size={30} color="white" />
                        <Text style={styles.settingsText}>Rank and rewards</Text>
                    </TouchableOpacity>
                    <View style={styles.copyrightContainer}>
                        <Text style={styles.copyrightText}>Privacy Policy    .     Terms of Service</Text>
                    </View>
                    {/* <Button title='Hide' onPress={() => _panel.hide()} /> */}
                </View>
            </SlidingUpPanel>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        height: hp('100%'),
        backgroundColor: '#150B27',
        alignItems: 'center',
    },
    welcomeBack: {
        // flex: 1,
        height: hp('6%'),
        marginTop: StatusBar.currentHeight,
        // backgroundColor: 'red',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        color: 'white',
        fontSize: hp('2.5%'),
        fontFamily: 'Raleway-Light',
    },
    welcomeTextBold: {
        color: 'white',
        fontSize: hp('2.5%'),
        fontFamily: 'Raleway-SemiBold',
    },
    CalenderSection: {
        // flex: 1,
        height: hp('10%'),
        // backgroundColor: 'red',
        width: '80%',
        marginTop: hp('2%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#9884BB',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 0.5,
    },
    calendarTextBold: {
        color: 'white',
        fontSize: hp('2.6%'),
        fontFamily: 'Raleway-Bold',
    },
    calendarText: {
        color: '#9884BB',
        fontSize: hp('1.6%'),
        fontFamily: 'Raleway-Medium',
    },
    circle: {
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 100,
        alignSelf: 'center',
        height: 45,
        width: 45
    },
    circleNumber: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Raleway-SemiBold',
        fontSize: hp('2.6%'),
        letterSpacing: -2
    },
    // MAIN CONTENT SECTION
    MainContent: {
        // flex: 0.4,
        height: hp('60%'),
        // backgroundColor: 'red',
        width: wp('80%'),
        marginTop: hp('2%')
    },
    MainHeading: {
        color: 'white',
        fontSize: hp('4%'),
        fontFamily: 'Raleway-Medium',
    },
    subscriptText: {
        color: 'white',
        fontSize: hp('2%'),
        lineHeight: 50,
        fontFamily: 'Raleway-Medium',
    },
    BottomBar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1F1238',
        width: wp('100%'),
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BarsettingsIcon: {
        marginLeft: wp('5%'),
        marginTop: hp('3%'),
        // backgroundColor: 'red',
        height: hp('4%'),
        width: wp('8%'),
        alignItems: 'center'
    },
    addShape: {
        justifyContent: 'center',
        // alignSelf: 'center',
        width: wp('20%'),
        height: hp('10%'),
        alignItems: 'center',
        backgroundColor: '#332155',
        borderRadius: 1000,
        position: 'relative',
        right: wp('5%'),
        top: hp('-6%'),
        elevation: 5,
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#150B27'
    },
    SettingsContainer: {
        // height: hp('100%'),
        backgroundColor: '#1F1238',
        position: 'absolute',
        bottom: 0,
        width: '100%'
        // justifyContent: 'center'/
    },
    multipleSettingsContainer: {
        height: hp('8%'),
        backgroundColor: '#1F1238',
        // justifyContent: 'center',
        width: '100%',
        borderBottomColor: '#9884BB',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingsText: {
        color: 'white',
        fontSize: hp('2%'),
        fontFamily: 'Raleway-Regular',
        marginLeft: wp('5%')
    },
    settingsIcon: {
        marginLeft: wp('11%')
    },
    UserProfile: {
        height: hp('13%'),
        backgroundColor: '#1F1238',
        // justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#9884BB',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 0.5,
    },
    profileText: {
        color: 'white',
        fontSize: hp('2%'),
        fontFamily: 'Raleway-Regular',
    },

    settingsIconUser: {
        marginLeft: wp('7.5%'),
        height: hp('6%'),
        width: wp('12%'),
        borderRadius: 1000,
    },
    copyrightContainer: {
        height: hp('13%'),
        justifyContent: 'center',
        backgroundColor: '#1F1228',
    },
    copyrightText: {
        color: 'white',
        fontSize: hp('1.8%'),
        fontFamily: 'Raleway-Regular',
        textAlign: 'center'
    },
});

export default Home;