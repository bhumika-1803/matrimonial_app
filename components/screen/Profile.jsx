import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import Menu from '../Menu';


function Profile({navigation,route}){
    const {myName}=route.params || " "
    const {image}=route.params || "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
    const {biodata}=route.params || " "
    const [modalview,setModalView]=React.useState(false)
    // const [image,setImage]=React.useState("https://cdn-icons-png.flaticon.com/512/3541/3541871.png")
    const [modalcontent,setModalContent]=React.useState(undefined)

    function handleModal(){
      setModalContent(biodata)
      setModalView(true)
    }

    const handlegoback= async()=>{
        try {
            await AsyncStorage.removeItem("User");
            navigation.navigate("Login")
        }
        catch(err) {
            console.warn(err)
        }
    }

    const handleprofile=async ()=>{
      let value=await AsyncStorage.getItem("User")
      // value=JSON.parse(value)
      // console.log(value)
      // setImage(value.image)
      navigation.navigate("Createprofile")
  }

  return (
    <View style={styles.body}>
      <View>
        <Image 
        resizeMode='contain'
        style={styles.img} source={{uri:image}}/>
      </View>
      
      <View>
        <View style={{flexDirection:"row",justifyContent:"center"}}>
          <Text style={[styles.txt1,styles.txt2]}>YAY! </Text>
          { myName?.length?
          <Text style={[styles.txt1]}>{myName[0]?.toUpperCase()+myName.slice(1)} 💕</Text>
          :""}
          </View>
        <Text style={[styles.txt1,styles.txt2]}>Congoo! You are one step closer to finding your ideal match. 👩🏻‍❤️‍👨🏻</Text>
      </View>

      <TouchableOpacity onPress={handleModal}>
        <Text style={styles.txt3}>View your BIODATA.</Text>
        <Modal visible={modalview} 
          transparent={true}
          animationType='slide'
          onRequestClose={()=>{setModalView(false)}}>
          <TouchableOpacity style={styles.modal} onPress={()=>setModalView(false)}>
            <Image style={{height:100,width:100}} source={{uri:modalcontent}}/>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
      
      <View style={{flexDirection:"row",gap:20}}>
        <Button title="LOGOUT NOW" 
        onPress={()=>handlegoback()}/>
        < Button title="EDIT PROFILE"
        onPress={()=>handleprofile()}/>
      </View>

      <View>
        <Menu/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center",
    borderRadius:40,
    // borderWidth:2,
    // borderColor:"red",
  },
  img:{
    width:"70%",
    height:undefined,
    aspectRatio:1,
    borderRadius:40,
  },
  txt1:{
    color:"indianred",
    fontSize:30,
    fontFamily:"cursive",
    textShadowColor:"red",
    textShadowOffset:{width:2,height:2},
    textShadowRadius:10,
    textAlign:"center",
  },
  txt2:{
    // color:"hotpink",
    color:"palevioletred",
    marginHorizontal:5,
    textShadowColor:"red",
    textShadowOffset:{width:1,height:1},
    textShadowRadius:3
  },
  txt3:{
    fontSize:18,
    textTransform:"capitalize",
    color:"grey",
  }
});

export default Profile;
