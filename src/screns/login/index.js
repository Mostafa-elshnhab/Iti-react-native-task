import React, {useState} from 'react';
import {styles} from './style';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,ImageBackground
  } from 'react-native';
export default function Login({navigation}) {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    return(
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://a.top4top.io/p_2021f3rhc1.png" }} resizeMode="cover" style={styles.image}>
      <View style={styles.sginuptop} >
      <Text style={styles.textSginup}>Sign Up</Text>
      </View>
      <View>
        <Text style={styles.optiontext}>
          Sign up with one of following option.
        </Text>
      </View>
      <View style={{flexDirection: 'row',
    alignItems:'center',
    marginLeft:10,
    marginBottom:20}}>
        <View style={styles.logocontener} >
            <Image source={{uri:'https://k.top4top.io/p_2022zgri41.png'}}
            style={styles.logo}/>
        </View>
        <View style={styles.logocontener}>
        <Image source={{uri:'https://g.top4top.io/p_20224m58y1.png'}}
        style={styles.logo}/>
          </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Full name"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={setFullname}/>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={setEmail}/>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={setPassword}/>
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=>{ navigation.navigate("Home")}}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableHighlight>
      <View style={{alignItems: 'center',}}>
        <Text style={{color: 'white',fontSize: 14,}}>
          Alerady have an account?<Text style={{fontWeight: 'bold',fontSize: 15,}}>Log in</Text>
        </Text>
      </View>
      </ImageBackground>
    </View>

  );

}