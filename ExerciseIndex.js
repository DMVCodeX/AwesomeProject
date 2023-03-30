import { View, Text, Image, StyleSheet } from "react-native";

export function ExerciseIndex(props) {
  return (
    <View>
      <Text>Exercises</Text>
      {props.exercises.map((exercise) => (
        <View key={exercise.id}>
          <Text>{exercise.name}</Text>
          <Image source={{ uri: exercise.image_url }} />
          <Text>{exercise.description}</Text>
          <Text>Suggested reps: {exercise.reps}</Text>
        </View>
      ))}
    </View>
  );
}
