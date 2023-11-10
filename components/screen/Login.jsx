import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box'

function Login({navigation}){
  const [username,setUsername]=React.useState("")
  const [password,setPassword]=React.useState("")
  const [user,setUser]=React.useState({})
  const [check,isCheck]=React.useState(false)

  async function handlestorage(){
    try{
      let value = await AsyncStorage.getItem('User');
      value=JSON.parse(value)
      console.log(value)
      if (value !== null) {
            // console.warn(value)
            setUser(value)
            if(username!=value.username || password!=value.password){
              console.warn(password,value.password)
              // console.warn("Wrong Credentials!")
            }
            else{
              navigation.navigate("Createprofile",{myName:`${username}`})
            }
      }
      else{
        Alert.alert("No user found in Database. Please signup first!")
        navigation.navigate("Signup")
        return
      }
    }
    catch(err){
      console.warn(err)
    }
  }
  function submitHandler(){
    if(!username || !password){
      console.warn("Enter all details please.")
    }
    else{
      handlestorage(user)
    // navigation.navigate("Createprofile",{myName:`${username}`})
    }
  }

  return (
    <View style={styles.body}>
        <Text style={styles.txt1}>LOGIN HERE!</Text>
        <Text style={styles.txt2}>Contact us anytime at letsmarryy@gmail.com</Text>
        <View style={styles.ipbox}>
            <Text style={styles.iptext}>Enter Name</Text>
            <TextInput style={styles.ip}
            required
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type name here..'
            value={username}
            onChangeText={(txt)=>setUsername(txt)}/>

            <Text style={styles.iptext}>Enter Password</Text>
            <TextInput style={styles.ip}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Type password here..'
            value={password}
            onChangeText={(txt)=>setPassword(txt)}/>
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
              <Text style={styles.txt4}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    marginVertical:50,
    marginHorizontal:20,
  },
  txt1:{
    fontSize:30,
    marginBottom:10,
    fontFamily:"monospace",
    fontWeight:"bold",
    color:"skyblue",
  },
  txt2:{
    fontSize:20,
    fontFamily:"cursive",
    marginBottom:25,
    // color:"skyblue",
  },
  ipbox:{
    // borderWidth:1,
  },
  iptext:{
    marginHorizontal:10,
    fontFamily:"monospace",
    fontSize:25,
    marginBottom:5,
    // fontWeight:"bold",
    // color:"royalblue",
  },
  ip:{
    borderWidth:2,
    marginHorizontal:10,
    marginBottom:10,
    fontSize:16,
    // borderColor:"grey",
  },
  tc:{
    flexDirection:"row",
    gap:10,
    marginLeft:10,
    // borderWidth:1,
    marginTop:20,
    marginBottom:45,
  },
  txt3:{
    fontSize:16,
  },
  button1:{
    borderWidth:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"skyblue",
    // backgroundColor:"rgb(135,206,265)",
    padding:5,
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

export default Login;
