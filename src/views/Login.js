import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '' 
            
        }

        this.saveData = this.saveData.bind(this);
    }

    saveData =  ()=>{
        const {email,password} = this.state;

        
        let loginDetails={
            email: email,
            password: password
        }

        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response) => response.json())
        // .then((responseJson) => {
  
        //   console.log(responseJson);
  
        // })
        // .catch((error) =>{
        //   console.error(error);
        // });
           AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.props.navigation.navigate("Home");
            
        }
      
          


 
    

    render() {
        return(
            <View style={styles.container}>

          <View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: 20
            
          }}
        >
          <Text
            style={{
              fontSize: 70,
              fontWeight: "400",
              opacity: 1,
              color : "white"
            }}
          >
            Login.
          </Text>
        </View>

                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}> LOGIN </Text>
                </TouchableOpacity>

                <TouchableOpacity > 
                    <Text style={styles.extraText} onPress={() => this.props.navigation.navigate("Register")
                    }> Does Not Account </Text>
                </TouchableOpacity>

                <TouchableOpacity > 
                    <Text style={styles.extraText} onPress={() => this.saveData}> Forgat Password</Text>
                </TouchableOpacity>


            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#153c69" ,
        flex :1
    },
    inputBox: {
        width: 300,
        height : 50 ,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    } ,
    extraText:{
        fontSize: 20,
        fontWeight: '300',
        color: '#4f83cc',
        textAlign: 'center',
        margin :8
    }
});