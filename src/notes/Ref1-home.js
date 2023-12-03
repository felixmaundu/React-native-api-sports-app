


// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

// export default function HomeScreen({ navigation }) {
//   const renderTab = (date) => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>{date}</Text>
//         {/* You can add more content here for each date */}
//       </View>
//     );
//   };

//   // Get today's date
//   const today = new Date();

//   // Generate dates for yesterday, yesterday but one, tomorrow, and tomorrow but one
//   const yesterday = new Date(today);
//   yesterday.setDate(today.getDate() - 1);

//   const yesterdayButOne = new Date(today);
//   yesterdayButOne.setDate(today.getDate() - 2);

//   const tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);

//   const tomorrowButOne = new Date(today);
//   tomorrowButOne.setDate(today.getDate() + 2);

//   return (
//     <View style={{ flex: 1 }}>
//       <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//       <ScrollableTabView
//         initialPage={2} // Set the initial page index to represent today
//         renderTabBar={() => <DefaultTabBar />}
//       >
//         <View key={yesterday} tabLabel={`${yesterday.getMonth() + 1}/${yesterday.getDate()} ${getDayOfWeek(yesterday)}`}>
//           {renderTab(yesterday)}
//         </View>
//         <View key={yesterdayButOne} tabLabel={`${yesterdayButOne.getMonth() + 1}/${yesterdayButOne.getDate()} ${getDayOfWeek(yesterdayButOne)}`}>
//           {renderTab(yesterdayButOne)}
//         </View>
//         <View key={today} tabLabel={`${today.getMonth() + 1}/${today.getDate()} ${getDayOfWeek(today)}`}>
//           {renderTab(today)}
//         </View>
//         <View key={tomorrow} tabLabel={`${tomorrow.getMonth() + 1}/${tomorrow.getDate()} ${getDayOfWeek(tomorrow)}`}>
//           {renderTab(tomorrow)}
//         </View>
//         <View key={tomorrowButOne} tabLabel={`${tomorrowButOne.getMonth() + 1}/${tomorrowButOne.getDate()} ${getDayOfWeek(tomorrowButOne)}`}>
//           {renderTab(tomorrowButOne)}
//         </View>
//       </ScrollableTabView>
//     </View>
//   );
// }

// // Function to get the day of the week (e.g., Mon, Tue, etc.)
// const getDayOfWeek = (date) => {
//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return days[date.getDay()];
// };

// { id: '2', homeTeam: 'Team C', awayTeam: 'Team Djshcqufuiu', score: '2 - 0' },
// { id: '3', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '4', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '5', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '6', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '7', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '8', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '9', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '10', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },
// { id: '11', homeTeam: 'Team E sdjfebc erfuhf', awayTeam: 'Team Fueduxwhewfc  uhedehjd', score: '3 - 2' },

// // Home.js

// import React from 'react';
// import { View, Text, Button } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Open Drawer"
//         onPress={() => navigation.openDrawer()}
//       />
//     </View>
//   );
// }
