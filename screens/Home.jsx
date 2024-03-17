import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
    const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
    const [gameTotalQuotes, setGameTotalQuotes] = useState(2);

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image style={styles.logo} source={require("./../assets/images/icon.png")}/>
            <Text style={styles.title}>Kikaaditt</Text>
        </View>

        <Text style={styles.presentation}>Jeu : 10 répliques cultes de Kaamelott, tu dois trouver c'est kikaaditt !</Text>
        <View style={styles.rowContainer}>
            <Pressable>
                <Text style={styles.button} onPress={() => navigation.navigate("Game", {gameConfig: {gameTotalQuotes: gameTotalQuotes}})}>Jouer !</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.button} onPress={() => setIsConfigModalOpen(true)}>Configurer la partie</Text>
            </Pressable>
        </View>
        
        <Text style={styles.presentation}>Si tu veux te rafraîchir la mémoire, tu peux "réviser" en générant des répliques au hasard</Text>
        <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate("Répliques au hasard")}>Réviser !</Text>
        </Pressable>
        <Modal animationType="slide" visible={isConfigModalOpen} onRequestClose={()=>setIsConfigModalOpen(false)}>
            <View style={styles.container}>
                <Text style={styles.title}>Configuration de la partie</Text>
                <Text style={styles.presentation}>Nombre de tours</Text>
                <View style={styles.rowContainer}>
                    <Pressable>
                        <Text style={[styles.configButton, gameTotalQuotes == 2 ? styles.configButtonPressed:""]} 
                        onPress={() => setGameTotalQuotes(2)}>2</Text>
                        <Text>Pour essayer</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={[styles.configButton, gameTotalQuotes == 10 ? styles.configButtonPressed:""]} 
                        onPress={() => setGameTotalQuotes(10)}>10</Text>
                        <Text>Partie normale</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        // justifyContent: "center",
        // width: "100%",
        // height: "100%"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
    },
    logo: {
        width: 80,
        height: 80,

    },
    title: {
        fontFamily: "Folkard",
        fontSize: 28,
        fontWeight: "bold",
        alignSelf: "center"
    },
    presentation: {
        textAlign: "justify",
        fontSize: 18,
        fontStyle: "italic",
        marginTop: 40,
    },
    button: {
        alignSelf: "center",
        color: "white",
        backgroundColor: "black",
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 18,
        borderRadius: 28,
        marginTop: 12
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    configButton: {
        marginTop: 12,
        alignSelf: "center",
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 18,
        borderRadius: 28,
        color: "white",
        backgroundColor: "grey",
    },
    configButtonPressed: {
        backgroundColor: "black",
    }
});

export default Home;
