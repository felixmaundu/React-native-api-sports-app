// // liveMatchesService.js 
// //d277b20513ce0cbd705616275f84ddae
// //507cdcf41c1e3b698f155f60ddec1a70
// // d277b20513ce0cbd705616275f84ddae
// const API_KEY = 'd277b20513ce0cbd705616275f84ddae'; // Your API-Football API key
// const BASE_URL = 'https://v3.football.api-sports.io';
// // 'x-rapidapi-host': 'v3.football.api-sports.io',
// // 'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx'
// // url: 'https://v3.football.api-sports.io/fixtures',

// const fetchMatchesByDate = async (date) => {
//   try {
//     const response = await fetch(`${BASE_URL}/fixtures?date=${date}`, {
//       headers: {
//         'X-RapidAPI-Key': API_KEY,
//         'x-rapidapi-host':'v3.football.api-sports.io'
//         // Other required headers or configurations
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error('Failed to fetch matches for the specified date');
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export { fetchMatchesByDate };
