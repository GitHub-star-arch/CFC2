import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import db from '../config';

export default class DonateScreen extends React.Component {

    constructor(){
        super();
        this.state={
            Email: '',
            Amount:'',
            Note:'',
        }
    }

    updateDB=()=>{
        db.collection('Gods').add({
            Email: this.state.Email,
            Amount: this.state.Amount,
            Note: this.state.Note,
        });
    }

    render() {
        return (
            <View>
                <Text>
                    Donate
                </Text>
                <TextInput onChangeText={(email)=>{this.setState({Email: email,})}} style={{borderWidth:3,}} placeholder="Email" />
                <TextInput onChangeText={(amount)=>{this.setState({Amount: amount,})}} style={{borderWidth:3,}} placeholder="Amount" />
                <TextInput onChangeText={(note)=>{this.setState({Note: note,})}} style={{borderWidth:3,}} placeholder="Note" />
                <TouchableOpacity onPress={this.updateDB}>
                    <Text>
                        Finish Goodwill
                    </Text>
                </TouchableOpacity>
            </View>
        );
      }

}