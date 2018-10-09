//Import Library for making a components
import React from 'react';
import { Text, View } from 'react-native';

//Make Components
const Header = (props) => {
    //const { textStyle } = styles;

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.headerText} </Text>
        </View>
    );
};

const styles = {
    container:{
        //backgroundColor: 'red',
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    textStyle:{
        fontSize: 20,
    },
};

//Make a Component available to other parts of App
export  default Header;