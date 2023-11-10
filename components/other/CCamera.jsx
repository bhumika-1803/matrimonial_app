// import React from 'react';
// import { StyleSheet, Text, View } from "react-native";
// import { useCameraDevice, Camera } from "react-native-vision-camera";

const { View,Text } = require("react-native");

// //   const device = useCameraDevice('back')

// //   if (device == null) return <Text>Nothing</Text>
// //   return (
// //     <Camera
// //       style={{flex:1}}
// //       device={device}
// //       isActive={true}
// //     />
// //   )
// // }
// function CustomCamera() {
// // import * as ImagePicker from "expo-image-picker"

// // const CameraComponent = ({ navigation, route }) => {
//     const [hasPermission, setHasPermission] = React.useState(useCameraPermission());
//     const [type, setType] = React.useState(useCameraDevice('front'));
//     const [camera, setCamera] = React.useState(null);

//     // React.useEffect(() => {
//     //     (async () => {
//     //         const { status } = await Camera.requestCameraPermission();
//     //         setHasPermission(status === 'granted');
//     //     })();
//     // }, []);

//     // const openImagePickerAsync = async () => {
//     //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     //     if (permissionResult.granted === false) {
//     //         alert("Permission to access camera roll is required!");
//     //         return;
//     //     }

//     //     const data = await ImagePicker.launchImageLibraryAsync({
//     //         allowsEditing: true, aspect: [1, 1], quality: 1
//     //     });
//     //     if (route.params.updateProfile) return navigation.navigate("profile", { image: data.uri })
//     //     else return navigation.navigate("register", { image: data.uri })
//     // }

//     const clickPicture = async () => {

//         const data = await camera.takePictureAsync();
//         if (route.params.updateProfile) return navigation.navigate("profile", { image: data.uri })
//         else return navigation.navigate("register", { image: data.uri })

//     }


//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <Camera type={type} style={{ flex: 1, aspectRatio: 1 }} ratio="1:1" ref={(e) => setCamera(e)} />
//                <View
//                 style={{
//                     flexDirection: "row",
//                     position: "absolute",
//                     bottom: 10,
//                     justifyContent: "space-evenly",
//                     width: "100%",
//                 }}
//             >
//                 {/* <Icon name="image" size={40} color="#fff" onPress={openImagePickerAsync} />
//                 <Icon name="camera" size={40} color="#fff" onPress={clickPicture} />

//                 <Icon
//                     name="flip-camera-android"
//                     size={40}
//                     color="#fff"
//                     onPress={() =>
//                         setType(
//                             type === CameraType.back ? CameraType.front : CameraType.back
//                         )
//                     }
//                 /> */}
//                 <Text onPress={clickPicture}>PIC</Text>
//             </View>


//         </View>
//     );
// }


// // export default CameraComponent
// export default CustomCamera;

function CameraComponent(){
    <View>
        <Text>OK</Text>
    </View>
}
export default CameraComponent;
