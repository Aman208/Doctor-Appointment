import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  StyleSheet,
  Animated,
  TouchableOpacity ,
  Keyboard
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../components/Input";
import Button from "../components/Button";

class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      
      
     
        
    }

    this.onPressCompleteRegister = this.onPressCompleteRegister.bind(this);
}

  onPressCompleteRegister = () => {
    this.props.navigation.navigate("Home");
  };

  

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6"
        }}
      >
        <View
          style={{
            height: hp("18%"),
            justifyContent: "center",
            paddingHorizontal: hp("2.5%"),
            marginTop: 10
            // marginTop: Platform.OS == "android" ? hp("3.75%") : null
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: "400",
              // opacity: this.animatedTitleOpacity
              opacity: 1
            }}
          >
            Signup.
          </Text>
        </View>
        
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%"),
            marginBottom: Platform.OS == "android" ? hp("10%") : null,
            marginTop: 0
          }}
        >
          {/* form */}
          <Input label="Your name" placeholder="Enter your Full name" />
          <Input label="Your email address" placeholder="Email address" />
          <Input label="Your password" placeholder="Password" />
          <Text
            style={{
              fontWeight: "500",
              color: "gray"
            }}
          >
            Or easily{" "}
            <Text
              style={{
                color: "#F08C4F"
              }}
            >
              Connect with facebook
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: hp("2.5%") ,
            marginTop: 10
          }}
        >
          
            <View
              style={{
                flex: 1,
                // justifyContent: "flex-end",
                // paddingBottom: hp("5%")
              }}
            >
              <Button
                fullWidth
                onPress={this.onPressCompleteRegister}
                backgroundColor="#4f83cc"
                text="Complete registration"
              />

               <TouchableOpacity > 
                    <Text style={styles.extraText}
                      onPress={() => this.props.navigation.navigate("Login")
                    }> Go To Login Page </Text>
                </TouchableOpacity>

                
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
      marginTop:5
  }
});

export default Register;
