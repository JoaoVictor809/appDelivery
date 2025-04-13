import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerForYou: {
        width:350, 
        marginRight: 15,
        alignItems: 'center'
    },
    boxImgFotYou: {
        width: '100%',
        height: 250
    },
    containerTitle:{
        width:'100%',
        position:'absolute',
        backgroundColor:'#fff',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        bottom:-5,
        display:'flex',
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between'
    },
    imgForYou001: {
        width: '100%',
        height: 250,
        borderRadius: 30,
        resizeMode: 'cover'
    },
    buttonGo:{
        width:50,
        height:50,
        backgroundColor:'#F55906',
        borderRadius:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})