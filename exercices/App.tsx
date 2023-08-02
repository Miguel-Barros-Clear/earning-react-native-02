import { SafeAreaView, StyleSheet } from 'react-native';
import ParImpar from './components/ParImpar';

export default () => (
  <SafeAreaView style={style.App}>
    <ParImpar num={3} />
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
