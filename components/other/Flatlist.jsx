import React from 'react';
import {
    FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export function Flatlist(){
    const users=[
        {
            id:1,
            name:"Monty"
        },
        {
            id:2,
            name:"Shanty"
        },
        {
            id:3,
            name:"Cool boi"
        },
        {
            id:4,
            name:"Ponty"
        },
        {
            id:5,
            name:"Chanty"
        },
        {
            id:6,
            name:"Fool boi"
        }
    ]
  return (
    <View>

      <View style={styles.body}>
      {/* <Text>MALES ARE LISTED BELOW</Text> */}
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted
            keyExtractor={(element)=>{
                return element.id
            }}
            data={users}
            renderItem={({item})=>{
            return <Text style={styles.txt}>{item.name}</Text>
            }}
        />
      </View>

      <View>
        <FlatList
        numColumns="2"
        keyExtractor={(element)=>{
            return element.id
        }}
        data={users}
        renderItem={({item})=>{
        return <Text style={styles.txt}>{item.name}</Text>
        }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    // flex:1,
    flexDirection:"row"
  },
  txt:{
    fontSize:40,
  }
});