/**
 * Created by Simon on 23.03.2017.
 */
/**
 * Created by Simon on 23.03.2017.
 */
import {  StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        padding:20,
        paddingTop:30,
        paddingBottom:0,
    },
    card:{
        flex:1,
        backgroundColor:"white",
        borderRadius:10,
        padding:10,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: .5
    },
    box:{
        left:-15,
        right:-15,
        top:"50%",
        position:"absolute",
        zIndex:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    button:{
        borderWidth: 1,
        borderColor:"black",
        borderRadius:20,
        width:40,
        height:40,
        justifyContent:"center",
        backgroundColor:"white"
    },
    buttonText:{
        textAlign:"center"
    }
});