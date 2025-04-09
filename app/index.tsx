import { View, SafeAreaView, Text, TextInput, ScrollView, Image } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useState, useEffect } from 'react';
import Estilos from '../assets/styles/home'


export default function home(){
  const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf')
  });
  
  useEffect(() => {
    if (fontsLoaded) {
        SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={{flex:1, width:'100%', backgroundColor:'#fff', gap:15, }}>
      
      <View style={Estilos.header}>
       
        <View>
          <Text style={{fontFamily:'Regular'}}>Localização</Text>
          <Text style={{fontFamily:'Bold'}}>Rua Domingues, Barueri</Text>
        </View>

        
        <View style={Estilos.icon}>
          <Image 
          source={require('../assets/images/Bag.svg')}/>
        </View>
      </View>

      <View>
        <TextInput
        style={Estilos.input}
        placeholder="Search"
         />
         <View style={Estilos.imageSearch}>
            <Image source={require('../assets/images/Search.svg')} />
         </View>
      </View>
      <View>
        imagemPromo
      </View>

      <View>
        <Text>
          Categotias
        </Text>
      </View>
      <View>
        <Text>
          Comidas
        </Text>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}