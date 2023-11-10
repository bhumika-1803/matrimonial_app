import {StyleSheet, View ,Text, TouchableOpacity,Image} from 'react-native';

export default function Home({navigation,msg}) {

  function login(){
    navigation.navigate("Login")
  }
  function signup(){
    navigation.navigate("Signup")
  }
  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Match made in heaven 💫</Text>
          <View>
            <Image 
                style ={styles.img} 
                source={{ uri : "https://mythologyandvaishbhat.files.wordpress.com/2020/10/57678146_2307209849338966_4192894116855545856_n.jpg?w=768"}} 
            /> 
          </View>

          <TouchableOpacity onPress={()=>signup()}>
            <Text style={styles.txt}>SIGN UP!</Text>
          </TouchableOpacity>
          <Text style={{    fontSize:32, fontFamily:"serif",color:"gold"}}>OR</Text>
          <TouchableOpacity onPress={()=>login()}>
            <Text style={styles.txt}>LOGIN!</Text>
          </TouchableOpacity>
          
          <View>
            <Image 
              style ={styles.img} 
              source={{ uri : "https://i.pinimg.com/originals/9b/fd/4a/9bfd4a28c8ec4f3e80ecfb12d3138910.jpg"}} 
            /> 
          </View>
          <Text style={styles.heading}>At Marry Me 💞</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'indianred',
    justifyContent:"center",
    alignItems:"center"
  },
  box:{
    width:"98%",
    height:"99%",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:0.01,
    shadowColor:"white",
    elevation:5,
    gap:10,
  },
  heading:{
    fontFamily:"cursive",
    color:"gold",
    fontSize:34,
    textTransform:"capitalize",
    borderWidth:0.01,
    shadowColor:"gold",
    elevation:15,
    borderRadius:10
  },
  txt:{
    color:"silver",
    borderWidth:0.01,
    shadowColor:"white",
    elevation:20,
    fontSize:36, 
    fontFamily:"serif"
  },
  img:{
    width: 370, 
    height:200,
    borderRadius:20,
  }
});

