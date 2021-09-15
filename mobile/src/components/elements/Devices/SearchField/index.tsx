import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";

export const SearchField: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={"Search by device name"}
        style={styles.input}
      />
    </View>
  );
};
