import Diferenciar from './components/Diferenciar';

export default () => (
  <View style={style.App}>
    <Diferenciar />
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