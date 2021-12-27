import * as React from 'react'; 
import { Text, View, Image,TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10,
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image:{
        width:100,

    },
    text:{
        marginLeft:10,
        marginTop:10,
        fontSize:20,
        fontWeight:'bold',
    },
    button:{
        marginTop:10,
        marginLeft:10,
        backgroundColor:'#00ff00',
        borderRadius:10,
        padding:10,
    }
})


export default function CharacterCard({image, name}) { 
    const navigation = useNavigation(); 
    return ( 
    <TouchableOpacity style={styles.container} 
    onPress={() => navigation.navigate('Detail')} > 
     <Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
     ); 
}