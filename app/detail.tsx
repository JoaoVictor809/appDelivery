import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from '../assets/styles/detail'
import { useRouter } from "expo-router";

export default function Detail() {
    const router = useRouter();
    // Hook para pegar os parâmetros passados pela URL/navegação
    const params = useLocalSearchParams();
    const id = params.id as string;
    const name = params.name as string;
    const thumb = params.thumb as string;
    const description = params.description as string;

    //fontes
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

    // Se passou na verificação, renderiza o conteúdo da tela de detalhes
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {/* Configura o título da tela no cabeçalho usando o nome recebido */}
            <Stack.Screen options={{ title: name || 'Detalhes' }} />



            {/* Exibe a imagem se a URL (thumb) existir */}
            {thumb ? (
                <Image source={{ uri: thumb }} style={styles.image} resizeMode="cover" />
            ) : (
                // Opcional: Mostrar um placeholder ou mensagem se não houver imagem
                <View style={[styles.image, styles.placeholderImage]}>
                    <Text>Sem imagem</Text>
                </View>
            )}
            <Link href={'/'} style={styles.boxBack}>
                <View style={styles.back}>
                <Icon name='xmark' solid size={25} color={'#000'} />
            </View>
            </Link>
            
            <View style={styles.containerMain}>

                {/*titulo do produto */}
                <View style={styles.boxTitle}>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.titleFrom}>By Mc Favela</Text>
                    </View>
                    <View style={styles.boxStar}>
                        <Icon name='star' solid size={15} color={'#F55906'} />
                        <Text style={styles.textStar}>4.7</Text>
                    </View>
                </View>
                {/*vendedor */}
                <View style={styles.containerSeller}>
                    <View style={styles.boxInfSeller}>
                        <Image
                            style={styles.seller}
                            source={require('../assets/images/seller.jpg')} />
                        <View>
                            <Text style={styles.textSeller}>Bruno Cardoso</Text>
                            <Text style={styles.idSeller}>ID: 13226525</Text>
                        </View>
                    </View>
                    {/*icones*/}
                    <View style={styles.containerIcon}>
                        <View style={styles.boxIcon}>
                            <Icon name='message' solid size={15} color={'#000'} />
                        </View>
                        <View style={styles.boxIcon}>
                            <Icon name='phone' solid size={15} color={'#000'} />
                        </View>
                    </View>
                </View>
                {/*descrição*/}
                <View style={styles.containerDesc}>
                    <Text style={styles.titleDesc}>Descrição</Text>
                    <Text style={styles.textDsec}>
                        {description}
                    </Text>
                </View>
                {/*informações*/}
                <View style={styles.conatinerInf}>
                    <View style={styles.boxInf}>
                        <View style={styles.boxIconInf}>
                            <Icon name='motorcycle' solid size={15} color={"#000"} />
                        </View>

                        <View style={{ gap: 10 }}>
                            <Text style={styles.textInf}>Delivery Time</Text>
                            <Text style={styles.timeInf}>25 min</Text>
                        </View>

                    </View>
                    <View style={styles.boxInf}>
                        <View style={styles.boxIconInf}>
                            <Icon name='box' solid size={15} color={"#000"} />
                        </View>

                        <View style={{ gap: 10 }}>
                            <Text style={styles.textInf}>Delivery Type</Text>
                            <Text style={styles.timeInf}>Food</Text>
                        </View>

                    </View>
                </View>
                {/*comprar*/}
                <View style={styles.containerBuy}>
                    <Text style={styles.textPrice}>R$ 200.50</Text>
                    <View style={styles.boxBuy}>
                        <Text style={styles.textAdd}>Add ao Cart</Text>
                    </View>
                </View>
            </View>




        </ScrollView>
    );
}

