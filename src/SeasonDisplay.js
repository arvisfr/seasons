import React from "react";

const seasonConfig = {
  summer: {
    text: "Let`s hit the Beach!!!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it1s chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //{text, iconName}

  // return <div>{season === "winter" ? "Burr, it is chilly!" : "Lets hit the Beach!"}</div>

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} massive icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
}
