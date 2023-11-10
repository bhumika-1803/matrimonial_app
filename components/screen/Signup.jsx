import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box'

function Signup({navigation}){
  const [username,setUsername]=React.useState("")
  const [password,setPassword]=React.useState("")
  const [confirmpassword,setConfirmPassword]=React.useState("")
  const [phoneno,setPhoneNo]=React.useState("")
  const [user,setUser]=React.useState({})
  const [check,isCheck]=React.useState(false)

  async function handlestorage(user){
    try{
      // console.log(user)
      await AsyncStorage.removeItem("User");
      await AsyncStorage.removeItem("Matches")
      await AsyncStorage.setItem("User",JSON.stringify(user));
      // console.log(user)
      navigation.navigate("Login")
    }
    catch(err){
      console.warn(err)
    }
  }

  function submitHandler(){
    if(!username || !password || !confirmpassword || !phoneno){
      console.warn("Enter all details please.")
    }
    else if(password!=confirmpassword){
      console.warn("Password does not match!")
    }
    else{
      setUser({
        username,password,confirmpassword,phoneno
      })
      handlestorage(user)
    }
  }

  return (
    <View style={styles.body}>
      <ScrollView>
      <Text style={styles.txt1}>Signup HERE!</Text>
        <Text style={styles.txt2}>Contact us anytime at letsmarryy@gmail.com</Text>
        <View style={styles.ipbox}>
            <Text style={styles.iptext}>Enter Name</Text>
            <TextInput style={styles.ip}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type your name here..'
            value={username}
            onChangeText={(txt)=>setUsername(txt)}/>

            <Text style={styles.iptext}>Enter Phone Number</Text>
            <TextInput style={styles.ip}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type your mobile number here..'
            value={phoneno}
            onChangeText={(txt)=>setPhoneNo(txt)}/>

            <Text style={styles.iptext}>Create Password</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type your password here..'
            value={password}
            onChangeText={(txt)=>setPassword(txt)}/>

            <Text style={styles.iptext}>Confirm Password</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Re-type your password here..'
            value={confirmpassword}
            onChangeText={(txt)=>setConfirmPassword(txt)}/>
        </View>

        <View style={styles.tc}>
            <CheckBox
            checkBoxColor="royalblue"
            isChecked={check}
            onClick={()=>isCheck(!check)}
            />
            <Text style={styles.txt3}>I have read and understood all TC.</Text>
        </View>
        <View style={(!check)?(styles.button1):([styles.button1,styles.button2])}>
            <TouchableOpacity
               disabled={!check}
               onPress={()=>submitHandler()}>
              <Text style={styles.txt4}>Signup</Text>
            </TouchableOpacity>
        </View>
        <Text style={{marginVertical:15,fontSize:16,textAlign:"center"}}>Already have an account?</Text>
        <TouchableOpacity style={styles.button1}
          onPress={()=>submitHandler()}>
          <Text style={styles.txt4}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    // marginVertical:50,
    marginHorizontal:20,
  },
  txt1:{
    fontSize:25,
    marginVertical:5,
    fontFamily:"monospace",
    fontWeight:"bold",
    color:"skyblue",
  },
  txt2:{
    fontSize:20,
    fontFamily:"cursive",
    marginBottom:20,
    // color:"skyblue",
  },
  iptext:{
    marginHorizontal:10,
    fontFamily:"monospace",
    fontSize:20,
    marginBottom:5,
    // fontWeight:"bold",
    // color:"royalblue",
  },
  ip:{
    borderWidth:2,
    marginHorizontal:10,
    marginBottom:5,
    fontSize:16,
    // borderColor:"grey",
  },
  tc:{
    flexDirection:"row",
    gap:10,
    marginLeft:25,
    // borderWidth:1,
    marginTop:20,
    marginBottom:10,
  },
  txt3:{
    fontSize:16,
  },
  button1:{
    width:"90%",
    marginLeft:25,
    borderRadius:5,
    borderWidth:1,
    // flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"skyblue",
    // backgroundColor:"rgb(135,206,265)",
    // padding:5,
    borderColor:"grey",
    // maxWidth:70
  },
  button2:{
    backgroundColor:"royalblue"
  },
  txt4:{
    color:"white",
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"serif"
  }
});

export default Signup;
