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

  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1', undefined);
      
      const data = await response.json();
      
      const fetchedWord = data[0].toUpperCase();
      
      setWord(fetchedWord);

      setDisplayWord('_'.repeat(fetchedWord.lenght));

      setUsedLetters([]);
      setRemainingGuesses(NUMOFGUESSES);
      setGameOver(false);
      setGameWon(false);

    } catch (error) {
      console.error('Error fetching random word', error);
    }
  };

  const handleLetterPress = (letter: string) => {
    // validate - if the letter is used or game is over/won = return
    // update the usedLetters array with the letters that have been pressed
    // decide if the letter is in the word, if so update the displayWord - figure out where the letter is and replace the _ with the letter
    // update the displayWord on the screen
    // if the updated display = to the word then you have won, else decrement the number of guesses
    // if the number of guesses = 0 then you lost = game over
  }

  return (
    <View>
      <Text> Hangman</Text>
      <Text>
        { displayWord ? displayWord.split('').join('  ') : 'Press "Start Game"'} 
      </Text>
      {
        !displayWord ? (
          <TouchableOpacity onPress={fetchRandomWord}>
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
        { ALPHABET.map((letter) => (
          <TouchableOpacity
          key={letter}
          onPress={() => handleLetterPress(letter)}
          disabled={usedLetters.includes(letter) || gameWon || gameOver}
          >
            <Text> {letter} </Text>
          </TouchableOpacity>
        ))
        }
      </ScrollView>
        {
          (gameOver || gameWon) && (
          <TouchableOpacity onPress={fetchRandomWord}>
            <Text> Play Again </Text>
          </TouchableOpacity>
          )
        }
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
