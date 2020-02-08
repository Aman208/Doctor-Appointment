import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Input = ({ label, placeholder, value }) => {
  return (
    <View
      style={{
        height: wp("20%"),
        marginBottom: 8
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "white"
        }}
      >
        {label}
      </Text>

      <TouchableOpacity
        style={[
          {
            flex: 1,
            paddingBottom: 5,
            justifyContent: "flex-end"
          },
          label == undefined
            ? {
                justifyContent: "flex-end"
              }
            : null
        ]}
      >
        <TextInput
          style={
            {
              height: wp("12%"),
              fontSize: 15,
              fontWeight: "300",
              paddingVertical: 10,
              paddingLeft: 20,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 25 ,
              backgroundColor:"#ffffff"
            }
          }
          value={value}
          placeholder={placeholder}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
