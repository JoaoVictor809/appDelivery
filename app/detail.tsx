import React, {useEffect} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from '../assets/styles/detail'

export default function Detail() {
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
    

   
    // --- FIM DA DEPURAÇÃO: Verificando valores extraídos ---

    // Verifica se os dados essenciais (ID e Nome) foram recebidos e são válidos ('truthy')
    // Esta é a condição que está causando o erro "Dados do item não encontrados"
    if (!id || !name) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Erro: Dados do item não encontrados.</Text>
                {/* Opcional: Mostrar os parâmetros recebidos na tela de erro para ajudar na depuração */}
                <Text style={styles.debugText}>Params recebidos: {JSON.stringify(params)}</Text>
            </View>
        );
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

            <View>
                {/*titulo do produto */}
                <View style={styles.boxTitle}>
                    <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.titleFrom}>By Mc Favela</Text>
                    </View>
                    <View style={styles.boxStar}>
                        <Icon name='star' solid size={15} color={'#F55906'}/>
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
                    <View>
                        <View>
                            <Icon name='message' solid size={15} color={'#000'} />
                        </View>
                    </View>
                </View>
            </View>
           

            {/* Seção da Descrição */}
            <Text style={styles.descriptionTitle}>Descrição:</Text>
            <Text style={styles.descriptionText}>
                {/* Exibe a descrição ou uma mensagem padrão se não houver descrição */}
                {description || 'Nenhuma descrição fornecida para esta categoria.'}
            </Text>

            {/* Opcional: Exibir outros dados, como o ID */}
            <Text style={styles.idText}>ID da Categoria: {id}</Text>

            {/* Adicione aqui outras seções ou detalhes que você queira mostrar */}

        </ScrollView>
    );
}

