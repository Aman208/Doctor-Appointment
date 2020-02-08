import React, { Component } from "react";
import { View, Text, ScrollView , TextInput ,StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemRecord from "../components/ItemRecord"


const RECORD = [
    {
      id: 1,
      name: "Mr. Helena",
      pri: true,
   
    },
    {
      id: 2,
      name: "Marie-Anne short",
      pri:false 
 
    }, ];

class Record extends Component {
  state = {
    currentIndex: 0
  };

  



  renderItemRecord = () => {
    return RECORD.map((item, i) => {
      return (
        <ItemRecord
          key = {i}
          id={item.id}
          name={item.name}
          pri={item.pri}
          
        />
      );
    });
  };


  render() {
    return (
      <View
        style={{
          flex: 1 ,
          backgroundColor:"#1c2c38",
          flexDirection : "column"
        }}
      >

             
        
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            
            {this.renderItemRecord()}
          </ScrollView>
          </View>
         
        
     
    );
  }
}


export default Record;
