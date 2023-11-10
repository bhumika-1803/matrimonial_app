import React from 'react';
import {
    Image,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';


export function Images(){
  return (
    <ScrollView style={styles.body}>
      <Text>Images are shown..</Text>
      <Image style={styles.img}
    //   fadeDuration={500}
      source={require("../assets/txt.png")}/>
      <Image style={styles.img}
            fadeDuration={500}
      source={{uri:"http://2.bp.blogspot.com/-Wlrr-XCt9xk/SoJUhsRzk3I/AAAAAAAABFk/Yxz2bqI9bgI/s1600/bollywoodheaven_ja07.jpg"}}/>
          <Image style={styles.img}
      source={require("../assets/txt.png")}/>
      <Image style={styles.img}
      source={{uri:"http://2.bp.blogspot.com/-Wlrr-XCt9xk/SoJUhsRzk3I/AAAAAAAABFk/Yxz2bqI9bgI/s1600/bollywoodheaven_ja07.jpg"}}/>
            <Image style={styles.img}
      source={require("../assets/txt.png")}/>
      <Image style={styles.img}
      source={{uri:"http://2.bp.blogspot.com/-Wlrr-XCt9xk/SoJUhsRzk3I/AAAAAAAABFk/Yxz2bqI9bgI/s1600/bollywoodheaven_ja07.jpg"}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
//   body:{
//     height:600,
//     width:400,
//     borderColor:"teal",
//     borderWidth:1,
//   },
  img:{
    height:250,
    width:400,
    objectFit:"scale-down",
  }
});

