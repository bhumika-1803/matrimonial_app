import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import CheckBox from 'react-native-check-box'
import Menu from '../Menu';

function Contact({navigation}){
  const [username,setUsername]=React.useState("")
  const [email,setEmail]=React.useState("")
  const [phoneno,setPhoneNo]=React.useState("")
  const [message,setMessage]=React.useState("")
  const [check,isCheck]=React.useState(false)

  function submitHandler(){
    if(!username && !email && !phoneno && !message){
      Alert.alert("Kindly fill all the fields!!")
    }
    else{
      Alert.alert(`Thank you ${username} for contacting with us`,"Out team will shortly look at your message")
      navigation.navigate("Profile",{myName:`${username}`})
    }
  }

  return (
    <View style={styles.body}>
        <Text style={styles.txt1}>Contact Us HERE!</Text>
        <Text style={styles.txt2}>You an reach us anytime via</Text>
        <Text style={[styles.txt2,{marginBottom:20}]}> letsmarry@gmail.com</Text>
        <View style={styles.ipbox}>
            <Text style={styles.iptext}>Enter your Name</Text>
            <TextInput style={styles.ip}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='demo'
            value={username}
            onChangeText={(txt)=>setUsername(txt)}/>

            <Text style={styles.iptext}>Enter your Email</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='demo@gmail.com'
            value={email}
            onChangeText={(txt)=>setEmail(txt)}/>

            <Text style={styles.iptext}>Enter your mobile</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='+919999999999'
            value={phoneno}
            onChangeText={(txt)=>setPhoneNo(txt)}/>

          <Text style={styles.iptext}>How can we help you?</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type your message here..'
            numberOfLines={4}
            multiline={true}
            value={message}
            onChangeText={(txt)=>setMessage(txt)}/>
        </View>

        <View style={styles.tc}>
            <CheckBox
            checkBoxColor="royalblue"
            isChecked={check}
            onClick={()=>isCheck(!check)}
            />
            <Text style={styles.txt3}>I have read and agreed with the TC.</Text>
        </View>
        <View style={[styles.button1,{backgroundColor:check?"royalblue":"skyblue"}]}>
            <TouchableOpacity
               disabled={!check}
               onPress={()=>submitHandler()}>
              <Text style={[styles.txt4,{color:check?"white":"gray"}]}>Contact Us</Text>
            </TouchableOpacity>
        </View>
      <View style={{marginTop:25}}>
            <Menu/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    marginHorizontal:20,
  },
  txt1:{
    marginVertical:10,
    fontSize:25,
    fontFamily:"monospace",
    fontWeight:"bold",
    color:"skyblue",
  },
  txt2:{
    fontSize:25,
    fontFamily:"cursive",
    lineHeight:25
  },
  iptext:{
    // marginHorizontal:10,
    fontFamily:"monospace",
    fontSize:20,
    marginBottom:5,
  },
  ip:{
    borderWidth:1,
    marginHorizontal:5,
    marginBottom:10,
    fontSize:16,
  },
  tc:{
    flexDirection:"row",
    gap:10,
    marginLeft:5,
    marginTop:10,
    marginBottom:10,
  },
  txt3:{
    fontSize:16,
  },
  button1:{
    borderWidth:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderColor:"grey",
  },
  txt4:{
    // color:"white",
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"serif"
  }
});

export default Contact;
