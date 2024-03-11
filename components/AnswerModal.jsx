import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import allCharacters from "./../assets/data/characters";

const AnswerModal = ({ quoteInfo, answer, onClose }) => {
  const image = allCharacters.find(
    (e) => e.name == quoteInfo.character
  ).picture;
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.answerWrapper}>
          <View style={styles.textWrapper}>
            {answer == "correct" ? (
              <Text style={styles.text}>C'est pas faux !</Text>
            ) : (
              <Text style={styles.text}>Raté !</Text>
            )}
            <Text style={styles.text}>
              C'est {quoteInfo.character} kaaditt ça !
            </Text>
          </View>
          <Image style={styles.thumbnail} source={image} />
        </View>
        <Text style={styles.text}>
          Dans l'épisode {quoteInfo.title} du {quoteInfo.season}
        </Text>

        <Pressable>
          <Text style={styles.button} onPress={onClose}>
            Fermer
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "55%",
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 12,
    alignItems: "center"
  },
  answerWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 24,
    marginTop: 12,
    marginBottom: 16
  },
  textWrapper: {
    gap: 8,
    justifyContent: "center",
  },
  text: {
    fontStyle: "italic",
    fontSize: 16,
  },
  thumbnail: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  button: {
    alignSelf: "center",
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    borderRadius: 28,
    marginTop: 32,
  },
});

export default AnswerModal;
