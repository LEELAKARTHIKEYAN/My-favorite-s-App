import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{alignItems: 'center',flex:1,backgroundColor:'#C9E4C5'}}>
            <View>
            <Text style={{backgroundColor:'#FAEBE0',color:'black',fontWeight:'bold',borderRadius:10,fontSize:18,marginBottom:180,marginTop:30,marginHorizontal:40,padding:'2%'}}>Welcome to Favorite's app 🎨</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("MENU")} style={{backgroundColor:'#B5CDA3',padding:'8%',marginLeft:130,marginRight:130,borderRadius:10,borderColor:'#C1AC95',borderWidth:5}}>
                <Text style={{color:'#534340',fontWeight:'bold',alignItems: 'center'}}>MENU</Text>
            </TouchableOpacity>
            </View>
            <Image
            style = {{ width: 450, height: 350,marginHorizontal:15,marginTop:10,borderRadius:20 }}
            source={require('../Home/mountain.png')}
      />
        </View>
    )
}