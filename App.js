/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/header';
import LoginForm from './src/components/LoginForm/LoginForm';



export default class App extends Component {
  /*
  initializeFirebase(){
    const firebase = require("firebase");

    //Initialize Firebase
    var config = {
      apiKey: "AIzaSyAR2nAw45FIF04617h1opSkGkD8c9Yyxss",
      authDomain: "authentication-58fe9.firebaseapp.com",
      databaseURL: "https://authentication-58fe9.firebaseio.com",
      projectId: "authentication-58fe9",
      storageBucket: "authentication-58fe9.appspot.com",
      messagingSenderId: "968579373658"
    };
    firebase.initializeApp(config);

    //Initialization firestore
    const firestore=require("firebase/firestore");
    db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
  }*/

  componentWillMount(){
    //this.initializeFirebase();
    
    firebase.initializeApp({      
      apiKey: "AIzaSyAR2nAw45FIF04617h1opSkGkD8c9Yyxss",
      authDomain: "authentication-58fe9.firebaseapp.com",
      databaseURL: "https://authentication-58fe9.firebaseio.com",
      projectId: "authentication-58fe9",
      storageBucket: "authentication-58fe9.appspot.com",
      messagingSenderId: "968579373658"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


