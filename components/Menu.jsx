import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


function Menu(){
  // to access navigation as Menu is not a screen..
  const navigation=useNavigation()
  const handleredirect=(to)=>{
    navigation.navigate(to)
  }
  return (
    <View>
      <View style={{borderWidth:1,borderColor:"grey",marginBottom:10}}></View>
      <View style={styles.body}>
        <TouchableOpacity onPress={()=>handleredirect("Profile")}>
          <Text style={styles.txt}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleredirect("Search")}> 
          <Text style={styles.txt}>SEARCH</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleredirect("Matches")}>
          <Text style={styles.txt}>MATCHES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleredirect("About")}>
          <Text style={styles.txt}>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleredirect("Contact")}>
          <Text style={styles.txt}>CONTACT</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderWidth:1,borderColor:"grey",marginTop:10}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    gap:10,
  },
  txt:{
    fontSize:16,
  }
});

export default Menu;
