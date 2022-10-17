import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    padding: 10,
    borderRadius: 1,
    backgroundColor: "#e4d0ff",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#120438",
    padding: 5,
    textTransform: 'uppercase'
  },
});
