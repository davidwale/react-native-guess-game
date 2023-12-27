import { StyleSheet, Text, View } from "react-native";
import Colors from "../utilities/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.NumberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer; 

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    NumberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})