import { View, StyleSheet } from "react-native";

function Card({ children }) {
return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 35,
        marginHorizontal: 24,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})