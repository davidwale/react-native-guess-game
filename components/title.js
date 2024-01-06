import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../utilities/colors";


function Title({children}) {
return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: Platform.select({ ios: 2, android: 0}),
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})