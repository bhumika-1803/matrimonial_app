import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import React from 'react';

export const Main=()=>{
    const [name,setName]=React.useState("")
    const [isTrue,setIsTrue]=React.useState("0")
    const [gender,setGender]=React.useState("")
    const [password,setPassword]=React.useState("")

    function submitHandler(){
        console.warn("name",name,password,"!")
        setName("")
        setPassword("")
        // setIsTrue(!isTrue)
    }
    return(
      <View style={styles.main}>
        <View>
            <Text style={styles.mainText}>Register Now!</Text>
            <TextInput value={name} 
            style={styles.ip}
            placeholder="Enter Name here..." 
            onChangeText={(text)=>setName(text)}/>

            <TextInput value={password} 
            secureTextEntry={true}
            style={styles.ip}
            placeholder="Enter Password here..." 
            onChangeText={(text)=>setPassword(text)}/>

            <View style={styles.radioip}>
                <View style={styles.radioflex}>
                    <View style={styles.round}  onPress={()=>console.warn("1")}>
                        {(isTrue==="0")?(<Text>1</Text>):(<Text>2</Text>)}
                    </View>
                    <View style={styles.innerround}></View>
                    <Text>Male</Text>
                </View>
                <View style={styles.radioflex} onPress={()=>setIsTrue("1")}>
                    <View style={styles.round}>
                        {isTrue=="2"?(<View></View>):null}
                    </View>
                    <View style={styles.innerround}></View>
                    <Text>Female</Text>
                </View>
            </View>
        </View>
        <Text>select tag</Text>
        <View>
          <Button title="Submit" onPress={()=>submitHandler()}/>
        </View>
      </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        fontSize:20,
      },
      mainText:{
        fontSize:40,
        marginBottom:10
      },
      ip:{
        borderColor:"teal",
        borderWidth:1,
        marginBottom:10,
      },
      radioip:{
        borderColor:"teal",
        borderWidth:1,
        // flex:0.3,
        flexDirection:"row",
        padding:5,
      },
      radioflex:{
        flex:1,
        flexDirection:"row",
        // justifyContent:"space-evenly",
        // gap:10,
        alignItems:"center",
      },
      round:{
        height:10,
        width:10,
        backgroundColor:"black",
        borderRadius:100,
        marginLeft:7,
    },
    innerround:{
        marginLeft:-7,
        marginRight:10,
        height:5,
        width:5,
        backgroundColor:"white",
        borderRadius:100,
    },
})
