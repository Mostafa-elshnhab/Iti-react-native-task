import React, {useState} from 'react';
import {styles} from './style';
import {
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,ImageBackground
  } from 'react-native';
export default function Home({navigation}) {
  const [number, setNumber] = useState('');
  numberValidation =(enterdnumber)=>
  {
    if(enterdnumber.length !=11)
    {
      return false;
    }
   return Array.from(enterdnumber).every(char=>char>=0&& char<=9)
  }
  handelvalidation=()=>
  {
    if(!numberValidation(number))
    {
      alert('Wrong number' )
    }
    else{
        alert('Sucsess number ' +number)
    }
    
  }
    return(
      <View>
         <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Number"
            keyboardType="numeric"
            underlineColorAndroid='transparent'
            onChangeText={setNumber}/>
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={ handelvalidation}>
        <Text style={styles.signUpText}>Check Validation</Text>
      </TouchableHighlight>
      </View>

  );

}