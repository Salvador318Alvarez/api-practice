const key = '20beab3662987b8378f79ad8cb7a1b1b'

//get bible data

const getWeather = async (id) => {
  
//   const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
//   const query = `${id}?apikey=${key}`;
const base = `https://20beab3662987b8378f79ad8cb7a1b1b.scripture.20beab3662987b8378f79ad8cb7a1b1b.bible/v1/bibles`

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};