import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main:{

    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:15
    },
    icon:{
        backgroundColor:'#E6E6E8',
        padding:10,
        borderRadius:30
    },
    conatador:{
        backgroundColor:'#F55906',
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        position:'absolute',
        bottom:-7,
        right:-3
    },
    boxInput:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        backgroundColor:'#E6E6E8',
        height:50,
        color:'#64646A',
        fontFamily:'Regular',
        borderRadius:30,
        width:'80%',
        paddingLeft:60
    },
    imageSearch:{
        position:'absolute',
        left:60
    },
    containerImgPromo:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    boxImgPromo:{
        width:'80%',
        height:200,
        backgroundColor:'#F55906',
        alignItems:'baseline',
        borderRadius:20,
        flexDirection:'column',
        gap:30,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 10 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 5, 
        elevation: 5, 
        padding:20
    },
    buttonOrder:{
        width:120,
        height:35,
        backgroundColor:'#fff',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    textPromo:{
        color:'#fff',
        fontFamily:'Regular'
    },
    ImgPromo:{
        position:'absolute',
        top:0,
        right:0
    }
})