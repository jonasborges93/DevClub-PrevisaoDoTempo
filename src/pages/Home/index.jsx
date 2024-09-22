import { useRef, useState } from 'react'
import axios from 'axios'
import './styles.css'

import WeatherResults from '../../components/WeatherResults'
import WeatherResults5Days from '../../components/WeatherResults5Days'

function Home() {

    const [weather, setWeather] = useState()
    const [weather5Days, setWeather5Days] = useState()

    const inputCity = useRef();

    async function searchCity() {
        const inputCityValue = inputCity.current.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCityValue}&appid=33ec52398376069920d49422361155d2&lang=pt_br&units=metric`;
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCityValue}&appid=33ec52398376069920d49422361155d2&lang=pt_br&units=metric`

        const dataFromApi = await axios.get(url)
        const dataFromApi5Days = await axios.get(url5Days)

        setWeather(dataFromApi.data)
        setWeather5Days(dataFromApi5Days.data)
    }



    return (
        <section className='page'>
            <section className="search">
                <div className="container">
                    <div className="search__info">
                        <h2 className="search__title">Veja a previsão o tempo na sua cidade</h2>
                        <p className="search__text">Digite abaixo o nome da cidade e veja a previsão do tempo</p>
                    </div>
                    <div className="search__content">
                        <input type="text" ref={inputCity} className="search__input" placeholder='Infor me o nome da cidade...' />
                        <button className="search__button" onClick={searchCity}>Buscar</button>
                    </div>
                </div>
            </section>

            <section className="results">
                <div className="container">
                    <div className="results__currentDay">
                        {weather && <WeatherResults weather={weather} />}
                    </div>
                </div>
            </section>

            <section className="others-results">
                <div className="container">
                    <div className="others-results__content">
                        {weather5Days && <WeatherResults5Days weather5Days={weather5Days}/>}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home