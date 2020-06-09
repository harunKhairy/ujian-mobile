import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './src/redux/reducers'
import AppInit from './AppInit'



const App = () => {

  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <AppInit />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
