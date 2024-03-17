import { Pressable, StyleSheet, Text, View } from "react-native"


const GameEnd = ({route, navigation}) => {
    const {points, gameConfig} = route.params;
  return (
    <View>
        <Text style={styles.title}>C'est fini !</Text>
        <View style={styles.scoreInfo}>
            <Text style={styles.scoreText}>Ton score est de {Number(points)}/{gameConfig.gameTotalQuotes}</Text>
            <Text style={styles.scoreText}>{points >= gameConfig.gameTotalQuotes/2 ? "C'est pas trop mal :-)" : "Peut mieux faire ..."}</Text>
        </View>
        <View style={styles.buttonsWrapper}>
            <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate("Game", {gameConfig: gameConfig})}>Rejouer !</Text>
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
        fontFamily: "Folkard",
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