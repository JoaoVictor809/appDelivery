import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router'; // Hooks do Expo Router

export default function Detail() {
    // Hook para pegar os parâmetros passados pela URL/navegação
    const params = useLocalSearchParams();
    const id = params.id as string;
    const name = params.name as string;
    const thumb = params.thumb as string;
    const description = params.description as string;

   
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

            {/* Exibe o nome do item */}
            <Text style={styles.title}>{name}</Text>

            {/* Exibe a imagem se a URL (thumb) existir */}
            {thumb ? (
                <Image source={{ uri: thumb }} style={styles.image} resizeMode="cover" />
            ) : (
                // Opcional: Mostrar um placeholder ou mensagem se não houver imagem
                <View style={[styles.image, styles.placeholderImage]}>
                    <Text>Sem imagem</Text>
                </View>
            )}

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

// Estilos para a tela de Detalhes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40, // Espaço extra no final
    },
    centered: { // Estilo para centralizar conteúdo (usado na tela de erro)
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9, // Proporção comum para imagens
        height: undefined,   // Deixa a altura ser calculada pela aspectRatio
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#eee', // Cor de fundo enquanto carrega ou se não houver imagem
    },
    placeholderImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: '600', // SemiBold
        marginBottom: 8,
        color: '#444',
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        marginBottom: 20,
    },
    idText: {
        fontSize: 14,
        color: '#888',
        marginTop: 10,
        fontStyle: 'italic',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    debugText: { // Estilo para texto de depuração na tela de erro
        fontSize: 12,
        color: '#555',
        marginTop: 15,
        textAlign: 'center',
    }
});