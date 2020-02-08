import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

class ItemList extends Component {
  render() {
    const { imageUri, name, priceOne, exp , onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: wp("94%"),
            marginHorizontal: 10,
            marginTop: 10 ,
            borderWidth : 3 ,
            borderColor : "#1a1d50" ,
            borderRadius : 23,
            
          }}
        >


          <View
            style={{
              width: wp("92%"),
              height: wp("40%"),
              marginBottom: 10 ,
              flexDirection: "row",
             
            }}
          >
            <View
            style={{
             margin : 10 ,
              flex: 1,
             
              width : null
            }}>
            <Image
              source={imageUri}
              style={{
                borderRadius: 330/ 2 ,
               resizeMode: "stretch",
                height: wp("37%"),
                width : wp("37%")
               
               
              }}
            />
            </View>
        
          <View
            style={{
            
              flex: 1,
              margin : 10 ,
              width : null
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#ffffff",
                fontWeight: "bold"
              }}
            >
              {name}
            </Text>
            <View
              style={{
                
                alignItems:"flex-start",
                paddingTop: 5
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                DoctorId : {priceOne}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Exp: {exp} Years
              </Text>
              </View>
            </View>
          </View>
          
        </View>
        </TouchableOpacity>
      
    );
  }
}






export default ItemList;
