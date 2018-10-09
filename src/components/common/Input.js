import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>{

    const { input, labelstyle, container }= styles;

    return(
        <View style={container}>
            <Text style={labelstyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={input}
                value={value}
                onChangeText={onChangeText}
                //style={{ height:35, width: 300}}
            />
        </View>
    );
};

const styles={
    container:{
        height:50,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },

    input:{
        color:'#000',
        paddingRight:5,
        paddingLeft:20,
        fontSize:18,
        lineHeight:23,
        flex:2,
        // height:40,
        // width:300

    },

    labelstyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1,

    },
}

export default Input;
