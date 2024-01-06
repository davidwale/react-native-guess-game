import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/startGameScreen';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GameScreen from './screens/gameScreen';
import AppLoading from 'expo-app-loading';
import GameOverScreen from './screens/gameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRounds] = useState(0);

  function PickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function GameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function StartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={PickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
    userNumber={userNumber} 
    roundsNumber={guessRound} 
    startNewGame={StartNewGameHandler} 
    />
  }

  return (
    <>
    <StatusBar style='light' />
    <LinearGradient 
    colors={['#4e0329','#ddb52f']}
    style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/image/background.png')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundScreen}
      >
      <SafeAreaView style={styles.rootScreen}> 
    {screen}
    </SafeAreaView>
    </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
   rootScreen: {
    flex: 1
   }, backgroundScreen: {
    opacity: 0.15
   }
});
