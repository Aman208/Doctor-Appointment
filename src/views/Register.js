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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
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

  onPressCompleteRegister =  () => {


    fetch('http://192.168.43.95:3000/api/patient/register', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: this.state.username,
    email: this.state.email,
    password : this.state.password ,
    dob : Date.now() ,
    gender : "male" ,
    locality : "xdc" ,
    city:"dhik" ,
    zip:"1244" ,
    patientId :"124"
  }),
}).then( this.props.navigation.navigate("Home"))
.catch((error) => {
  console.error(error);
});




    
  };

  onPressLoginRedirect = () => {
     
    this.props.navigation.navigate("Login");
  }

  

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:"#1c2c38" ,
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
                backgroundColor="#4ac2ae"
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
        width: wp("92%") ,
        height : 50 ,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: wp("92%") ,
        backgroundColor: '#4ac2ae',
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
