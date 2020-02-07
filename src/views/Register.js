import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  StyleSheet,
  Animated,
  TouchableOpacity ,
  TextInput
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Input from "../components/Input";
import Button from "../components/Button";

class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password: '', 
      username : ''
     
        
    }

    this.onPressCompleteRegister = this.onPressCompleteRegister.bind(this);
    this.onPressLoginRedirect = this.onPressLoginRedirect.bind(this);
}

  onPressCompleteRegister = () => {
    this.props.navigation.navigate("Home");
  };

  onPressLoginRedirect = () => {
     
    this.props.navigation.navigate("Login");
  }

  

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:"#153c69" ,
          flexDirection:"column"
        }}
      >
        <View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: 10 ,
           
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "400",
              // opacity: this.animatedTitleOpacity
              opacity: 1,
              color : "#ffffff"
            }}
          >
            Signup.
          </Text>
        </View>
        
        <View
          style={{
           
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: 0
          }}
        >
          {/* form */}
          <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="UserName"
                placeholderTextColor = "#002f6c"
                // selectionColor="#fff"
                onSubmitEditing={()=> this.email.focus()}
                />

         <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                // selectionColor="#fff"
                keyboardType="email-address"
                ref={(input) => this.email = input}
                onSubmitEditing={()=> this.password.focus()}/>

          <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
         
         
        
          
            <View
              style={{
                flex: 1,
                // justifyContent: "flex-end",
                // paddingBottom: hp("5%")
                marginTop:20
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressCompleteRegister}
                backgroundColor="#4f83cc"
                text="Complete registration"
              />

              <Text
                
                onPress={this.onPressLoginRedirect}
                style={styles.extraText}
                
              > Go To Login </Text>

                
            </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  extraText:{
      fontSize: 20,
      fontWeight: '300',
      color: '#4f83cc',
      textAlign: 'center',
      marginTop:15
  } ,
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
    } 


});

export default Register;
