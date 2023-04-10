import React from 'react';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import { CityName, CityTempFlex, CityTemp, Temp, Desc, WeatherHeader, MinMax, Feels, WeatherDetails, Details, DetailsText, Error } from './styles';
import { TempIcon, WindIcon, HumidityIcon, VisibilityIcon, PressureIcon } from './styles';

const Header = ({ city, weather, description, fetchError, isLoading, isDay }) => {
  const capitalizeFirst = (str) => {
    const string = str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

    return string;
  }

  return (
        <> 
        {!isLoading && fetchError && <Error>{capitalizeFirst(fetchError)}.</Error>}
        {isLoading && <UseAnimations animation={loading} size={100} autoplay={true} loop={true} wrapperStyle={{ marginTop: '50%', marginLeft: '42%'}} />}
        {!fetchError && !isLoading && 
          <>
          <WeatherHeader>
            <CityName>{capitalizeFirst(city)}</CityName>
            <CityTemp>
              <Temp>{weather.temp}°C</Temp>
              
              <Desc>{capitalizeFirst(description)}</Desc>

            </CityTemp>
            <CityTempFlex>
            <MinMax>{weather.minTemp}°C / {weather.maxTemp}°C</MinMax>

            
            <Feels><TempIcon />Feels like {weather.feel}°C</Feels>
            </CityTempFlex>
          </WeatherHeader>

          <WeatherDetails>
          <Details isDay={isDay}>
            <DetailsText><WindIcon /><br/>Wind speed</DetailsText>
            <DetailsText><span style={{ fontSize: '2.75rem' }}>{weather.windSpeed}</span>km/h</DetailsText>
          </Details>

            <Details isDay={isDay}>
              <DetailsText><HumidityIcon/><br/>Humidity</DetailsText>
              <DetailsText><span style={{ fontSize: '2.75rem' }}>{weather.humidity}</span>%</DetailsText>
            </Details>

            <Details isDay={isDay}>
              <DetailsText><VisibilityIcon/><br/>Visibility</DetailsText>
              <DetailsText><span style={{ fontSize: '2.75rem' }}>{(weather.visibility) / 1000}</span>km</DetailsText>
            </Details>

            <Details isDay={isDay}>
              <DetailsText><PressureIcon/><br/>Air pressure</DetailsText>
              <DetailsText><span style={{ fontSize: '2.75rem' }}>{weather.pressure}</span>hPa</DetailsText>
            </Details>
          </WeatherDetails>
          </>
        }
        </>
  )
}

export default Header