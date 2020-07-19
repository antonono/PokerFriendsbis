import React from 'react'
import {View,TextInput,Button,StyleSheet,TouchableOpacity,Text} from 'react-native'

class Home_Party extends React.Component {
    render() {
        return(
            <View></View>  
       );
        }
    }
       
       const styles = StyleSheet.create({
         container: {
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor:'transparent'
         },
         buttonContainer: {
           flex: 1,
           width:"40%",
           fontSize:46,
           fontWeight:'500',
           justifyContent:'center',
           color:"#fff"
         },
        textBouton:{
            fontSize:40,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            textAlignVertical:'center',
        },
        touchablestyle:{
            borderRadius:50,
            height: 100,
            marginTop: 10 ,
            backgroundColor:"green" ,
            justifyContent:"center"
        }
       });

export default Home_Party
    