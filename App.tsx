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
    <View>
      <Text> Hangman</Text>
      <Text>
        { displayWord ? displayWord.split('').join('  ') : 'Press "Start Game"'} 
      </Text>
      {
        !displayWord ? (
          <TouchableOpacity>
            <Text> Start Game</Text>
          </TouchableOpacity>
        ) : gameOver ? (
          <Text> Game Over! The word was {word}</Text>
        ) : gameWon ? (
          <Text> Game Won</Text>
        ) : (
          <Text> Remaining Guesses: {remainingGuesses}</Text>
        )
      }
      <ScrollView>
        
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
