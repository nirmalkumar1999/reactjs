import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Task6() {
    const [city,setCity]=useState("")
    const [search,setSearch]=useState(false)
    const apikey="6a9779c6f4663c3948c6c127f23cabf8"
    // const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    useEffect(() => {
        if(search){
            getWeather()
        }
    },[search])
    const getWeather = async () => {
        let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        console.log(data);
        setSearch(false)
    }
  return (
<>
<div>
    <input type="search" name='search' id='search' 
    onChange={(e)=> setCity(e.target.value)} value={city}/>
    <button onClick={()=>setSearch(true)}>search</button>
</div>
</>
  )
}

export default Task6