import { useEffect, useState } from 'react';
import axios from 'axios';
import DailyForecast from './components/DailyForecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [currentStatus, setCurrentStatus] = useState([]);

  useEffect(() => {
    const key = process.env.REACT_APP_OPWE;
    let lat = 33.44;
    let lon = -94.04;
    let API = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + key;

    axios.get(API).then((res) => {
      let resWeather = res.data.current;
      let resStatus = res.data.current.weather[0];

      setCurrentWeather(resWeather);
      setCurrentStatus(resStatus);

    }).catch((err) => {
      console.log(err);
    })
  }, []);


  return (
    <DailyForecast/>
  );
}

export default App;
