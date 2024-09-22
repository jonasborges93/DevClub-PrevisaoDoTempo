/* eslint-disable react/prop-types */

import './styles.css'

function WeatherResults5Days({ weather5Days }) {
    console.log(weather5Days)

    let dailyForecast = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if(!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDaysForecast = Object.values(dailyForecast).slice(1,6);

    console.log(nextFiveDaysForecast)


    return (<>
        {nextFiveDaysForecast.map(forecast =>(
            <article className="days" key={forecast.dt}> 
                 <div className="days__featured">
                    <p className="days__date">{new Date(forecast.dt * 1000).toLocaleDateString('pt-BR',{weekday: 'long', day: 'numeric'})}</p>
                    <div className="days__group">
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={`Icone da Previsão do Tempo`} className="days__icon" />
                        <p className="days__temperature"><span className="days__temperature-text">Aprox.</span> {Math.round(forecast.main.temp)}°C</p>
                    </div>
                    <p className="days__description">{forecast.weather[0].description}</p>
                </div>
                <div className="days__information">
                    <p className="days__item">Umidade: <span className="days__text">{forecast.main.humidity}%</span></p>
                    <p className="days__item">Sensação Térmica: <span className="days__text">{Math.round(forecast.main.feels_like)}°C</span></p>
                </div>
                
            </article>
        ))}
    </>
    )
}
export default WeatherResults5Days