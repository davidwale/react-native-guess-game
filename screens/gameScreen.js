import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/card";
import InstructionText from "../components/instructionText";
import { Ionicons } from '@expo/vector-icons'; 
import GuessLogItem from "../components/guessLogItem";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
const [currentGuess, setCurrentGuess] = useState(initialGuess);
const [guessRounds, setGuessRounds] = useState([initialGuess]);

useEffect(() => {
    if (currentGuess === userNumber) {
        onGameOver(guessRounds.length);
    }
}, [currentGuess, userNumber, onGameOver]);

useEffect(() => {
minBoundary = 1;
maxBoundary = 100;
}, []);


function nextGuessHandler(direction) {

    if ((direction === 'lower' && currentGuess < userNumber) ||
     (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie", "You Know that is wrong!!!", [
        {text: 'Sorry!', style: 'cancel'},
      ])
     }
    if (direction === 'lower') {
        maxBoundary = currentGuess;
      const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNum);
    } else {
        minBoundary = currentGuess + 1;
        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNum);
        setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds]);
    }
}

const guessRoundListLength = guessRounds.length;

return <View style={styles.screen}>
<Title>Opponent's Guess</Title>
<NumberContainer>{currentGuess}</NumberContainer>
<Card>
    <InstructionText style={styles.textcolor}>Higher or Lower</InstructionText>
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
    <Ionicons name="remove" size={24} />
    </PrimaryButton>
    </View>
    <View  style={styles.buttonContainer}>
    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
    <Ionicons name="add-outline" size={24} />
    </PrimaryButton>
    </View>
    </View>
</Card>
<View style={styles.listContainer}>
    {/* {guessRounds.map(roundNumber => <Text key={roundNumber}>{roundNumber}</Text>)} */}
    <FlatList data={guessRounds} 
    renderItem={(itemData) => 
    <GuessLogItem 
    roundNumber={guessRoundListLength - itemData.index} 
    guess={itemData.item}
    />}
    keyExtractor={(item) => item}
    />
</View>
</View>
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    textcolor: {
     marginBottom: 20
    },
    listContainer: {
        flex: 1,
        padding: 12
    }
})