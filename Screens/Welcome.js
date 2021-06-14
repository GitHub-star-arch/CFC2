import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component {

    constructor(){
        super();
        this.state={
            Email: '',
            Name: '',
            Username: '',
            Password: '',
        }
    }

    addDB=()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password);
        db.collection('users').add({
            Email: this.state.Email,
            Name: this.state.Name,
            Username: this.state.Username,
            Password: this.state.Password,
        });
    }

    logIn=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
        .then((response)=>{alert("Thank you for Helping") ,this.props.navigation.navigate('AppTabNavigator')})
        .catch(function (error) {
        alert(error.message)    
        });
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={(name)=>{this.setState({Name: name,})}} style={{borderWidth:3,}} placeholder="Name" />
                <TextInput onChangeText={(email)=>{this.setState({Email: email,})}} style={{borderWidth:3,}} placeholder="Email" />
                <TextInput onChangeText={(un)=>{this.setState({Username: un,})}} style={{borderWidth:3,}} placeholder="UserName" />
                <TextInput onChangeText={(pw)=>{this.setState({Password: pw,})}} style={{borderWidth:3,}} placeholder="Password" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppTabNavigator'); this.addDB();}} ><Text>Sign In</Text></TouchableOpacity>
                <TextInput onChangeText={(email)=>{this.setState({Email: email,})}} style={{borderWidth:3,}} placeholder="Email" />
                <TextInput onChangeText={(pw)=>{this.setState({Password: pw,})}} style={{borderWidth:3,}} placeholder="Password" />
                <TouchableOpacity onPress={()=>{this.logIn()}} ><Text>Log In</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppTabNavigator')}}><Text>.</Text></TouchableOpacity>
            </View>
        );
      }

}