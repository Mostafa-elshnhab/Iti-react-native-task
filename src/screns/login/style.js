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
      textSginup:
      {
        // justifyContent: 'center',
        // alignItems: 'center',
        color: 'white',
        margin:10,
        fontWeight: 'bold',
        fontSize: 35,
        paddingTop:35,
        paddingLeft:20
    
    
      },
      logo: {
        width: 40,
        height: 40,
      },
      
      logocontener:
      {
    
        borderBottomColor: '#F5FCFF',
        backgroundColor: (200,250,220),
        borderRadius:20,
        width:"45%",
        height:60,
        margin:10,
        padding:10,
        alignItems:'center'
      },
      optiontext:{
        color:'white',
        fontSize: 14,
        marginLeft:10,
        padding:15,
    
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
      // inputIcon:{
      //   width:"30%",
      //   height:"30%",
      //   marginLeft:15,
      //   justifyContent: 'center'
      // },
      image: {
        flex: 1,
        width:'100%',
        // justifyContent: "center"
      },
      buttonContainer: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:130,
        borderRadius:30,
    
      },
      signupButton: {
        backgroundColor: "#60DAFB",
        marginLeft:130,
        
      },
      signUpText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      }
});

export {styles};
