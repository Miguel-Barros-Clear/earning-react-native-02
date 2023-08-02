import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Quadrado from './components/layout/Quadrado';

export default () => (
  <SafeAreaView style={style.App}>
    <Quadrado />
    <Quadrado cor="#900" />
    <Quadrado cor="#090" />
    <Quadrado cor="#009" />
    <Quadrado cor="#990" />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
