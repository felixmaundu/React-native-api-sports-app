// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { fetchMatchesByDate } from '../../service/service';

// export default function TodayScreen() {
//   const [matches, setMatches] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with today's date

//   useEffect(() => {
//     const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date to 'YYYY-MM-DD'
//     fetchMatches(formattedDate);
//   }, [selectedDate]);

//   const fetchMatches = async (date) => {
//     try {
//       const fetchedMatches = await fetchMatchesByDate(date);
//       if (fetchedMatches && fetchedMatches.response) {
//         setMatches(fetchedMatches.response); // Ensure fetchedMatches.response contains the array of matches
//       } else {
//         throw new Error('No matches found for the specified date');
//       }
//     } catch (error) {
//       console.error(`Error fetching matches for ${date}:`, error);
//     }
//   };

//   const renderMatchFixtures = () => {
//     return matches.map((match, index) => (
//       <View key={index} style={styles.card}>
{/* <View style={styles.topRow}>
<Text style={styles.timeText}>23:34</Text>
<Text style={styles.initialsText}>FT</Text>
</View>
<View style={styles.matchContainer}>
<View style={[styles.teamContainer, styles.homeTeamContainer]}>
  <Text style={styles.homeTeamText} numberOfLines={1} ellipsizeMode="tail">
    {match.homeTeam}
  </Text>
</View>
<View style={styles.scoreContainer}>
  <Text style={styles.scoreText}>{match.score}</Text>
</View>
<View style={[styles.teamContainer, styles.awayTeamContainer]}>
  <Text style={styles.awayTeamText} numberOfLines={1} ellipsizeMode="tail">
    {match.awayTeam}
  </Text>
</View>
</View>
<View style={styles.bottomRow}>
<Text style={styles.smallText}>HT: 2-2</Text>
</View> */}
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {renderMatchFixtures()}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//       },
//       card: {
//         backgroundColor: '#fff',
//         elevation: 3,
//         borderRadius: 5,
//         padding: 10,
//         marginBottom: 10,
//       },
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
