import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import { useFetch } from "./utils/customHooks";

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
      </main>
    </>
  );
}

export default App;
