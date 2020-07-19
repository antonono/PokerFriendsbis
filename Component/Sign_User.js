import React from 'react'
import {View,TextInput,Button,StyleSheet,TouchableOpacity,Text} from 'react-native'


class Sign_User extends React.Component {
  state = { username: '', password: '',name :'',surname:'',mail:'' }

  onChangeText = (key, val) => {
    this.setState({ [key]: val})
  }
putUser() {
  fetch('http://15.236.119.209:3000/users/new/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
  },
  credentials: 'same-origin',
  body: JSON.stringify({
    username: this.state.username,
    mail: this.state.mail,
    password : this.state.password,
    name : this.state.name,
    surname:this.state.surname,
  })
})
          .then((response) => response.json())
          .then((responseJson) => {
             console.log(responseJson);
             // this.setState({
             //    data: responseJson
             // })
          })
          .catch((error) => {
             console.error(error);
          });
        }
    render() {
        return(
          <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.textBouton}>Username</Text>
            <TextInput
            placeholder='Username'
            onChangeText={val => this.onChangeText('username', val)}
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textBouton}>Password</Text>
            <TextInput
            placeholder='Password'
            onChangeText={val => this.onChangeText('password', val)}
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textBouton}>Email</Text>
            <TextInput
            placeholder='Mail'
            onChangeText={val => this.onChangeText('mail', val)}
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textBouton}>Name</Text>
            <TextInput
            placeholder='Name'
            onChangeText={val => this.onChangeText('name', val)}
            style={styles.input}
          />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textBouton}>Surname</Text>
            <TextInput
            placeholder='Surname'
            onChangeText={val => this.onChangeText('surname', val)}
            style={styles.input}
          />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touchablestyle} onPress={()=>{this.putUser()}}>
                  <Text style={styles.textBouton}>Valider</Text>
              </TouchableOpacity>
          </View>
      </View> 
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
         inputContainer: {
          flex: 1,
          flexDirection:'row',
          width:"40%",
          fontSize:46,
          fontWeight:'500',
          justifyContent:'center',
          alignItems:'center',
          color:"#fff"
        },
        textBouton:{
            fontSize:25,
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

export default Sign_User
    