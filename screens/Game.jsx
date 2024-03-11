import { Button, Modal, ScrollView, StyleSheet, Text, View } from "react-native"
import allCharacters from "./../assets/data/characters"
import allQuotes from "./../assets/data/quotes.json"
import { useEffect, useState } from "react"
import CharacterCard from "../components/CharacterCard";
import AnswerModal from "../components/AnswerModal";


const allCharactersName = allCharacters.map(e => e.name);
const totalQuotes = 10;

const Game = ({navigation}) => {
    const [selectedQuotes, setSelectedQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(0);
    const [currentSelection, setCurrentSelection] = useState("");
    const [points, setPoints] = useState(0);
    const [modalVisible, setModalVisible] = useState("");

    const resetGame = () => {
        const selectedQuotes = allQuotes.filter(quote => allCharactersName.includes(quote.character))
                                        .sort(() => 0.5 - Math.random())
                                        .slice(0, totalQuotes);
        setSelectedQuotes(selectedQuotes);
        setPoints(0);
        setCurrentQuote(0);
        selectedQuotes.forEach((quote, i) => {
            console.log(i, " ==> ", quote.quote.slice(0, 42), " => ", quote.character)
        })}

    const onValidate = () => {
        if (currentSelection == selectedQuotes[currentQuote].character) {
            setPoints(points + 1)
            setModalVisible("correct")
        } else {
            setModalVisible("incorrect")
        }
    }
    const onCloseModal = () => {
        setCurrentSelection("")
        setModalVisible("")
        if (currentQuote == totalQuotes-1) {
            navigation.navigate("GameEnd", {points: points});
        } else setCurrentQuote(currentQuote + 1)
    }

    useEffect(() => {
        console.log("use effect first mount")
        resetGame();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
          // Do something when the screen blurs
          console.log("use effect on blur")
          resetGame();
        });
      
        return unsubscribe;
      }, [navigation]);
    
    if (selectedQuotes.length == 0) return;
    return (
      <View style={styles.container}>
        <View style={styles.quoteContainer}>
          <ScrollView>
            <Text style={styles.quoteText}>
              {selectedQuotes[currentQuote].quote}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.characterCardsContainer}>
          {allCharacters.map((char, i) => (
            <CharacterCard
              key={i}
              image={char.picture}
              name={char.name}
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
            />
          ))}
          {modalVisible !== "" && (
            <AnswerModal
              quoteInfo={selectedQuotes[currentQuote]}
              answer={modalVisible}
              onClose={onCloseModal}
            ></AnswerModal>
          )}
        </View>
        <Button
          color={"black"}
          title="Valider"
          disabled={currentSelection.length == 0}
          onPress={onValidate}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0,
      width: "100%",
      height: "100%",
    },
    quoteContainer: {
      height: "40%",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      backgroundColor: "#000000c0",
    },
    quoteText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "justify",
    },
    characterCardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginVertical: 12
    }
  });

export default Game