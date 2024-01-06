import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../utilities/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.NumberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer; 

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    NumberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold'
    }
})