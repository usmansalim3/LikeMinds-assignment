import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function SearchHistory(){
    const history = useSelector(state => state.SearchHistory)
    return(
        <View style={{flex:1,backgroundColor:"white"}}>
            <FlatList
                data={history}
                renderItem={({item}) => {
                    return (
                        <View style={{width:"90%",padding:10,backgroundColor:"teal",marginBottom:3,alignSelf:'center'}}>
                            <Text>{item.query}</Text>
                            <Text>{new Date(item.date).toLocaleTimeString()}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}