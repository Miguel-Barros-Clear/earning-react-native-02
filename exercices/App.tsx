import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioLogado from './components/UsuarioLogado';

export default () => (
  <SafeAreaView style={style.App}>
    <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
    <UsuarioLogado usuario={{ nome: 'Ana' }} />
    <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />
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
