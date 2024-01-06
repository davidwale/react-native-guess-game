import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/title";
import Colors from "../utilities/colors";
import Card from "../components/card";
import InstructionText from "../components/instructionText";


function StartGameScreen({onPickedNumber}) {
const [enteredNumber, setEnteredNumber] = useState('');

function numberInputHandler(enteredText) {
setEnteredNumber(enteredText);
}

function resetInputHandler() {
    setEnteredNumber('');
}

function confirmInputHandler() {
const chosenNumber = parseInt(enteredNumber);

if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
 Alert.alert('invalid Number!', 'Number has to be a number between 1 and 99.',
 [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
 )
}

onPickedNumber(chosenNumber);
}

return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
    <Card>
        <InstructionText style={styles.instructionText}>Enter A Number</InstructionText>
    <TextInput 
    style={styles.numberInput} 
    maxLength={2}
    keyboardType="number-pad"
    onChangeText={numberInputHandler}
    value={enteredNumber}
    />
    <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
    <View style={styles.buttonContainer}>
    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
    </View>
    </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
);

}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});