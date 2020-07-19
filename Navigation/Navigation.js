import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Home_Screen from '../Component/Home_Screen';
import Sign_User from '../Component/Sign_User'
import Log_User from '../Component/Log_User'
import Home_Party from '../Component/Home_Party'
import Join_Party from '../Component/Join_Party'
import Create_Party from '../Component/Create_Party'
import Play_Game from '../Component/Play_Game'
import {View} from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator mode="modal"
      //screenOptions={{
      //  headerShown: false
      //}}
        initialRouteName="Party_Home"
      >
      <Stack.Screen
        name="Party_Home"
        component={Home_Screen}
        options={{headerShown: false ,transparentCard:false, cardStyle:{backgroundColor:'transparent' ,transitionConfig: () => ({ containerStyle: {
           }, 
          })}}}
      />
      <Stack.Screen
        name="Sign User"
        component={Sign_User}
        options={{headerShown:false,transparentCard:false, cardStyle:{backgroundColor:'transparent', transitionConfig: () => ({ containerStyle: {
           }, 
          })}}}
      />
      <Stack.Screen
      name="Log User"
      component={Log_User}
      options={{headerShown: false ,transparentCard:false, cardStyle:{backgroundColor:'transparent' ,transitionConfig: () => ({ containerStyle: {
      }, 
     })}}}
      />
      <Stack.Screen
      name="Home Party"
      component={Home_Party}
      options={{headerShown: false ,transparentCard:false, cardStyle:{backgroundColor:'transparent' ,transitionConfig: () => ({ containerStyle: {
      }, 
     })}}}
      />
      <Stack.Screen
      name="Join Party"
      component={Join_Party}
      options={{headerShown:false,transparentCard:false, cardStyle:{backgroundColor:'transparent', transitionConfig: () => ({ containerStyle: {
      }, 
        })}}}
      />
      <Stack.Screen
      name="Create Party"
      component={Create_Party}
      options={{headerShown:false,transparentCard:false, cardStyle:{backgroundColor:'transparent', transitionConfig: () => ({ containerStyle: {
      }, 
        })}}}
      />
      <Stack.Screen
      name="Play Game"
      component={Play_Game}
      options={{headerShown:false,transparentCard:false, cardStyle:{backgroundColor:'transparent', transitionConfig: () => ({ containerStyle: {
      }, 
        })}}}
      />
    
      </Stack.Navigator>
    );
  }

  export default MyStack
