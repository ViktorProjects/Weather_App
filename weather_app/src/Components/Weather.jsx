import React, {useState} from 'react';
import axios from 'axios'

const Weather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation("")
        }
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=27b03c36814d3922111246472acf151d`

    return (
        <div className={"max-w-[700px] m-auto p-4"}>
            <div className={"border-2 my-4"}>
                <input
                    className={"w-full p-2"}
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    placeholder={"Enter Location"}
                    onKeyPress={searchLocation}
                    type="text"/>
            </div>
            <div className={"w-full h-full flex flex-col text-center justify-center items-center"}>
                <div className={"text-6xl p-4"}>{data.name}</div>
                <div className={"text-2xl p-4"}>
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                </div>
                <div className={"text-2xl p-4"}>
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
                <div className={"text-2xl p-4"}>
                    {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                </div>
                <div className={"text-2xl p-4"}>
                    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Weather;