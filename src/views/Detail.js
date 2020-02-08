import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback ,
  TouchableHighlight ,
  StyleSheet,
  TextInput ,
  
} from "react-native";
import Textarea from 'react-native-textarea';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from "../components/Button";
import Modal from "react-native-modal";




const { width } = Dimensions.get("window");

class Detail extends Component {

  state = {
    date: new Date('2020-06-12T14:42:42') ,
    mode: 'date',
    show: false,
    flag : 0 ,
    isModalVisible: false,
  }

  onPressSubmit = ()=> {

    fetch('http://192.168.43.95:3000/api/appointment/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: "this is sample des" ,
        patientId :"124" ,
        doctorId: "112" ,
        appointmentTime: "12345645",
        isapproved:0
      }),
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });

  }



  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {

    
    const {
      detailName,
      detailImageUri,
      detailPriceOne,
      detailexp
    } = this.props.navigation.state.params;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor:"#1a1d50",
        }}
      >
        <ScrollView>
          {/* image */}
          <View
            style={{
              width: width,
              height: hp("45%"),
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Image
              source={detailImageUri}
              style={{
                resizeMode: "stretch",
                width: 130,
                height: 130,
                borderRadius: 63,
                borderWidth: 4,
                // borderColor: "white",

                marginBottom:10,
                alignSelf:'center',
                

              }}
            />
           
           
            <Text  style={{
                fontSize:15,
                fontWeight: "bold",
              color: "white"}}
            
            > {detailName}
            </Text> 

            <Text  style={{
                fontSize:12,
              color:"white" }}
            
            > Exp : {detailexp}
            </Text> 
            <Text  style={{
                fontSize:12,
              color:"white" }}
            
            > Other Detail
            </Text> 
      
            <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={() => this.setState({flag:1})}> Book Appointment </Text>
                </TouchableOpacity>
          

          </View>
         

       
          {this.state.flag ?  <View>
            {/* upper */}
            <View
              style={{
                
                marginHorizontal: 15,
                marginVertical: 5,
                alignItems:"center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5BBC9D"
                }}
              >
                Description
              </Text>
              <View style={styles.container}>
  <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={this.onChange}
    defaultValue={this.state.text}
    maxLength={120}
    placeholder={' Description '}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
</View>
                
             
            </View>

            {/* Adreess .....  */}
            <View
              style={{
               
                marginHorizontal: 15,
                marginVertical: 5 ,
                alignItems:"center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#5BBC9D"
                }}
              >
                Date Pick
              </Text>
              
                <TouchableOpacity
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                   
                    width: wp("82%"),
                    alignItems:"center"
                  }}
                  
                >
                  <View
                    style={{
                     
                      alignItems:"center"
                    }}
                  >
                     {!this.state.show ? <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        width: wp("42%"),
                        height:30,
                        textAlign:"center",
                        backgroundColor: 'red',
                        borderRadius: 15,
                       

                      }}
                      onPress={()=> this.setState({show:!this.state.show})}
                    >
                     Select Date
                    </Text> : <Text
                      style={{
                        fontSize: 14,
                        color: "white"
                      }}
                      onPress={()=> this.setState({show:!this.state.show})}
                     
                      > {this.state.date.toDateString()}</Text> } 
                    
                  </View>

                
                  
                  
        
        
        { this.state.show && <DateTimePicker value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
     

            
                </TouchableOpacity>
              
            </View>

            <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}  onPress={() => { this._toggleModal()
          }}> Submit </Text>
                </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalText}> 
            Description 
          </Text>
          <Text style={styles.modalDes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s and scrambled it to make a type specimen book.
            It has survived not only five centuries.
           </Text>
          
           <Text style={styles.modalText}>Date Selected</Text>
   <Text style={styles.modalDes}>
       Sat 26 Jan 2020 
  </Text>
         <View
         style={{
           flexDirection:"row", 
           justifyContent:"center" ,
           
         }}>
            <TouchableOpacity style={styles.buttonModal} onPress={this.onPressSubmit}>
              <Text style={{color:"white"}} > Confirm </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonModal} onPress={() => this._toggleModal()}>
              <Text style={{color:"white"}} > Hide </Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
    
            
                </View>
           
          </View> : null} 
           
           

         <Text>

              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}
              {"\n"}

         </Text>

        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  inputBox: {
      width: wp("94%"),
       height : 150 ,
      backgroundColor: '#eeeeee', 
      borderRadius: 25,
     backgroundColor :"#122344",
      paddingHorizontal: 16,
      fontSize: 14,
      color: '#002f6c',
      marginVertical: 10
  },
  button: {
      width: wp("92%"),
      backgroundColor: '#4ac2ae',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 12 
      
     
  },
  buttonModal: {
    width: wp("32%"),
    backgroundColor: '#4ac2ae',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12 ,
    alignItems:"center" ,
    marginHorizontal:20

   
},
modal :{

  alignItems:'flex-start',   
  backgroundColor : "#ffffff",   
  height: 400 ,  
  width: '85%',  
  borderRadius:20,  
  borderWidth: 1,  
  borderColor: '#fff',  
  marginLeft:20
},
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
    borderRadius : 20 ,
    borderWidth :1,
    width:wp("88%")
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
  } ,
  modalText:{
      fontSize: 18,
      fontWeight: '400',
      color: '#4ac2ae',
      textAlign: 'center',
      margin :8 ,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      
  } ,
  modalDes:{
    fontSize: 14,
    fontWeight: '200',
    color: 'black',
   textAlign:"left",
    margin :6,

    
}
});

export default Detail;
