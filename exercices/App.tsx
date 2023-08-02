import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pai from './components/direta/Pai';

export default () => (
  <View style={style.App}>
    <Pai />
  </View>
);
const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});