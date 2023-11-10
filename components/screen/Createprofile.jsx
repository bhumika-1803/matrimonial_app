import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Menu from '../Menu';
import DocumentPicker from "react-native-document-picker"
import {launchImageLibrary} from 'react-native-image-picker';
// // import * as ImagePicker from 'react-native-image-picker';

function Createprofile({navigation,route}){
    const {myName}=route.params||" "
    const [age,setAge]=React.useState("")
    const [gender,setGender]=React.useState("")
    const [salary,setSalary]=React.useState("")
    const [occupation,setOccupation]=React.useState("")
    const [place,setPlace]=React.useState("")
    const [radio,setRadio]=React.useState("1")
    const salaries = ["Less than 5LPA", "[5-8]LPA", "[8-10]LPA", "[10-15]LPA","[15-20]LPA","[20-25]LPA","[25-30]LPA","[30-35]LPA","[35-40]LPA","More than 40LPA"]
    const places = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
    const [biodata,setBioData]=React.useState("")
    const [image,setImage]=React.useState("https://cdn-icons-png.flaticon.com/512/3541/3541871.png")

 const pickImage = () => {
    let options = {
      // title: 'Select an image',
      storageOptions: {
        // skipBackup: true,
        path: 'image',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log("*",response)
        setImage(response.assets[0].uri);
      }
    });
 };

    async function handleFile(){
        try{
            console.warn("ok")
            const doc=await DocumentPicker.pickSingle({
              type:[DocumentPicker.types.allFiles]
                // type:[DocumentPicker.types.pdf,DocumentPicker.types.doc,DocumentPicker.types.docx],
            })
            console.warn(doc)
            setBioData(doc)
        }
        catch(err){
            if(DocumentPicker.isCancel(err)){
                console.log("Err",err)
            }
            else{
                console.log(err)
            }
        }
    }

    function handleRadio(selectedgender,radiono){
        setGender(selectedgender)
        setRadio(radiono)
    }
    const createProfileHandler=()=>{
        // console.warn(age,gender,salary,occupation,place)
        Alert.alert("Profile edited successfully!!")
        navigation.navigate("Profile",{myName,image,biodata})
    }
    const handleGoBack=()=>{
        navigation.goBack()
        // navigation.navigate("Login")
    }
  return (
    <ScrollView>
      <View style={styles.body1}>
          {/* <Text style={styles.txt1}>CREATE/EDIT YOUR AWESOME PROFILE HERE!</Text> */}
          <View style={styles.body2}>
              <Image source={{uri:image}} style={styles.img}/>
              <View>
                  <Text style={styles.iptxt}>Enter your age below</Text>
                  <TextInput style={styles.ip} placeholder="Please enter your age.."
                  value={age} onChangeText={(text)=>setAge(text)}/>

                  <Text style={styles.iptxt}>Enter your occupation below</Text>
                  <TextInput style={styles.ip} placeholder="Please enter your occupation.."
                  value={occupation} onChangeText={(text)=>setOccupation(text)}/>

                  <Text style={styles.iptxt}>Select your gender</Text>
                  <View style={styles.radioip}>
                      <TouchableOpacity style={styles.radioflex} onPress={()=>handleRadio("Male","1")}>
                          <View style={styles.round}></View>
                          <View style={[styles.innerround,{backgroundColor:radio=="1"?"indianred":"white"}]}></View>
                          <Text>Male</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.radioflex} onPress={()=>handleRadio("Female","2")}>
                          <View style={styles.round}></View>
                          <View style={[styles.innerround,{backgroundColor:radio=="2"?"indianred":"white"}]}></View>
                          <Text>Female</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.select}>
                      <SelectDropdown
                          data={salaries}
                          onSelect={(selectedItem, index) => {
                              setSalary(selectedItem)
                              // console.log(selectedItem, index)
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                              return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                              return item
                          }}
                          defaultButtonText='Select salary range'
                          search={true}
                          searchPlaceHolder="Search salary range"
                          searchPlaceHolderColor="indianred"
                      />
                  </View>
                  
                  <View style={styles.select}>
                      <SelectDropdown
                      data={places}
                      onSelect={(selectedItem,index)=>{
                          setPlace(selectedItem)
                      }}
                      rowTextForSelection={(item,index)=>{
                          return item
                      }}
                      buttonTextAfterSelection={(selectedItem,index)=>{
                          return selectedItem
                      }}
                      defaultButtonText='Select your place'
                      search={true}
                      searchPlaceHolder='Search your state'
                      searchPlaceHolderColor="indianred"
                      />
                  </View>
                  <TouchableOpacity onPress={pickImage}>
                      <View style={{flexDirection:"row"}}>
                        <Text style={styles.iptxt}>Please </Text>
                        <Text style={[styles.iptxt,{color:"indianred"}]}>attach </Text>
                        <Text style={styles.iptxt}>your Photo here.</Text>
                      </View>
                  </TouchableOpacity>
                  {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image" onPress={pickImage} />
                    {image.length>0 && <Image source={{uri:image}} style={{ width: 200, height: 200 }} />}
                  </View> */}
                  
                  <TouchableOpacity onPress={()=>handleFile()}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.iptxt}>Please </Text>
                        <Text style={[styles.iptxt,{color:"indianred"}]}>attach </Text>
                        <Text style={styles.iptxt}>your BIODATA here.</Text>
                      </View>
                  </TouchableOpacity>
              </View>

              <View style={styles.buttonbox}>
                  <View style={styles.button}>
                      <TouchableOpacity onPress={()=>createProfileHandler()}>
                          <Text style={styles.buttontxt}>View Profile!</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.button}>
                      <TouchableOpacity onPress={()=>handleGoBack()}>
                          <Text style={styles.buttontxt}>Logout!</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={{marginTop:20}}>
              <Menu/>
        </View>
      </View>    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body1:{
    alignItems:"center",
  },
  img:{
    width:"30%",
    height:undefined,
    aspectRatio:1,
    borderRadius:40,
  },
  body2:{
    width:"90%",
    padding:28,
    // height:"80%",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:0.1,
    shadowColor:"rosybrown",
    elevation:10
  },
  ip:{
    borderWidth:1,
    borderColor:"indianred",
    margin:5,
  },
  radioip:{
    // borderWidth:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    padding:5,
  },
  radioflex:{
    flexDirection:"row",
    alignItems:"center",
  },
  round:{
    height:20,
    width:20,
    backgroundColor:"black",
    borderRadius:100,
    // marginLeft:7,
},
innerround:{
    marginLeft:-18,
    marginRight:10,
    height:14,
    width:14,
    backgroundColor:"white",
    borderRadius:100,
},
txt1:{
    fontFamily:"monospace",
    textTransform:"capitalize",
    fontSize:18,
    color:"rosybrown"
},
iptxt:{
    fontFamily:"serif",
    fontSize:16,
    marginVertical:4
},
select:{
    borderWidth:1,
    borderColor:"indianred",
    marginVertical:8,
    borderRadius:20,
    alignItems:"center",
    padding:2
},
buttonbox:{
    flexDirection:"row",
    gap:10
},
button:{
    marginTop:10,
    backgroundColor:"indianred",
    padding:10,
    borderRadius:100
},
buttontxt:{
    fontSize:16,
    fontWeight:"bold",
    color:"silver"
}
});

export default Createprofile;


// // react-native-image-picker and react-native-fs
// import React, { useState } from 'react';
// import { Button, Image, View } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// // import * as ImagePicker from 'react-native-image-picker';

// const Createprofile = () => {
//  const [image, setImage] = useState("");

//  const pickImage = () => {
//     let options = {
//       // title: 'Select an image',
//       storageOptions: {
//         // skipBackup: true,
//         path: 'image',
//       },
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         console.log("*",response)
//         setImage(response.assets[0].uri);
//       }
//     });
//  };

//  return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image" onPress={pickImage} />
//       {image.length>0 && <Image source={{uri:image}} style={{ width: 200, height: 200 }} />}
//     </View>
//  );
// };

// export default Createprofile;








// import React, {useState} from 'react';
// import {View, Button, Image} from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function App() {
//  const [image, setImage] = useState(null);

//  const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//  };

//  return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="Pick an image from gallery" onPress={pickImage} />
//       {image && <Image source={{uri: image}} style={{width: 200, height: 200}} />}
//     </View>
//  );
// }
