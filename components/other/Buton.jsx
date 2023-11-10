import React from 'react';
import {
    Alert,
    Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function Buton(){
    const handleclick=()=>{
        Alert.alert("oops")
    }
  return (
    <View style={styles.body}>
        <Text>NOT REALLY A BUTTON</Text>
        <Button title="Actual button" 
        onPress={()=>handleclick()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"red",
  }
});

export default Buton;
