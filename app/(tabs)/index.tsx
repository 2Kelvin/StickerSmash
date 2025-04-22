import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

// custom styling object for the View and Text components
const styles = StyleSheet.create({
  container: { // for View
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { // for Text
    color: '#fff',
    paddingBottom: 10,
  },
  button: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#fff',
  }
});
