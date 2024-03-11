import { Pressable, StyleSheet, Text, View } from "react-native"


const GameEnd = ({route, navigation}) => {
    const {points} = route.params;
  return (
    <View>
        <Text style={styles.title}>C'est fini !</Text>
        <View style={styles.scoreInfo}>
            <Text style={styles.scoreText}>Ton score est de {Number(points)}/10</Text>
            <Text style={styles.scoreText}>{points > 5 ? "C'est pas trop mal :-)" : "Peut mieux faire ..."}</Text>
        </View>
        <View style={styles.buttonsWrapper}>
            <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate("Game")}>Rejouer !</Text>
            </Pressable>
            <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate("Répliques au hasard")}>Réviser !</Text>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "folkard",
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "center"
    },
    scoreInfo: {
        gap: 8,
        marginTop: 16,
        alignItems: "center"
    },
    scoreText: {
        fontSize: 18,
        fontStyle: "italic"
    },
    buttonsWrapper: {
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        color: "white",
        backgroundColor: "black",
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 18,
        borderRadius: 28,
    }})

export default GameEnd