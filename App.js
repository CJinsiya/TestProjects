/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {View, Text, StyleSheet,Button,TouchableOpacity, Image, Pressable, TextInput,Alert, ImagePropTypes, ScrollView, SafeAreaView,} from 'react-native';

 

const test=()=>
{
  const  [Isname,Setname]=useState('');
  const [Ispassword,Setpassword]=useState('');
  const [Isborder,Setborder]=useState("black");
  const [Isborder2,Setborder2]=useState("black");
  var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  
  return(
  
 <View style={Styles.container}>
 <ScrollView style={{width:"100%",height:"150%"}}>
   <View style={Styles.head}>
   <Image style={{height:40,width:40}} source={require("./icons8-login-64.png")}/>  
    <Text style={Styles.login}>Login Page</Text>
   </View>
   <View style={Styles.body}>
     <Text style={Styles.txt}>Username</Text>
     <TextInput style={{width:250,height:50,borderWidth:2, borderColor:Isborder}} placeholder="Enter your Username.." defaultValue={''} onChangeText={name=>Setname(name)}/>
     <Text style={Styles.txt} >Password</Text>
     <TextInput style={{width:250,height:50,borderWidth:2, borderColor:Isborder2}} placeholder="Enter your Password.." defaultValue={''} onChangeText={password=>Setpassword(password)}/>
     <View style={{padding:30}}>
    {/* <Button title='Button' /> */}
                <Pressable  style={Styles.button} onPress={()=>{
                if(Isname=='')
                {

                  Alert.alert("Warning","Enter Username"); 
                  Setborder("red");
                  
                }
                else if(!isNaN(Isname)||Isname.match(format))
                  {
                    Alert.alert("Warning","Username must be character");
                    Setborder("red");
                  }
                
                else if(Ispassword=='')
                {
                  Alert.alert("Warning","Enter password");
                    Setborder2("red");
                }
                else if(Ispassword.length<8)
                  {
                    Alert.alert("Warning","Password must be atleast 8 character");
                    Setborder2("red");
                  }
                else{
                  Alert.alert("success");
                  Setborder("green");
                  Setborder2("green");
                }
                
                }}>
                <Text style={{textAlign:"center",color:"white",fontWeight:"bold"}}>Submit</Text>
                </Pressable>
   </View>
 </View>
 
</ScrollView>
 </View>
 



  );}



  

const Styles=StyleSheet.create({


  container:{

          flex: 1,
          backgroundColor:"white",
          borderWidth:5,
          borderColor:"black"
          
  },
  head:{
   flex: 1,
   backgroundColor:"white",
   justifyContent:"center",
   alignItems: 'center',
   marginTop:70,


  },
  login:{
    
    fontSize:40,
    fontWeight:"bold",
    color:"#0693e3",
    
    
    
  },
  txt:{
    fontSize:15,
    fontWeight:"bold",
    color:"black",
    padding: 10,
    paddingTop:20,
    //textAlign:"left"
    
    

  },
  body:{
    flex: 2,
    //backgroundColor:"green",
    //justifyContent:"center",
    alignItems: 'center',
    
  },
  in:{
    width:300,
    height:50,
    borderWidth:2,
    //borderColor:"black",
    
    
  },
  button:{
  width:100,
  height:50,
  borderWidth:2,
  borderColor:"black",
  justifyContent:"center",
  backgroundColor:"#0693e3",
  borderRadius:5,

  }
}
)







export default test;
