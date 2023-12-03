import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import { fetchMatchesByDate } from '../../service/service';

export default function TodayScreen() {
  const [matchesByCountry, setMatchesByCountry] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // console.log('Device timezone:', timezone); // Logging the timezone
    fetchMatches(formattedDate, timezone);
  }, [selectedDate]);


  const fetchMatches = async (date, timezone) => {
    try {
      const fetchedMatches = await fetchMatchesByDate(date, timezone);
      console.log(fetchMatches);
      if (fetchedMatches && fetchedMatches.response) {
        const matchesGroupedByCountry = fetchedMatches.response.reduce((acc, match) => {
          const league = match.league.name;
          const country = match.league.country; // Assuming the country information is in the 'country' property of the league object

          if (!acc[country]) {
            acc[country] = {};
          }

          if (!acc[country][league]) {
            acc[country][league] = [];
          }

          acc[country][league].push(match);
          return acc;
        }, {});
        setMatchesByCountry(matchesGroupedByCountry);
      } else {
        throw new Error('No matches found for the specified date');
      }
    } catch (error) {
      console.error(`Error fetching matches for ${date}:`, error);
    }
  };



  const renderMatchItem = ({ item }) => {
   // Convert the date string to a Date object
   const matchDate = new Date(item.fixture.date);

   // Extract hours and minutes
   const hours = matchDate.getHours().toString().padStart(2, '0');
   const minutes = matchDate.getMinutes().toString().padStart(2, '0');
 
   // Create the time string in "hh:mm" format
   const formattedTime = `${hours}:${minutes}`;
   return ( <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.timeText}> {formattedTime}</Text>
        <Text style={styles.initialsText}>
          {item.fixture.status.elapsed}
        </Text>
      </View>
      <View style={styles.matchContainer}>

        <View style={[styles.teamContainer, styles.homeTeamContainer]}>
          <Text style={styles.homeTeamText} numberOfLines={1} ellipsizeMode="tail">
            {item.teams.home.name}
          </Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{item.goals.home} - {item.goals.away}</Text>
        </View>
        <View style={[styles.teamContainer, styles.awayTeamContainer]}>
          <Text style={styles.awayTeamText} numberOfLines={1} ellipsizeMode="tail">
            {item.teams.away.name}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.smallText}>HT:{item.score.halftime.home}-{item.score.halftime.away}</Text>
      </View>
    </View>)
};

  return (
    <ScrollView style={styles.container}>
      {Object.entries(matchesByCountry).map(([country, leagues]) => (
        <View key={country}>
          <View style={styles.countryHeaderContainer}>
            {/* Render leagues within the country */}
            {Object.entries(leagues).map(([league, matches]) => (
              <View key={league}>
                <View style={styles.leagueContainer}>
                  {/* Add the league logo source */}
                  {/* <Image source=Your league logo source style={styles.leagueLogo} /> */}
                  <Text style={styles.leagueText}>{league}</Text>
                 
                </View>
  
                {/* Render matches for the league */}
                <FlatList
                  data={matches}
                  renderItem={renderMatchItem}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={styles.matchesList}
                />
              </View>
            ))}
  
            {/* Display country name after rendering leagues */}
            <View style={styles.countryContainer}>
              {/* Add the country logo source */}
              {/* <Image source=Your country logo source style={styles.countryLogo} /> */}
              <Text style={styles.countryText}>{country}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
  
}
const styles = StyleSheet.create({
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  countryLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  countryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  leagueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  leagueLogo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  leagueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  countryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  matchesList: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }, topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
  initialsText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    color: 'gray',
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamContainer: {
    flex: 1,
  },
  homeTeamText: {
    fontSize: 14,
    textAlign: 'right',
  },
  awayTeamText: {
    fontSize: 14,
    textAlign: 'left',
  },
  homeTeamContainer: {
    textAlign: 'right',
  },
  awayTeamContainer: {
    textAlign: 'left',
  },
  scoreContainer: {
    width: 80,
    alignItems: 'center',
  },
  bottomRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
