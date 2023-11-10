import React from 'react';
import {
    Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function Touchableopacity(){
    const handletouch=()=>{
        console.log("oops touched")
        Alert.alert("title","msg: yo buddy!",[
            {
                text:"DO SMT",
                onPress:()=>console.warn("smt done")
            },
            {
                text:"cancel",
                onPress:()=>console.warn("canceled"),
                style:"cancel"
            },
            {
                text:"ok",
                onPress:()=>console.warn("okay")
            },
        ],
         {
            cancelable: true,
            onDismiss: () =>
              console.warn("outside clicked"),
          }
        )
    }
  return (
    <View style={styles.body}>
      <TouchableOpacity 
      style={styles.touch}
      onPress={()=>handletouch()}>
        <Text style={{fontSize:40,textAlign:"center"}}>TOUCH ME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  touch:{
    backgroundColor:"pink",
    width:300,
    borderRadius:20
  },
});

export default Touchableopacity;
