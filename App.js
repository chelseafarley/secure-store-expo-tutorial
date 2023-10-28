import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

// npx expo install expo-secure-store

export default function App() {
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  const saveSecureValue = async () => {
    await SecureStore.setItemAsync(key, value);
    setKey();
    setValue();
  };

  const retrieveSecureValue = async () => {
    let result = await SecureStore.getItemAsync(key);
    setValue(result);
  };

  const deleteKey = async () => {
    await SecureStore.deleteItemAsync(key);
    setKey();
    setValue();
  };

  return (
    <View style={styles.container}>
      <TextInput value={key} onChangeText={setKey} placeholder="Key" />
      <TextInput value={value} onChangeText={setValue} placeholder="Value" />
      <Button title="Save Key & Value" onPress={saveSecureValue} />
      <Button title="Retrieve Value" onPress={retrieveSecureValue} />
      <Button title="Delete Key" onPress={deleteKey} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
