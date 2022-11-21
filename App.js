import { useState } from "react";
import { StyleSheet, Text, View, } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";

export default function App() {

  const [loaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
  });

const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "greater" && userNumber > number)
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
    setWinOrLose(true);
  };

let content = <StartGameScreen onStartGame={handleStartGame} />;

if (userNumber) {
  content = <GameScreen />
}

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={{fontFamily: "Pacifico"}} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
