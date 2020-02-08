import React, { Component } from "react";
import { View, Text, ScrollView , TextInput ,StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";







class Category extends Component {
  state = {
    currentIndex: 0 ,
    doctorlist:[{
      _id: 112 ,
      name : "Dr. Vivek" ,
      speciality : "Eye" ,
      city : "Jsr"


    }]
  };

  componentDidMount(){

    // fetch('http://192.168.43.95:3000/api/doctor', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // }).then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({doctorlist : responseJson.data});
    // })
    // .catch((error) => {
    //   console.error(error);
    // });



  }



  renderItemList_Dress = () => {
    return this.state.doctorlist.map((item, i) => {
      return (
       
 
  
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: require("../../assets/doctor/6.jpg") ,
              detailPriceOne: item.city,
              detailexp: item.speciality 
            })
          }
          key={item._id}
          imageUri={require("../../assets/doctor/6.jpg")}
          name={item.name}
          priceOne={item.city}
          exp={item.speciality }
        />
     
      );
    });
  };

  

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Dress();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Shoes();
    }
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

             <View
            style={{
              height : 60,
              width : null ,
              flexDirection : "row"
            }}>


              <TextInput style={styles.inputBox}
                
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Search"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
               
                />
                 
              <Icon 
              style={{flex:1 ,alignItems: 'center' ,justifyContent: "flex-end"}}
              name="ios-search" color="white" size={40} />

             

               


        </View>
        
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            
            {this.renderItemList()}
          </ScrollView>
          </View>
        
     
    );
  }
}



const styles = StyleSheet.create({
 
  inputBox: {
      
      height : 40 ,
      flex :6,
      backgroundColor: '#eeeeee', 
      borderRadius: 15,
      paddingHorizontal: 16,
      fontSize: 14,
      color: '#002f6c',
      marginVertical: 10 ,
      marginHorizontal: 6
  },
  
  
  
});

export default Category;
