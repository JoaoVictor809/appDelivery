import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
         // Espaço extra no final
    },
    centered: { // Estilo para centralizar conteúdo (usado na tela de erro)
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontFamily:'Bold'
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
    boxTitle:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'flex-end'
    },
    titleFrom:{
        fontFamily:'Regular',
        color:'#64646A'
    },
    boxStar:{
        display:'flex',
        flexDirection:'row',
        gap:9
    },
    textStar:{
        fontFamily:'Regular',
        color:'#000'
    },
    containerSeller:{
        display:'flex',
        flexDirection:'row'
    },
    boxInfSeller:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center'
    },
    seller:{
        width:65,
        height:65,
        borderRadius:100
    },
    textSeller:{
        fontFamily:'Bold',
        fontSize:20
    },
    idSeller:{
        fontFamily:'Regular',
        color:'#64646A'
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