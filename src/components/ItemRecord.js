import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity  , StyleSheet , } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
class ItemRecord extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0 ,
      private : null
    };
  }

 componentWillMount =() => {
  // let {pri} = this.props;
  this.setState({private : this.props.pri});
}


  render() {
    const { id, name, pri  , key } = this.props;


   


    return (
      <TouchableOpacity activeOpacity={0.8}   >
        <View
         
          style={{
            width: wp("94%"),
            marginHorizontal: 10,
            marginTop: 10 ,
            borderWidth : 2 ,
            padding :10 ,
            borderColor : "#ffffff" ,
            flexDirection: "column",
            borderRadius:20
          }}
        >


          <View
            style={{
              width: wp("88%"),
              height: wp("20%"),
              marginBottom: 10 ,
              flexDirection: "row",
            }}
          >
           
    {/* ||||||||||||||||||||||||||||||-------------------------------/\\\\\\\\\\\\\\\ */}
            <Text
           style={styles.textHeader}
            >
              Doctor{"\n"}{name}
            </Text>
            
              <Text
                style={styles.textHeader}
              >
                DoctorId{"\n"}
                 {id}
              </Text>
              <Icon onPress={ () => this.setState({private : !this.state.private})}
                name= {this.state.private ? "md-lock" :"md-unlock"}
                color= {this.state.private ? "#00ff00" :"white"} 
                size={30}
                
              />
              </View>

              {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\///////////////////////////// */}


       <View
       style={{
        width: wp("72%"),
        justifyContent : "center",
        marginBottom: 7 ,
       
      }} >

        <View
        style={{
          width: wp("92%"),
          height:wp("12%") ,
          marginBottom: 5,
          justifyContent : "center",
          flexDirection: "row",
          
        }}
        >

        <View onPress={() => {this.setState({currentIndex:1})}} style={{  marginHorizontal:20} }>

          <Text onPress={() => {this.setState({currentIndex:1})}} 
          style={this.state.currentIndex===1
             ? styles.textSelectorClick : styles.textSelector}> Record 1
             </Text>

          </View>

          <View  style={{ marginHorizontal:20}}>
          <Text onPress={() => {this.setState({currentIndex:2})}}  style={this.state.currentIndex===2
             ? styles.textSelectorClick : styles.textSelector}> Record 2</Text>
          </View>

        </View>

        <View
        style={{
          width: wp("92%"),
          height:wp("12%") ,
          marginBottom: 5,
          justifyContent : "center",
          flexDirection: "row",
          
          
        }}
        >
          <View style={{  
   
              marginHorizontal:20
            }
          }>
          <Text onPress={() => {
            this.setState({currentIndex:3})
           
           
          }}   style={this.state.currentIndex===3
            ? styles.textSelectorClick : styles.textSelector}> Record 3</Text>
          </View>
          <View  style={
            { marginHorizontal:20}}>
          <Text onPress={() => {this.setState({currentIndex:4})}}  style={this.state.currentIndex===4
             ? styles.textSelectorClick : styles.textSelector}> Record 4</Text>
          </View>
        </View>

  {this.state.currentIndex  ? <View
  style={{
    width: wp("92%"),
    margin: 5,
    justifyContent:"center"
   
  }}
  >
        <Text style={styles.textDescription}>
       Records : {this.state.currentIndex} ,ifhfhqiwhfqfqwfigfoig
        </Text>
</View>
 :null }




       </View>

        
         
          
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
 
textHeader: {
      
  fontSize: 15,
  color: "#ffffff",
  fontWeight: "bold",
  marginHorizontal : 5,
  justifyContent: "center",
  alignItems: 'center' ,
  flex:3
      
  },

  textSelector : {
     
    color: "#ffffff",
    fontSize: 14,
    padding :10
    
   

  } ,
  textSelectorClick : {
     
    color: "black",
    fontSize: 14,
  
    borderWidth : 2 ,
    borderColor : "#63CBA7",
    borderRadius : 12,
    padding :10,
    backgroundColor :"#4ac2ae"

   
  } ,

  textDescription : {

   color:"#ffffff"
     
  }
  
  
  
});






export default ItemRecord;
