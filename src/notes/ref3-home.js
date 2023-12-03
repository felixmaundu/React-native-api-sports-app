// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
// import { fetchMatchesByDate } from '../../service/service';

// export default function TodayScreen  ()  {
//   const [matches, setMatches] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with today's date

//   useEffect(() => {
//     const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date to 'YYYY-MM-DD'
//     fetchMatches(formattedDate);
//   }, [selectedDate]);

//   const fetchMatches = async (date) => {
//     try {
//       const fetchedMatches = await fetchMatchesByDate(date);
//       setMatches(fetchedMatches.response);
//       console.log(`These are the matches  ${fetchedMatches.response}`);
//     } catch (error) {
//       console.error(`Error fetching matches for ${date}:`, error);
//     }
//   };

//   const renderMatchFixtures = () => {
//     return matches.map((match, index) => (
//       <View key={index} style={styles.card}>
//         <Text>{match.fixture.homeTeam.name} vs. {match.fixture.awayTeam.name}</Text>
//         <Text>Score: {match.goals.homeTeam} - {match.goals.awayTeam}</Text>
//         {/* Include other match details as needed */}
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Button
//         title="Previous Day"
//         onPress={() => {
//           const prevDay = new Date(selectedDate);
//           prevDay.setDate(selectedDate.getDate() - 1);
//           setSelectedDate(prevDay);
//         }}
//       />
//       <Button
//         title="Next Day"
//         onPress={() => {
//           const nextDay = new Date(selectedDate);
//           nextDay.setDate(selectedDate.getDate() + 1);
//           setSelectedDate(nextDay);
//         }}
//       />
//       {renderMatchFixtures()}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     elevation: 3,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   topRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   timeText: {
//     fontSize: 12,
//     color: 'gray',
//   },
//   initialsText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   smallText: {
//     fontSize: 12,
//     color: 'gray',
//   },
//   matchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   teamContainer: {
//     flex: 1,
//   },
//   homeTeamText: {
//     fontSize: 14,
//     textAlign: 'right',
//   },
//   awayTeamText: {
//     fontSize: 14,
//     textAlign: 'left',
//   },
//   homeTeamContainer: {
//     textAlign: 'right',
//   },
//   awayTeamContainer: {
//     textAlign: 'left',
//   },
//   scoreContainer: {
//     width: 80,
//     alignItems: 'center',
//   },
//   bottomRow: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scoreText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
