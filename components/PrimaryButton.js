import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../utilities/colors";

function PrimaryButton({ children, onPress }) {

    function pressHandler() {
        console.log("pressed");
    }
return (
    <View style={styles.buttonOuterContainer}>
         <Pressable
         onPress={onPress}
         style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
         >
<Text style={styles.buttonText}>{children}</Text>
         </Pressable>
    </View>
     
)
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.Primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign:'center'
    },
    pressed: {
        opacity: 0.75
    }
})