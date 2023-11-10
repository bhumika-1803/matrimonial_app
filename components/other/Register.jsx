import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Main } from './Main';


function Register(){
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text>Drawer</Text>
        <Image style={styles.logo} source={{uri:"https://images.tv9hindi.com/wp-content/uploads/2022/01/shaadi-final.jpg"}}/>
      </View>

      <Main/>

      <View style={styles.footer}>
        <Text style={styles.footerText}>COPYRIGHTS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    // height:100vh,
  },
  header:{
    flex:0.1,
    flexDirection:"row",
    gap:10,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"teal",
    paddingBottom:5,
  },
  logo:{
    height:60,
    width:60,
    borderRadius:100,
  },
  footer:{
    flex:0.05,
    direction:"row-end",
    alignItems:"center",
    height:"10",
    backgroundColor:"teal",
  },
  footerText:{
    fontSize:20,
    color:"white",
    padding:2
  },
});

export default Register;
