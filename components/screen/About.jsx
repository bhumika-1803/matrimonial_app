import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import Menu from '../Menu';

function About(){
  return (
    <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.txt1}>BHUMIKA SAKLANI</Text>
          <Text style={styles.txt2}>I am a Full Stack Developer</Text>
        </View>

        <Image style={styles.img} source={{uri:"https://easydrawingguides.com/wp-content/uploads/2022/08/hand-covering-face-11.png"}}/>
        
        <View style={styles.about}>
          <Text style={styles.txt3}>ABOUT ME</Text>
          <Text style={styles.txt4}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum ducimus corrupti vero ad! Ea itaque exercitationem magni. Laudantium eveniet nesciunt vero corrupti animi maiores odio voluptas incidunt ex aspernatur.</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.txt1}>FOLLOW ME ON SOCIAL NETWORK</Text>
          <View style={styles.iconbox}>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/")}>
              <Image style={styles.icon} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL("https://web.whatsapp.com/")}>
              <Image style={styles.icon} source={{uri:"https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL("https://github.com/bhumika-1803")}>
              <Image style={styles.icon} source={{uri:"https://cdn-icons-png.flaticon.com/512/25/25231.png"}}/>
            </TouchableOpacity>
          </View>
        </View>
      <View style={{marginTop:20}}>
            <Menu/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    alignItems:"center"
  },
  heading:{
    marginVertical:20,
  },
  txt1:{
    color:"royalblue",
    // color:"indianred",
    fontFamily:"monospace",
    fontSize:20,
    fontWeight:"800",
    textAlign:"center"
  },
  txt2:{
    margin:5,
    fontSize:16,
    textAlign:"center"
  },
  img:{
    width:"40%",
    height:undefined,
    aspectRatio:1,
    borderRadius:50,
    borderWidth:1,
    borderColor:"black",
    marginVertical:10,
  },
  about:{
    width:"100%",
    alignItems:"center",
    backgroundColor:"royalblue",
    backgroundColor:"indianred",
    marginVertical:20,
    padding:30
  },
  txt3:{
    color:"white",
    fontFamily:"serif",
    fontSize:20,
    marginBottom:10,
  },
  txt4:{
    textAlign:"left",
    color:"ghostwhite",
    fontSize:15,
    lineHeight:20
  },
  footer:{
    marginVertical:10
  },
  iconbox:{
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  icon:{
    width:"100%",
    height:50,
    aspectRatio:1
  }
});

export default About;
