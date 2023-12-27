import { Image, Text, StyleSheet, View } from "react-native";
import Title from "../components/title";
import Colors from "../utilities/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, startNewGame}) {
    return (
        <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
         <Image style={styles.image} source={require('../assets/image/success.png')} /> 
        </View>
        <Text>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
         rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
         <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.accent500,
        margin: 36,
        overflow: 'hidden'
    }, 
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.Primary500,
        fontWeight: 'bold'
    }

})