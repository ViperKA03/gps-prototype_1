
import './App.css';
import Map from './components/Map'
import {useJsApiLoader } from "@react-google-maps/api"
import {mapOptions} from './components/Mapconfig.js'

function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapsApiKey,
  })
  return (
    <>
    <div className="App">
      <h1>React Google Map</h1>
      <Map isLoaded={isLoaded}/>
    </div>
    </>
  );
}

export default App;
