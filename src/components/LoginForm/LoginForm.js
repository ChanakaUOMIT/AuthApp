import React, { Component } from 'react';
import { View,
        TextInput,
     } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import Input from '../common/Input';

class LoginForm extends Component {
    state={
        email:'',
        password:''
    };

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
                        placeholder="Enter ur Password"
                        label='Password'                                          
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;