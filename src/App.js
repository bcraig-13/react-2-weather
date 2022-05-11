import { createContext, useState } from 'react';



function App() {
  const [weatherData, setWeatherData] = useState(() => {
    const key = REACT_APP_OPWE;
    let API = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=" + key;

    axios.get(API).then((res => {
      // store res with useContext? Research more...
    }))
  }, []);

  return (
    <p></p>
  );
}

export default App;
