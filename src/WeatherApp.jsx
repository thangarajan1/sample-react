import React from "react";
import Search from "./images/search.png";
import clear from "./images/clear.png";
import Cloud from "./images/Cloud.png";
import drizzle from "./images/Drizzle.png";
import rain from "./images/Rain.png";
import Snow from "./images/Snow.png";
import Wind from "./images/wind.png";
import Humidity from "./images/humidity.png";

const ChangeWeather = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <img src={clear} alt="" width={"50%"} />
        </div>
        <div className="row ">
          <div className="col-md-12 d-flex flex-column align-items-center">
            <h3 className="temp">0C</h3>
            <h3 className="city">Chennai</h3>
            <h3 className="country">IN</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center">
              <span>latitude</span>
              <span>0</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>lonitude</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-12 d-flex justify-content-between">
            <div>
              <img src={Humidity} alt="" width={100} />
              <p>85%</p>
              <p className="text-muted">Humidity</p>
            </div>
            <div>
              <img src={Wind} alt="" width={100} />
              <p>5 km/h</p>
              <p className="text-muted">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function WeatherApp() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="input-search d-flex justify-content-center">
                  <input type="text" />
                  <img src={Search} alt="searck" width={25} />
                </div>
                <ChangeWeather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
