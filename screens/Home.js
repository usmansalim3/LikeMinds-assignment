import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Pressable, Text, TextInput, View } from "react-native";
import { useQueries, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addHistory } from "../store/mySlice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    const [query,setQuery] = useState("");
    const [movie,setMovie] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    async function getMovies(){
        if(query){
            const {data} = await axios.get(`https://www.omdbapi.com/?apikey=57ed164d&t=${query}`);
            if(data?.Response == "True"){
                setMovie([data])
            }
        }
    }
    useEffect(()=>{
        if(query.length == 0){
            setMovie([]);
        }else{
            getMovies()
        }
    },[query])
    function onPressHandler(movie){
        dispatch(addHistory({query}))
        navigation.navigate("MovieDetailsScreen",{ movie })
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <View style={{flex:0.1,justifyContent:"center",alignItems:"center"}}>
                 <TextInput
                  value={query}
                   onChangeText={(e)=>setQuery(e)} 
                   style={{borderWidth:1,borderRadius:10,backgroundColor:"#EDEDED",height:35,width:'90%'}}
                   placeholder="Type in your movie"
                   />
            </View>
            <View style={{flex:0.9}}>
                <FlatList
                    style={{marginHorizontal:"5%"}}
                    data={movie?.length > 0 ? movie : []}
                    renderItem={({item})=>{
                        return(
                            <Pressable style={{flexDirection:"row",gap: 10,backgroundColor:"teal",padding:10}} onPress={() => onPressHandler(item)}>
                                <Text style={{color:"white"}}>{item?.Title}</Text>
                                <Text style={{color:"white"}}>{item?.Year}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
            <View>
                <Button title="check history" onPress={()=> navigation.navigate("MovieHistory")}/>
            </View>
        </SafeAreaView>
    )
}