import * as React from 'react';
import { View, Text ,Image} from 'react-native';

export default function Animal3(){
  return(
    <View style={{backgroundColor:'#F4FCD9',flex:1,alignItems: 'center'}}>
      <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,color:'#5E8B7E'}}>WOLF</Text>
      <Image
        style = {{ width: 350, height: 350,marginHorizontal:15,marginVertical:70,borderRadius:20 }}
        source={require('../wolf.jpg')}
      />
    </View>
  )
  }