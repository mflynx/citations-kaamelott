import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const backgroundImage = require("./assets/wallpaper-people.jpg");

export default function App() {
  const [quoteInfo, setQuoteInfo] = useState(null);

  async function getRandomQuote() {
    const res = await fetch("https://kaamelott.chaudie.re/api/random");
    const response = await res.json();
    setQuoteInfo(response);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  if (!quoteInfo || quoteInfo.status !== 1) return;
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>

        <View style={styles.quoteContainer}>
          <ScrollView>
            <Text style={styles.quoteText}>{quoteInfo.citation.citation}</Text>
          </ScrollView>
          <Text style={[styles.quoteText, {paddingTop: 12}]}>{quoteInfo.citation.infos.personnage}</Text>
        </View>

        <View style={styles.button}>
          <Button title="Une autre !" onPress={getRandomQuote} color={"#9c4312"}/>
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  quoteContainer: {
    maxHeight: "40%",
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
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});
