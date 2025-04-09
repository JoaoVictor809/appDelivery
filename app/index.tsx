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
          <View style={Estilos.conatador}>
            <Text
            style={{fontFamily:'Regular', color:'#fff', fontSize:13}}
            >2</Text>
          </View>
        </View>
      </View>

      <View style={Estilos.boxInput}>
        <TextInput
        style={[Estilos.input, {outline:0}]}
        placeholder="Search"
         />
         <View style={Estilos.imageSearch}>
            <Image source={require('../assets/images/Search.svg')} />
         </View>
      </View>
      <View style={Estilos.containerImgPromo}>
        <View style={Estilos.boxImgPromo}>
          <View style={{gap:10}}>
           <Text style={Estilos.textPromo}>Hoje é um bom dia!</Text>
            <Text style={Estilos.textPromo}>Entrega grátis, taxas mais <br />baixas 
            e 10% de cashback <br /> na retirada!</Text> 
          </View>
          <View style={Estilos.ImgPromo}>
            <Image source={require('../assets/images/imgPromo.svg')}/>
          </View>
            
            {/*botão peça agr */}
            <View style={Estilos.buttonOrder}>
              <Text style={{fontFamily:'Bold'}}>
                Peça agora
              </Text>
            </View>
            {/*categorias */}
            <View>

            </View>
        </View>
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