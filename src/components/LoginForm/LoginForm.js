import React, { Component } from 'react';
import { View,
        TextInput,
        Text,
     } from 'react-native';
import firebase from 'firebase';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import Input from '../common/Input';

class LoginForm extends Component {
    state={
        email:'',
        password:'',
        error:''
    };

    onButtonPress(){
        this.setState({ error : ''});
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch( () =>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(()=>{
                this.setState({ error: 'Authentication Failed.'});
            });
        });
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input  
                        placeholder="Enter ur Email"
                        label='Email'                                          
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />                    
                </CardSection>
            
                <CardSection >
                    <Input  
                        secureTextEntry
                        placeholder="Enter your Password"
                        label='Password'                                          
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorText:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

export default LoginForm;