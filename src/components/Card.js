import React from "react";

const BarStats = ({ confirmed, recovered, deaths }) => {
  console.log(confirmed, recovered, deaths);
  const r = ((recovered / confirmed) * 100);
  const d = ((deaths/confirmed) *100);
  return (
    <div
      className="bar-stats"
      style={{gridTemplateColumns: `${100 - (r+d)}% ${r}% ${d}%`}}>
      <span className="stat confirmed"></span>
      <span className="stat recovered"></span>
      <span className="stat deaths"></span>
    </div>
  );
};

const Legend = ({ name, value }) => {
  return (
    <div className="counts">
      <p className="label">{name}</p>
      <p className="count">{value.toLocaleString()}</p>
      <span className={"stat " + name}></span>
    </div>
  );
};

const Card = ({ data, country }) => {
  if (!data) return <p className="status">Please wait...</p>;
  return (
    <div className="card">
      <div className="card-heading">
        <p className="country">
          {!country.iso ? "Global Statistics" : country.name}
        </p>
        <small className="date">{new Date(data.lastUpdate).toLocaleString()}</small>
      </div>
      <BarStats
        confirmed={data.confirmed.value}
        recovered={data.recovered.value}
        deaths={data.deaths.value}
      />
      <div className="legend">
        <Legend name="confirmed" value={data.confirmed.value} />
        <Legend name="recovered" value={data.recovered.value} />
        <Legend name="deaths" value={data.deaths.value} />
      </div>
    </div>
  );
};

export default Card;
