import React from 'react';
import {
    Button,
    Image,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function Linknetflix(){
  return (
    <View style={styles.body}>
      <Text style={{fontSize:25,marginBottom:10}}>NETFLIX CARD</Text>
      <View style={styles.box}>
        <Image style={styles.img}
        source={{uri:"https://m.media-amazon.com/images/M/MV5BODFkMDRjMWQtNDllMC00NjMwLWFlYzQtMWY5YWFkM2Y1NzhlXkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_.jpg"}}/>
        <View>
            <Text style={styles.title}>Shaddi ME Jarur Ana</Text>
        </View>
        <View>
            <Text style={styles.content}
            >Satyendra and Aarti meet for an arranged marriage and fall in love. Things go downhill when she runs away on their wedding day to pursue her career.</Text>
        </View>
        <View style={{marginBottom:10}}>
            <Button onPress={()=>Linking.openURL("https://google.com")}
            title="WATCH NOW!"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    // justifyContent:"center",
    alignItems:"center",
    marginTop:30,
  },
  box:{
    width:250,
    borderWidth:1,
    alignItems:"center"
    // borderColor:"pink"
  },
  img:{
    width:"100%",
    height:undefined,
    aspectRatio:0.8
  },
  title:{
    fontSize:25,
    marginBottom:10
  },
  content:{
    fontSize:19,
    marginBottom:10,
    marginHorizontal:10,
    color:"#999"
  }
});

export default Linknetflix;
