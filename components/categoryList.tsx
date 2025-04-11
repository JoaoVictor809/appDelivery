import { Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Styles from '../assets/styles/categoryList';

const categories = [
  'Food',
  'Drinks',
  'Desserts',
  'Snacks',
  'Beverages',
  'Sushi',
  'Pizza'
];

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

  const renderItem = ({ item }: { item: string }) => (
    <View style={Styles.containerCategory}>
      <View style={Styles.imgCategory}></View>
      <Text style={{ fontFamily: 'Poppins_Regular', paddingRight: 15 }}>
        {item}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={Styles.container}
    />
  );
}
