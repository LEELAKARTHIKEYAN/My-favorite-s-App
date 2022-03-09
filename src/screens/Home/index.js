import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{alignItems: 'center',flex:1,backgroundColor:'#C9E4C5'}}>
            <View>
            <Text style={{backgroundColor:'#FAEBE0',color:'black',fontWeight:'bold',borderRadius:10,fontSize:18,marginBottom:160,marginTop:160,marginHorizontal:10,padding:'5%'}}>Welcome to My Favorite's app 🎨</Text>
            {/* <TouchableOpacity 
            onPress={() => navigation.navigate("MENU")} style={{backgroundColor:'#5E8B7E',padding:'8%',marginLeft:130,marginRight:130,borderRadius:10,borderColor:'#C1AC95',borderWidth:5}}>
                <Text style={{color:'white',fontWeight:'bold',alignItems: 'center'}}>START</Text>
            </TouchableOpacity> */}
            </View>
            <Image
            style = {{ width: 450, height: 330,marginHorizontal:15}}
            source={require('../Home/mountain.png')}
      />
        </View>
    )
}