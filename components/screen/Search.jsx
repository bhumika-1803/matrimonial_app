import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator
} from 'react-native';
import {search} from "../db/search"

function Search(){

    const [topfive,setTopFive]=React.useState("")
    const [result,setResult]=React.useState("")
    const [matches,setMatches]=React.useState([])
    const [isloading,setIsLoading]=React.useState(true)

    function handleMatchClick(item){
      setMatches([...matches,item])
      console.warn(`match click ${item.id}`)
      // console.log("*",matches)
    }

    function getsearches(){
        // const response=fetch("")
        setTopFive(search.slice(0,5))
        setResult(search)
        setIsLoading(false)

    }
    React.useEffect(()=>{
        getsearches()
    },[])

    function showSearches({item,s}){
        // console.warn("*",s)
        return(
            <View style={s}>
                <View style={styles.box1}>
                    <Text style={styles.boxtxt}>BIO DATA</Text>
                    <Text style={styles.boxtxt}>{item.id<10?`#0${item.id}`:`#${item.id}`}</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img} source={{uri:item.image}}/>
                    <View style={styles.box3}>
                        <Text style={styles.boxtxt}>Name: {item.name}</Text>
                        <Text style={styles.boxtxt}>Age: {item.age}</Text>
                        <Text style={styles.boxtxt}>Place: {item.place}</Text>
                        <Text style={styles.boxtxt}>Work: {item.occupation}</Text>
                    </View>
                    <View style={styles.boxbutton}>
                        <TouchableOpacity onPress={()=>handleMatchClick(item)}> 
                            <Text style={styles.boxbuttontxt}>LETS MATCH!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
  return isloading?(<ActivityIndicator style={styles.indicator} animating={true} color="indianred"
  size="large"/>)
    :
    (<View style={styles.body}>
        <View style={styles.iptxt}>
            <TextInput placeholder=' Search by name here..' type="text"/>
            <TouchableOpacity onPress={()=>console.warn("search click")}> 
                <Image style={styles.icon} source={{uri:"https://image.pngaaa.com/742/5444742-middle.png"}}/>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.txt}>TOP 5 PICKS FOR YOU!!</Text>
            <View style={styles.upperbox}>
                <FlatList 
                // inverted
                horizontal
                showsHorizontalScrollIndicator={false}
                data={topfive}
                keyExtractor={(key)=>key.id}
                renderItem={({item})=>showSearches({item,s:[styles.listbox]})}
                />
            </View>
        </View>
        <Text style={styles.txt}>ALL USERS FOR A QUICK MATCH!</Text>
        <View style={styles.lowerbox}>
            <FlatList
                numColumns={2}
                data={result}
                keyExtractor={(key)=>key.id}
                renderItem={({item})=>showSearches({item,s:[styles.listbox,styles.lowerboxchild]})}
            /> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator:{
    height:"90%",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    // flex:0.5,
    alignItems:"center"
    },
  iptxt:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"60%",
    borderWidth:0.5,
    borderColor:"indianred",
    borderRadius:20,
    backgroundColor:"snow",
    marginTop:10
  },
  icon:{
    width:50,
    aspectRatio:1,
    borderRadius:50,
  },
  txt:{
    color:"indianred",
    fontFamily:"monospace",
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    fontWeight:"bold"
  },
  img:{
    // width:undefined,
    height:100,
    width:110,
    // aspectRatio:1,
    objectFit:"cover",
    marginVertical:5,
    // borderRadius:20,
  },
  listbox:{
    // borderWidth:1,
    width:"40",
    marginHorizontal:10,
    paddingVertical:5,
    paddingHorizontal:10,
  },
  box1:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    // paddingVertical:5,
    backgroundColor:"grey",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  box2:{
    backgroundColor:"gainsboro",
    // paddingVertical:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  box3:{
    // paddingVertical:5,
    paddingHorizontal:5,
    backgroundColor:"grey",
    // borderBottomLeftRadius:10,
    // borderBottomRightRadius:10,
  },
  boxtxt:{
    color:"gainsboro",
    textAlign:"center",
    textTransform:"capitalize"
  },
  boxbutton:{
    // padding:10,
    backgroundColor:"gainsboro",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    // borderBottomWidth:1,
    // borderBottomLeftRadius:7,
    // borderBottomRightRadius:7
  },
  boxbuttontxt:{
    textAlign:"center",
    color:"salmon",
    textTransform:"capitalize",
    // fontSize:16,
    padding:2
  },
  upperbox:{
    height:240,
    paddingHorizontal:10,
    // borderWidth:1,
  },
  lowerbox:{
    // width:"90%",
    height:340,
    // borderWidth:1,
  },
  lowerboxchild:{
    borderWidth:0.1,
    borderColor:"white",
    maxHeight:"90%",
    elevation: 10,
    shadowColor: 'red',
    marginBottom:20
  }
});

export default Search;
