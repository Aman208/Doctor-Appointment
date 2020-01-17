import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";

class Home extends Component {
  render() {

    
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView scrollEnabled>
          <HomeCategory
            imageUri={require("../../assets/kidney.jpg")}
            titleFirst="Kidney"
            titleSecond="Doctor"
            subTitle="18 Doctors Available"
            screenProps="Super"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/Heart.jpg")}
            titleFirst="Heart"
            titleSecond="Doctor"
            subTitle="18 Doctors Available"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/Eye.jpg")}
            titleFirst="Eye"
            titleSecond="Doctor"
            subTitle="10 Doctors Available"
            {...this.props}
          />
           <HomeCategory
            imageUri={require("../../assets/doctor-dentist.jpg")}
            titleFirst="Dentist"
            titleSecond="Doctor"
            subTitle="6 Doctors Available"
            {...this.props}
          />
           <HomeCategory
            imageUri={require("../../assets/healthcheck.jpg")}
            titleFirst="General Physician"
            titleSecond="Doctor"
            subTitle="45 Doctors Available"
            {...this.props}
          />
           <HomeCategory
            imageUri={require("../../assets/Skin.png")}
            titleFirst="Skin"
            titleSecond="Doctor"
            subTitle="09 Doctors Available"
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
