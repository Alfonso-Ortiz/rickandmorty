import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ErrorFetch from "./Components/ErrorFetch";
import LocationInfo from "./Components/LocationInfo";
import ResidentCard from "./Components/ResidentCard";

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let URL;
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randomIdLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`;
    }
    axios
      .get(URL)
      .then((res) => {
        setLocation(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [locationInput]);

  const handleSubmit = (e) => {
    e.prevenDefault();
    setLocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <form className="card__inputs" onSubmit={handleSubmit}>
        <img className="card__img" src="/img/image_2.svg" alt="" />
        <input id="inputSearch" type="text" />
        <button className="card__btn">Search</button>
      </form>
      {hasError ? (
        <ErrorFetch />
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="residents-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
