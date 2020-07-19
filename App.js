import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './Navigation/Navigation'
import {View, Button,StyleSheet,Text,Image,ImageBackground} from 'react-native'


export default class App extends React.Component {
  render () {
    return(
    <View style={{ flex: 1, backgroundColor: 'transparent' ,marginTop:25}}>
      <ImageBackground source={require('./assets/WallPaper.png')} style={{flex:1 ,resizeMode : 'repeat'}} imageStyle={{resizeMode :'repeat',opacity:0.5}}>
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <NavigationContainer >
            <MyStack >
            </MyStack>
          </NavigationContainer>
        </View>
      </ImageBackground>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }});