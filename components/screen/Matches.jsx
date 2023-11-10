import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import { search } from '../db/search';

function Matches({navigation,route}){
  // const {matches}=route.params||[]
  // console.warn(matches)

    const [data,setData]=React.useState("")
    const [isloading,setIsLoading]=React.useState(true)
    const [modalview,setModalView]=React.useState(false)
    const [alertValue,setAlertValue]=React.useState(false)
    const [modalcontent,setModalContent]=React.useState({})

    function knowMoreHandler(item){
      // console.warn(`more details ${item.id}`)
      setModalContent(item)
      setModalView(true)
    }

    async function removeMatchHandler(item){
      // console.warn(`remove match ${item.id}`)
      Alert.alert(`Are your sure you want to remove ${item.name} from your match?`, `Remove BIODATA #${item.id}`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => handlealert(item)},
      ])
    }

    async function handlealert(item){
      const new_result=data.filter((el,i)=>{
        return el.id!=item.id
      })
      setData(new_result)
      await AsyncStorage.setItem("Matches",JSON.stringify(new_result))
    }

    function renderMatches({item}){
      return(
        <View style={styles.box}>
            <View style={styles.innerbox}>
              <Text style={styles.boxtxt}>{item.name}</Text>
              <Text style={styles.boxtxt}>{item.age} year</Text>
            </View>

            <Image style={styles.img} source={{uri:item.image}}/>
            <Text style={styles.boxtxt}>Occupation: {item.occupation}</Text>
            <Text style={styles.boxtxt}>Salary: {item.salary}</Text>
            <Text style={styles.boxtxt}>Nationality: {item.nationality}</Text>
            <Text style={styles.boxtxt}>Place: {item.place}</Text>

            <View style={styles.button}>
              <TouchableOpacity onPress={()=>knowMoreHandler(item)}>
                <Text style={{color:"indianred",padding:5,textAlign:"center"}}>Click here to know more</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.button,{marginTop:5}]}>
                <TouchableOpacity onPress={()=>removeMatchHandler(item)}>
                  <Text style={{color:"indianred",padding:5,textAlign:"center"}}>Remove Match!</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={modalview} 
             transparent={true}
             animationType='fade'
            onRequestClose={()=>{setModalView(false)}}
            >
              <TouchableOpacity style={styles.modal} onPress={()=>setModalView(false)}>
                <Text style={[styles.boxtxt,{color:"indianred"}]}>BIO DATA #{modalcontent.id}</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>{modalcontent.name}</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>{modalcontent.age} year</Text>
                <Image style={styles.img} source={{uri:modalcontent.image}}/>
                <Text style={[styles.boxtxt,{color:"indianred"}]}>View more photos</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>Occupation: {modalcontent.occupation}</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>Salary: {modalcontent.salary}</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>Nationality: {modalcontent.nationality}</Text>
                <Text style={[styles.boxtxt,{color:"white"}]}>Place: {modalcontent.place}</Text>
                <Text style={[styles.boxtxt,{color:"indianred"}]}>View BIODATA</Text>   
              </TouchableOpacity>
            </Modal>
        </View>
      )
    }
    async function fetchdata(){
        try{
        // const url="https://bhumika-1803.github.io/data/data.json"
        // const res=await fetch(url)
        // const matches=await res.json()
        // setData(matches)
        let val=await AsyncStorage.getItem("Matches")
        val=JSON.parse(val)
        if(val!=null){
          console.log(val)
          setData(val)
          // setMatches(val)
        }
        setIsLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }

    React.useEffect(()=>{
        fetchdata()
    },[])

  return isloading?(<ActivityIndicator style={styles.indicator} animating={true} color="indianred"
  size="large"/>):(
    <View style={styles.body}>
        <Text style={styles.txt}>Get to know more about your matches!</Text>
        
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(key)=>key.id}
          renderItem={({item})=>renderMatches({item})}
        />
        <View>
          <TouchableOpacity onPress={()=>Alert.alert("Are you sure you want to buy subscription?","It costs INR 201 per month.",[
            {
              text:"Yes",
              onPress:()=>console.warn("Purchasing")
            },
            {
              text:"No",
              onPress:()=>console.warn("Not purchasing")
            }
          ])} style={{width:"90%",flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={styles.txt}>Buy</Text>
            <Text style={[styles.txt,{color:"gold",fontWeight:"900"}]}>GOLD</Text>
            <Text style={styles.txt}>subscription to chat :-)</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    backgroundColor:"rgba(0,0,0,0.6)",
    justifyContent:"center",
    height:"100%",
    alignItems:"center"
  },
  indicator:{
    height:"90%",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    // flex:1,
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  txt:{
    marginVertical:5,
    fontSize:27,
    fontFamily:"cursive",
    color:"grey",
  },
  list:{
    // borderWidth:1,
    width:"80%",
    paddingHorizontal:40,
  },
  box:{
    borderWidth:0.2,
    borderColor:"indianred",
    alignItems:"center",
    shadowColor:"indianred",
    elevation:5,
    paddingVertical:10,
    marginVertical:10,
  },
  boxtxt:{
    // color:"white",
    fontSize:16,
    textTransform:"capitalize",
    fontFamily:"serif"
  },
  img:{
    width:120,
    height:120,
    objectFit:"fill",
    borderRadius:100
    // aspectRatio:1,
  },
  button:{
    width:"70%",
    backgroundColor:"lightgrey",
    // backgroundColor:"black",
    borderRadius:10
  },
  innerbox:{
    width:"80%",
    flexWrap:"wrap",
    // maxWidth:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"lightgrey",
    marginVertical:5,
    paddingHorizontal:5,
    borderRadius:10,
    // borderWidth:1
  }
});

export default Matches;
