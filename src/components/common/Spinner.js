import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size}) => {
    return(
        <View style={styles.Spinner}>
            <ActivityIndicator size={ size || 'large'} />
        </View>
    )
}

const styles={
    Spinner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner };