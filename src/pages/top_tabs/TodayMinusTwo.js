import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Sample words for the Today page
const sampleWords = [
  { id: '1', word: 'Apple' },
  { id: '2', word: 'Banana' },
  { id: '3', word: 'Orange' },
  { id: '4', word: 'Grapes' },
  { id: '5', word: 'Pineapple' },
];

const WordCard = ({ word }) => {
  return (
    <View style={styles.card}>
      <Text>{word}</Text>
    </View>
  );
};

export default function TodayMinusTwo() {
  const getDate = (offset) => {
    const today = new Date();
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date;
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Today is {formatDate(getDate(-2))}</Text>
      {sampleWords.map((wordItem) => (
        <WordCard key={wordItem.id} word={wordItem.word} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
