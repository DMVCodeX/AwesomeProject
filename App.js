import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { ExerciseIndex } from "./ExerciseIndex";
axios
  .get("https:localhost:3000/users.json")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

export default function App() {
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleExercisesIndex");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);
  return (
    <View style={styles.container}>
      <ExerciseIndex />
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
