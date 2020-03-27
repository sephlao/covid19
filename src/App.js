import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import { useFetch } from "./utils/customHooks";
import WashHands from './img/01.svg';
import CoverMouth from './img/02.svg';
import Isolate from './img/03.svg';
import AvoidContact from './img/04.svg';



function App() {
  const [country, setCountry] = useState("");
  let parsedCountry = country ? JSON.parse(country) : {iso: '', name: ''};
  const url = !parsedCountry.iso
    ? "https://covid19.mathdro.id/api"
    : "https://covid19.mathdro.id/api/countries/" + parsedCountry.iso;
  const [data] = useFetch(url);

  return (
    <>
      <Header />
      <main className="main section">
        <Search selectCountry={setCountry} />
        <Card country={parsedCountry} data={data} />
        <div className="notice">
          <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19). You can protect yourself and help prevent spreading the virus to others if you:</p>
        </div>

        {/* todo create info card component */}
        <div className="card info">
          <img src={AvoidContact} alt="avoid contact"/>
          <p>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>
        </div>
        <div className="card info">
          <img src={WashHands} alt="wash hands"/>
          <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</p>
        </div>
        <div className="card info">
          <img src={CoverMouth} alt="cover mouth"/>
          <p>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</p>
        </div>
        <div className="card info">
          <img src={Isolate} alt="cover mouth"/>
          <p>Stay home and self-isolate from others in the household if you feel unwell</p>
        </div>
      </main>
    </>
  );
}

export default App;
