import React, { Component } from "react";
import { View, Text, ProgressBarAndroid, ScrollView  , StyleSheet , Button} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";



const Datepick = [
  "25/11/2020",
  "26/11/2020",
  "27/11/2020",
  "28/11/2020",
  "29/11/2020",
];




class SlotPick extends Component {

 
  

  renderDate = () => {
    const {
       name,
        date
      } = this.props.navigation.state.params;

    return Datepick.map((item, i) => {

        console.log(name);
      
      return (
        <Text
          key={i}
         
          style={{
            fontSize: 18,
            color: "#F08C4F" ,
            paddingHorizontal: 10
          }}
        >
          {item} 
        </Text>
      );
    });
  };


  renderItemList = () => {
    

return ( <View style={styles.container}>
 <View
          style={{
          
            flexDirection: "row" , 
            
          }}
        >
           
    
     
          <View
            style={{
              flex: 4 ,
              marginLeft :10
            }}
          >
    <Text >nniiii </Text> 
    <ProgressBarAndroid style={styles.progress}styleAttr="Horizontal" 
      indeterminate={false}
    progress={0.3}/>
    </View>

   <View style={{
              flex: 1
            }}>
   <Button title=">>" /></View>

   </View>

  </View>)
  };



  render() {

  

    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderDate()}
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
            //   flexDirection: "column",
              
              justifyContent: "space-between"
            }}
          >
            {this.renderItemList()}
            {this.renderItemList()}
            {this.renderItemList()}
          </ScrollView>
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      padding: 10,
    },
    progress:{

        margin : 12 ,
        height: 20,
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5
    }
  });

export default SlotPick;








 

 
  
 
  
 
  
    
 
       
