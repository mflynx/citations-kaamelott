import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const CharacterCard = ({image, name, setCurrentSelection, currentSelection}) => {
  return (
    <Pressable
      style={
        currentSelection == name
          ? [styles.wrapper, styles.selected]
          : styles.wrapper
      }
      onPress={() => setCurrentSelection(name)}
    >
      <Image style={styles.thumbnail} source={image} />
      <Text>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center",
        padding: 8
    },
    selected: {
        backgroundColor: "#b4b4b4",
    },
    thumbnail: {
        height: 100,
        width: 100,
        borderRadius: 50
    }
});

export default CharacterCard