import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';

export default function MainScreen({navigation}){
    return(
        <View style={styles.mainmenu}>
            <Text style={{color: 'brown',marginTop:30,marginHorizontal:93,fontSize:20,fontWeight:'bold',adding:'1%'}}>My Top 3 Favorites</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ANIMALS")} style={{backgroundColor:'#334756',padding:'5%',margin:50,alignItems:'center',borderRadius:20}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Animals</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("PLANTS")} style={{backgroundColor:'#334756',padding:'5%',margin:50,alignItems:'center',borderRadius:20}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Plants</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("BIRDS")} style={{backgroundColor:'#334756',padding:'5%',margin:50,alignItems:'center',borderRadius:20}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Birds</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
  mainmenu:{
    backgroundColor:'#C9E4C5',
    flex:1,
  },
});