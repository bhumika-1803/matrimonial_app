import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


function Fun(props){
    // console.warn("*",props.msg)
  return (
    <View>
        <Text>Hey, {props.msg}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flex:1
  }
});

export default Fun;
