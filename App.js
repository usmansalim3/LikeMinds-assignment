import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mySlice from './store/mySlice';
import SearchHistory from './screens/SearchHistory';

export default function App() {
  const Stack = createNativeStackNavigator();
  const store = configureStore({
    reducer:mySlice
  })
  return (
  <Provider store={store}>
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetailsScreen" component={MovieDetails}/>
        <Stack.Screen name="MovieHistory" component={SearchHistory}/>
      </Stack.Navigator>
   </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
