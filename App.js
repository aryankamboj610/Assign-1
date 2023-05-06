import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Task from './screens/Task';
import Home from './screens/Home';
import Setting from './screens/Setting';
// import AddToCard from './screens/AddToCard';
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
});  

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: Home,  
          navigationOptions:{  
              tabBarLabel:'Calendar',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-calendar'}/>  
                  </View>),  
          }  
      },  
      Task: { screen: Task,  
          navigationOptions:{  
              tabBarLabel:'Notes',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-book'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },  
      Image: { screen: Setting,  
          navigationOptions:{  
              tabBarLabel:'Settings',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'}/>  
                  </View>),  
              activeColor:   '#f0edf6',  
              inactiveColor: '#226557',  
              barStyle: { backgroundColor: 'black' },  
          }  
      },    
  },  
  {  
    initialRouteName: "Home",  
    activeColor:   '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: 'black' },  
  },  
);  

export default createAppContainer(TabNavigator)