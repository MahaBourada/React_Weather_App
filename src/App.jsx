import { GlobalStyle, Wrapper } from './globalStyles';
import Content from './Content/Content';
import Search from './Search/Search';
import api from './api/weather';
import { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState('');
  const [description, setDescription] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isDay, setIsDay] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log("API", apiKey)

  const fetchWeather = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`weather?q=${city}&units=metric&appid=${apiKey}`);

      if (response && response.data) {
        setCity(response.data.name);
        setWeather({
          temp: response.data.main.temp,
          visibility: response.data.visibility,
          windSpeed: response.data.wind.speed,
          minTemp: response.data.main.temp_min,
          maxTemp: response.data.main.temp_max,
          feel: response.data.main.feels_like,
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure
        });
        setDescription(response.data.weather[0].description);
        setTimezone(response.data.timezone);
        setSunrise(response.data.sys.sunrise); //This is a package called 'moment' that has 'moment.unix'. Very useful to format dates and such
        setSunset(response.data.sys.sunset);
      }

      setFetchError(null);
    } catch (err) {
      if(err.response) {
        //Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        setFetchError(err.response.data.message);
      } else { //There was possibly no response or something else occured
        console.log(`Error: ${err.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if(city) fetchWeather();
  }, [city])

  useEffect(() => {
    const today = new Date();
    const timezoneDif = parseInt(timezone);
    const localTime = parseInt(today.getTime() / 1000) + (timezoneDif - 3600);
    const localSunrise = parseInt(sunrise) + (timezoneDif - 3600);
    const localSunset = parseInt(sunset) + (timezoneDif - 3600);
    
    if (localTime > localSunrise && localTime < localSunset) {
      setIsDay(true) 
    } else {
      setIsDay(false)
    }
  }, [city]) 


  return (
    <Wrapper isDay={isDay}>
    <div className="App">
      
        <GlobalStyle />
        <header>
        <Search setCity={setCity} isDay={isDay} />
        </header>
        <main>
        <Content isLoading={isLoading} isDay={isDay} fetchError={fetchError} city={city} description={description} weather={weather} sunrise={sunrise} sunset={sunset} />
        </main>
      
    </div>
    </Wrapper>
  );
}

export default App;
