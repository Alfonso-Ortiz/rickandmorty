import React from "react";
import "./styles/locationInfor.css";

const LocationInfo = ({ location }) => {
  return (
    <article className="header__card">
      <ul className="header__card-list">
        <li className="header__card-item">
          <span>Name: </span>
          {location?.name}
        </li>
        <li className="header__card-item">
          <span>Type: </span>
          {location?.type}
        </li>
        <li className="header__card-item">
          <span>Dimention: </span>
          {location?.dimension}
        </li>
        <li className="header__card-item">
          <span>Population: </span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
