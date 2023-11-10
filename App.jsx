import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './components/screen/Signup';
import Login from './components/screen/Login';
import Createprofile from './components/screen/Createprofile';
import Profile from './components/screen/Profile';
import Home from "./components/screen/Home"
import Search from './components/screen/Search';
import Matches from './components/screen/Matches';
import About from './components/screen/About';
import Contact from './components/screen/Contact';

function App(){
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* another method to pass props */}
        <Stack.Screen name="Home"
        options={{
          headerShown:false,
        }}>
          {(props)=><Home {...props} msg="Welcome to Marry ME!"/>}
        </Stack.Screen>
          <Stack.Screen name="Signup" component={Signup} 
          options={{headerTitleAlign:'center',animationEnabled: false}}/>
          <Stack.Screen name="Login" component={Login} 
          options={{headerTitleAlign:'center'}}/>
          <Stack.Screen name="Createprofile" component={Createprofile} 
          options={{headerTitleAlign:'center',headerTitle:"EDIT PROFILE",headerTintColor:"indianred"}}/>
          <Stack.Screen name="Profile" component={Profile}
          options={{headerTitleAlign:'center',headerTintColor:"grey",headerTitle:"MY PROFILE"}}/>

          <Stack.Screen name="Search" component={Search}
          options={{headerTitleAlign:'center',headerTitle:
          "SEARCH YOUR BETTER HALF!", headerTintColor:"indianred"}}/>
          <Stack.Screen name="Matches" component={Matches}
          options={{headerTitleAlign:'center',headerTintColor:"indianred",
          headerTitle:"SEE YOUR MATCHES HERE!"}}/>
          <Stack.Screen name="About" component={About}
          options={{headerTitleAlign:'center',headerTitle:"ABOUT US",headerTintColor:"indianred"}}/>
          <Stack.Screen name="Contact" component={Contact}
          options={{headerTitleAlign:'center',headerTitle:"CONTACT",headerTintColor:"indianred"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1
  }
});

export default App;





// import Buton from './components/Buton';
// import Touchableopacity from './components/Touchableopacity';
// import Linknetflix from './components/LinkNetflix';
// import { Flatlist } from './components/Flatlist';
// import { Images } from './components/Images';
// import Register from './components/Register';
      {/* <View style={styles.body}>
    <Login/>
    <Images/>
    <Flatlist/>
    <Register/>
    <Buton/>
    <Linknetflix/>
    <Touchableopacity/>
    </View> */}