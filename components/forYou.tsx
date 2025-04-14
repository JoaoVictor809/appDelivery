import React from 'react';
import { View, FlatList, Text, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Styles from '../assets/styles/forYouStyle';
import { useRouter } from "expo-router";

type FoodItem = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

type ForYouProps = {
  data: FoodItem[];
};

export default function ForYou({ data }: ForYouProps) {
  const router = useRouter();

  const handlePress = (item: FoodItem) => {

    if (!item.idCategory || !item.strCategory) {
        console.error("ERRO: idCategory ou strCategory está faltando ou é inválido no 'item' antes de enviar!");
        return;
    }

    
    try {
      router.push({
        pathname: '/detail', 
        params: {
          id: item.idCategory,
          name: item.strCategory,
          thumb: item.strCategoryThumb,
          description: item.strCategoryDescription,
        },
      });
      console.log("[forYou.tsx] Navegação para '/detail' iniciada com sucesso.");
    } catch (error) {
      console.error("!!! [forYou.tsx] Erro ao tentar executar router.push:", error);
    }
  };

  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={Styles.containerForYou}>
      <View style={Styles.boxImgFotYou}>
        <Image
          style={Styles.imgForYou001}
          source={{ uri: item.strCategoryThumb }}
          resizeMode="cover"
        />
      </View>
      <View style={Styles.containerTitle}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.strCategory}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Icon name="clock" solid size={13} color={'#64646A'} />
            <Text style={{ color: '#64646A' }}>
              25 min • Leve • By Max
            </Text>
          </View>
        </View>
        <Pressable onPress={() => handlePress(item)} hitSlop={10}>
          <View style={Styles.buttonGo}>
            <Icon name="arrow-right" solid size={16} color={'#fff'} />
          </View>
        </Pressable>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.idCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
    />
  );
}