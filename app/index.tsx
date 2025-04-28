import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput, ScrollView, Image } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import Estilos from '../assets/styles/home';
import Icon from 'react-native-vector-icons/FontAwesome6';  
import CategoryList from '@/components/categoryList';
import ForYou from '../components/forYou'
import { useGetData } from '../services/hooks/useGetData'
import Loader from '../components/loader'

export default function Home() {
  const {getFood} =useGetData()
  const [loading, setLoading] = useState(true)
  const [food, setFood] = useState([])

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

  //chamando
  const callGetData = async () => {
    const foodResponse = await getFood()

    if(!foodResponse.error){
      setFood(foodResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading) {
    return (
      <View>
        <Loader />
      </View>
    )
  }

  return (
    <ScrollView
    style={{flex:1, width:'100%', backgroundColor:'#fff', gap:15}}
     showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{display:'flex', gap:20}}>

        <View style={Estilos.header}>
          <View>
            <View style={Estilos.boxLoc}>
              <Icon name="location-dot" size={13} color={'#000'} /> 
            <Text style={{fontFamily:'Regular'}}>
              Localização
            </Text>
            </View>
            
            <Text style={{fontFamily:'Bold'}}>Rua Domingues, Barueri</Text>
          </View>

          <View style={Estilos.icon}>
            <Image source={require('../assets/images/Bag.svg')} />
            <View style={Estilos.conatador}>
              <Text style={{fontFamily:'Regular', color:'#fff', fontSize:13}}>2</Text>
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
              <Text style={Estilos.textPromo}>Entrega grátis, taxas mais <br />baixas e 10% de cashback <br />na retirada!</Text>
            </View>
            <View style={Estilos.ImgPromo}>
              <Image source={require('../assets/images/imgPromo.svg')} />
            </View>

            <View style={Estilos.buttonOrder}>
              <Text style={{fontFamily:'Bold'}}>
                Peça agora
              </Text>
            </View>
          </View>
        </View>

        <View style={{width:'100%', alignItems:'center'}}>
          <View style={Estilos.boxCategory}>
            <Text
            style={{fontFamily:'Bold', fontSize:20}}
            >Categorias</Text>
            <Text
            style={{fontFamily:'Regular', color:'#64646A'}}
            >See All</Text>
          </View>
          
        </View>
        <CategoryList />
        <View style={{width:'100%', alignItems:'center'}}>
          <View style={Estilos.containerMain}>
          <Text
          style={{fontFamily:'Bold', fontSize:20}}
          >Comidas para você 🔥</Text>
          </View>
        </View>
        <ForYou data={food} />
      </SafeAreaView>
    </ScrollView>
  );
}
