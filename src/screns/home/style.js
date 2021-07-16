import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      sginuptop:{
        flexDirection: 'row',
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:15,
          borderBottomWidth: 1,
          width:"90%",
          height:60,
          marginBottom:30,
          marginLeft:20,
          marginTop:20,
          flexDirection: 'row',
          alignItems:'center'
      },
      inputs:{
          height:45,
          marginLeft:20,
          borderBottomColor: '#FFFFFF',
          flex:1,
          alignItems:'center',
          fontSize: 15,
      },
      
      buttonContainer: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:30,
    
      },
      signupButton: {
        backgroundColor: "#60DAFB",
        marginLeft:100,
        
      },
      signUpText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      }
});

export {styles};
