import {Text, StyleSheet, View, Alert} from 'react-native';
import React, {Component} from 'react';
import Field from './src/components/Field';
import params from './src/params';
import Flag from './src/components/Flag';
import LevelSelection from './src/components/LevelSelection';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
} from './src/functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    this.setState({board, won});
  };

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };
  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu!', 'Que burro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    this.setState({board, lost, won});
  };

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState());
  };

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({showLevelSelection: false})}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
        />
        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
  },
});
