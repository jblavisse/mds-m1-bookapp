import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
  Text,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";

import Book from "./components/Book";

export default function App() {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);

  // async function getBooks() {
  //   const res = await fetch(
  //     "https://www.googleapis.com/books/v1/volumes?q=" + input
  //   );
  //   const data = await res.json();
  //   setBooks(data);
  // }

  function getBooks() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + input)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={input}
          onChangeText={(text) => setInput(text)}
        />

        <TouchableHighlight
          style={styles.searchBtn}
          underlayColor="#999"
          onPress={getBooks}
        >
          <Octicons name="search" size={24} color="white" />
        </TouchableHighlight>
      </View>

      <FlatList
        data={books}
        renderItem={({ item }) => {
          return <Text>{item.volumeInfo.title}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: 25,
  },
  searchBar: {
    flexDirection: "row",
    width: "90%",
  },
  searchInput: {
    width: "80%",
    backgroundColor: "white",
    padding: 8,
  },
  searchBtn: {
    width: "20%",
    backgroundColor: "#00ff00",
    padding: 5,
    alignItems: "center",
  },
});
