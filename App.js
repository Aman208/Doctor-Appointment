import React from "react";
import { StyleSheet , View , Image , Text , } from 'react-native';
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
 
  createSwitchNavigator,
  createAppContainer,
  SafeAreaView 

} from "react-navigation";



import { createStackNavigator  } from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "@expo/vector-icons/Ionicons";
import StartUp from "./src/views/StartUp";
import Register from "./src/views/Register";
import Login from "./src/views/Login";
import Home from "./src/views/Home";
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import Category from './src/views/Category';
import Detail from "./src/views/Detail"
import FAQ from './src/views/FAQ';
import SlotPick from './src/views/SlotPick';
import Record from './src/views/Record';
import Profile from './src/views/Profile';

if (Platform.OS === "android") {
  // removes extra space at top of header on android
  SafeAreaView.setStatusBarHeight(15);
}

export default class App extends React.Component {
  render(){
      return (
             <AppContainer />
    
        
      );
  }
}





const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
      
        },
        
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  } ,
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.params.name,
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Home")}
            name="md-cart"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  } ,

  


  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: navigation.state.params.detailName,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Category")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },

  SlotPick: {
    screen: SlotPick,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: navigation.state.params.date,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Detail")}
            name="ios-skip-backward"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  Record: {
    screen: Record,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Health Record",
       
        headerLeft: null,
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Home")}
            name="ios-home"
            color="white"
            size={40}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  

 FAQ:{
  screen: FAQ,
  navigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: "white" ,
       
      },
      headerStyle: {
        backgroundColor: "#5BBC9D"
      },
      headerTitle: "FAQ" ,
      headerLeft: null,
      headerRight: (
        <Icon
          onPress={() => { navigation.navigate("Home")} }
          name="ios-close"
          color="white"
          size={50}
          style={{
            paddingRight: 10
          }}
        />
      ),
      gesturesEnabled: false
    };
  }

 } ,
 Profile:{
  screen: Profile ,
  navigationOptions: ({ navigation }) => {
    return {
      headerTitleStyle: {
        color: "white" ,
       
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: "#5BBC9D" ,
       
        
      },
      headerTitle: "Profile" ,
      headerLeft: null,
      headerRight: (
        <Icon
          onPress={() => { navigation.navigate("Home")} }
          name="ios-close"
          color="white"
          size={50}
          style={{
            paddingRight: 10
          }}
        />
      ),
      gesturesEnabled: false
    };
  }

 }

})
  

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: wp("80%"),
    drawerPosition: "left" ,
    contentComponent: CustomDrawerComponent ,
    headerMode : 'none'
 
  }
);


const AppSwitchNavigator = createSwitchNavigator({
 
  StartUp: {
    screen: StartUp
  },
  Register: {
    screen: Register
  },
  Login : {
    screen : Login
  },
  Home: {
    screen: HomeDrawNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
