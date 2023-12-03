const API_KEY = 'd277b20513ce0cbd705616275f84ddae';
const BASE_URL = 'https://v3.football.api-sports.io';

const fetchMatchesByDate = async (date, timezone) => {
  try {
    const response = await fetch(`${BASE_URL}/fixtures?date=${date}&timezone=${timezone}`, {
     
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch matches for the specified date');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export { fetchMatchesByDate };
