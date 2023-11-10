import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View ,Text, Button, TouchableWithoutFeedback, TouchableOpacity, Image} from 'react-native';

export default function Home({navigation,msg}) {
  const progress1 = useRef(new Animated.Value(0.5)).current; // useSharedValue(0)
  const scale1 = useRef(new Animated.Value(1)).current;

  const progress2 = useRef(new Animated.Value(0)).current; // useSharedValue(0)
  const scale2 = useRef(new Animated.Value(0)).current;

  const progress3 = useRef(new Animated.Value(0)).current; // useSharedValue(0)
  const scale3 = useRef(new Animated.Value(1)).current;
  const transform3 = useRef(new Animated.Value(0)).current;

  function login(){
    navigation.navigate("Login")
  }
  function signup(){
    navigation.navigate("Signup")
  }

  useEffect(() => {
    // withTiming, withSpring

    // withRepeat
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress1, { toValue: 0.1, useNativeDriver: true }),
          Animated.spring(progress1, { toValue: 1, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.spring(scale1, { toValue: 2, useNativeDriver: true }),
          Animated.spring(scale1, { toValue: 1.5, useNativeDriver: true }),
        ]),
      ]),
      { iterations: 1 }
    ).start()
    Animated.parallel([
          Animated.sequence([
            Animated.spring(progress2, { toValue: 0.5, useNativeDriver: true }),
            Animated.spring(progress2, { toValue: 1, useNativeDriver: true }),
          // ]),
          // Animated.sequence([
            Animated.spring(progress1, { toValue: 0.8, useNativeDriver: true }),

            Animated.spring(scale2, { toValue: 2, useNativeDriver: true }),
            Animated.spring(scale2, { toValue: 500, useNativeDriver: true }),
          // ]),
          // Animated.sequence([
            Animated.spring(progress3, { toValue: 0.5, useNativeDriver: true }),
            Animated.spring(progress3, { toValue: 1, useNativeDriver: true }),
          // ]),
          Animated.parallel(
            [
              Animated.spring(scale3, { toValue: 1, useNativeDriver: true }),
              Animated.spring(scale3, { toValue: 1.3, useNativeDriver: true }),
  
              Animated.spring(scale1, { toValue: 2, useNativeDriver: true }),
  
              Animated.spring(transform3, { toValue: -60, useNativeDriver: true }),
              Animated.spring(scale1, { toValue: 9, useNativeDriver: true }),
            ]
          )
          ])
    ]).start(({finished}) => {
      Animated.timing(
        progress1, progress2, progress3,scale1,scale2,scale3,transform3
      ).stop();
      // navigation.navigate("Signup")
      console.warn(finished)
    });
  }, []);

  return (
    <View style={styles.container} onPress={()=>console.warn("*")}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: /* progress.value * SIZE / 2 */ progress1.interpolate({
              inputRange: [0, 0.5],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            // borderRadius: Animated.multiply(progress, SIZE / 2),
            opacity: progress1,
            transform: [
              { scale:scale1 },
              {
                rotate:progress1.interpolate(
                  {
                    inputRange: [0.5, 1],
                    outputRange: ["0deg", "360deg"],
                  }
                ),
              },
            ],
          },
        ]}
      />
      <Animated.Text style={[styles.txt,{opacity: progress2,transform:[{scale:scale2}]}]}>
        {msg}</Animated.Text>
      <Animated.View style={{borderWidth:1,position:"absolute",flexDirection:"row",gap:20,opacity: progress3}}>
        <TouchableWithoutFeedback hitSlop={{top: 200, bottom: 200, left: 500, right: 500}} touchSoundDisabled={false} onPressIn={()=>console.log("click")}>
          <Text>ok</Text>
        </TouchableWithoutFeedback>
        <Button title="SIGNUP NOW!" onPress={()=>console.log("ok")}/>
        <Button title="LOGIN NOW!" onPress={()=>login()}/>
      </Animated.View>
    </View>
  );
}

const SIZE = 100.0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
  },
  txt:{
    position:"absolute"
  }
});

