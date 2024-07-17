import { useNavigation, useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { Image, View, Text, StyleSheet} from "react-native";

export default function MovieDetails(){
    const route = useRoute();
    const movieDetails = useMemo(()=>route.params?.movie,[]);
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{flex:0.3,backgroundColor:"black"}}>
                <Image source={{uri:movieDetails?.Poster}} style={{width:'100%',height:"100%",resizeMode:"contain"}}/>
            </View>
            <View style={{flex:0.6,alignItems:'center',marginTop:25}}>
                <Text style={{fontSize:22}}>Title: {movieDetails.Title}</Text>
                <Text style={{fontSize:22}}>Release Date: {movieDetails.Year}</Text>
                <Text style={{fontSize:22}}>Runtime: {movieDetails.Runtime}</Text>
                <Text style={{fontSize:22}}>Genre: {movieDetails.Genre}</Text>
            </View>
        </View>
    )
}
