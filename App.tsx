import { use, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMOFGUESSES = 6;

// https://random-word-api.herokuapp.com/word?number=1

export default function App() {

  const [word, setWord] = useState<string>('');
  const  [displayWord, setDisplayWord] = useState<string>('');
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const [remainGuesses, setRemainingGuesses] = useState<number>(NUMOFGUESSES);

  const [gameOver, setGmeOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  return (
    <View style={styles.container}>

    </View>
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
