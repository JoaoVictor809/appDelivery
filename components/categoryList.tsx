import { Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Styles from '../assets/styles/categoryList';

export default function CategoryList() {
  const [fontsLoaded] = useFonts({
    'Poppins_Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins_Bold': require('../assets/fonts/Poppins-Bold.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      horizontal={true}
      style={Styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {/* Abaixo, vamos garantir que a largura dos itens seja maior que a tela */}
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Food</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Drinks</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Desserts</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Snacks</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Beverages</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Sushi</Text>
      </View>
      <View style={Styles.containerCategory}>
        <View style={Styles.imgCategory}></View>
        <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>Pizza</Text>
      </View>
    </ScrollView>
  );
}
