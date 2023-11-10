// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Modal
// } from 'react-native';
// export function ModalComponent({item}){

//     const [modalview,setModalView]=React.useState(false)
//     const [modalcontent,setModalContent]=React.useState({})

//     function knowMoreHandler(item){
//         // console.warn(`more details ${item.id}`)
//         setModalContent(item)
//         setModalView(true)
//       }

//     function removeMatchHandler(item){
//         console.warn(`remove match ${item.id}`)
//       }

//     return(
//         <View style={styles.box}>
//             <View style={styles.innerbox}>
//             <Text style={styles.boxtxt}>{item.name}</Text>
//             <Text style={styles.boxtxt}>{item.age} year</Text>
//             </View>

//             <Image style={styles.img} source={{uri:item.image}}/>
//             <Text style={styles.boxtxt}>Occupation: {item.occupation}</Text>
//             <Text style={styles.boxtxt}>Salary: {item.salary}</Text>
//             <Text style={styles.boxtxt}>Nationality: {item.nationality}</Text>
//             <Text style={styles.boxtxt}>Place: {item.place}</Text>

//             <View style={styles.button}>
//             <TouchableOpacity onPress={()=>knowMoreHandler(item)}>
//                 <Text style={{color:"indianred",padding:5,textAlign:"center"}}>Click here to know more</Text>
//             </TouchableOpacity>
//             </View>
//             <View style={[styles.button,{marginTop:5}]}>
//                 <TouchableOpacity onPress={()=>removeMatchHandler(item)}>
//                 <Text style={{color:"indianred",padding:5,textAlign:"center"}}>Remove Match!</Text>
//                 </TouchableOpacity>
//             </View>

//             <Modal visible={modalview} 
//             transparent={true}
//             animationType='fade'
//             onRequestClose={()=>{setModalView(false)}}
//             >
//             <TouchableOpacity style={styles.modal} onPress={()=>setModalView(false)}>
//                 <Text style={[styles.boxtxt,{color:"indianred"}]}>BIO DATA #{modalcontent.id}</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>{modalcontent.name}</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>{modalcontent.age} year</Text>
//                 <Image style={styles.img} source={{uri:modalcontent.image}}/>
//                 <Text style={[styles.boxtxt,{color:"indianred"}]}>View more photos</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>Occupation: {modalcontent.occupation}</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>Salary: {modalcontent.salary}</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>Nationality: {modalcontent.nationality}</Text>
//                 <Text style={[styles.boxtxt,{color:"white"}]}>Place: {modalcontent.place}</Text>
//                 <Text style={[styles.boxtxt,{color:"indianred"}]}>View BIODATA</Text>   
//             </TouchableOpacity>
//             </Modal>
//         </View>
//     )
// }

// const styles=StyleSheet.create({
//     boxtxt:{
//         // color:"white",
//         fontSize:16,
//         textTransform:"capitalize",
//         fontFamily:"serif"
//       },
//       img:{
//         width:120,
//         height:120,
//         objectFit:"fill",
//         borderRadius:100
//         // aspectRatio:1,
//       },
//       modal:{
//         backgroundColor:"rgba(0,0,0,0.25)",
//         justifyContent:"center",
//         height:"100%",
//         alignItems:"center"
//       },
// })


        // const val=await AsyncStorage.getItem("Matches")
        // if(val!=null){
        //   console.log("*****",val)
        //   setData(val)
        // }