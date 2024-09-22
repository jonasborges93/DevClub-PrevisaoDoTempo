/* eslint-disable react/prop-types */

import './styles.css'

function WeatherResults({weather}){

    return(
    <article className="current">
        <p className="current__name">
            Resultados para: 
            <span className="current__name-city"> {weather.name}</span>
            <span className="current__name-date"> - {new Date(weather.dt * 1000).toLocaleDateString('pt-BR',{weekday: 'long', day: 'numeric'})}</span>
        </p>
        <div className="current__featured">
            <div className="current__group">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={`Icone da Previsão do Tempo para ${weather.name}`} className="current__icon" />
                <p className="current__temperature">{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className="current__description">{weather.weather[0].description}</p>
        </div>
        <div className="current__information">
            <p className="current__item">Umidade: <span className="current__text">{weather.main.humidity}%</span></p>
            <p className="current__item">Sensação Térmica: <span className="current__text">{Math.round(weather.main.feels_like)}°C</span></p>
        </div>
    </article>
    )
}
export default WeatherResults