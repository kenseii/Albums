/* eslint-disable no-unused-vars */
import React, { PropTypes, Component } from 'react';
import { Text, StyleSheet, View,StatusBar } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyles } = styles;


    return (<View style={viewStyles}>
        <StatusBar hidden={true} />
        <Text style={textStyle}>{props.headerText}</Text></View>);
    };

const styles = {
    viewStyles:{
        backgroundColor:'#ececec',
        alignItems:'center',
        justifyContent:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    textStyle: {
        fontSize: 25,

    }
};


export default Header;
