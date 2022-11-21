import { StyleSheet, TouchableWithoutFeedback, ScrollView, Text, View, TextInput, Button, Pressable, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input';
import Card from '../components/Card';
import colors from '../constants/colors';

export default function StartGameScreen({ onStartGame }) {

    const [value, setValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("");

    const handleConfirmation = () => {
        const choseNumber = parseInt(value);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setValue("");
    }

    const handleResetInput = () => {
        setValue("");
        setConfirmed(false);
    }

    const handleInput = (text) => {
        setValue(text.replace(/[^0-9]/g, ""));
    };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
        <Card>
        <Text>Elije un numero</Text>
        <Input value={value} onChangeText={handleInput} />
        <View style={styles.buttonContainer}>
            <Pressable 
            style={styles.cleanButton}
            onPress={handleResetInput}>
                <Text style={{color: "white", fontWeight: "bold"}}>Limpiar</Text>
            </Pressable>
            <Pressable
            style={{
                ...styles.cleanButton,
                ...styles.confirmButton,
            }}
            onPress={handleConfirmation}>
                <Text style={{color: "white", fontWeight: "bold"}}>Confirmar</Text>
            </Pressable>
        </View>
      </Card>

      {confirmed && (
        <Card newStyles={{ marginTop: 50, width: 300, }}>
            <Text>Elejiste el numero:</Text>
            <Text style={{fontWeight: "bold", color: "red", fontSize: 30}}>{selectedNumber}</Text>
            <Button title="Empezar Juego" onPress={() => onStartGame(selectedNumber)} />
        </Card>
      )}
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        
    },
    cleanButton: {
        backgroundColor: colors.secondary,
        height: 35,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    confirmButton: {
        backgroundColor: "green",
        width: "40%",
    }
})