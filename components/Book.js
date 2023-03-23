import { View, Text } from "react-native";

export default function Book({ data }) {
  const infos = data.volumeInfo;

  return (
    <View>
      <Text>{infos.title}</Text>
    </View>
  );
}
