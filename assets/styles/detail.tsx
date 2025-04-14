import { StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
         
    },
    containerMain:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      gap:10,
      paddingBottom:10
    },
    centered: { 
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
        aspectRatio: 16 / 9, 
        height: undefined,   
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#eee',
    },
    placeholderImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTitle:{
        display:'flex',
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        
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
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
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
    containerIcon:{
        display:'flex',
        flexDirection:'row',
        gap:15
    },
    boxIcon:{
        width:40,
        height:40,
        backgroundColor:'#E6E6E8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    containerDesc:{
        width:'90%',
        display:'flex',
        flexDirection:'column',
        alignItems:'baseline',
        gap:10
    },
    titleDesc:{
        fontFamily:'Bold',
        fontSize:20
    },
    textDsec:{
        fontFamily:'Regular',
        color:'#64646A',
        textAlign:'justify'
    },
    conatinerInf:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    boxInf:{
        width:"46%",
        height:80,
        backgroundColor:'#E6E6E8',
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    boxIconInf:{
        width:40,
        height:40,
        backgroundColor:'#F7F6F9',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    textInf:{
        fontFamily:'Regular',
        fontSize:14,
        color:'#64646A'
    },
    timeInf:{
        fontFamily:'Bold'
    },
    containerBuy:{
        width:'90%',
        height:60,
        backgroundColor:'#F55906',
        borderRadius:100,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:3,
        paddingLeft:20,
        
    },
    boxBuy:{
        width:'40%',
        height:'90%',
        backgroundColor:'#fff',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
    },
    textPrice:{
        fontFamily:'Regular',
        color:'#fff'
    },
    textAdd:{
        fontFamily:'Bold',
        fontSize:15
    },
    back:{
        width:40,
        height:40,
        backgroundColor:'#fff',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
       
    },
    boxBack:{
        position:'absolute',
        zIndex:1,
        top:10,
        left:15
    }
});