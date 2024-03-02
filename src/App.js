import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c261d7e28f440870d45b8d1828e767ea`
 const searchlocation=(event)=>{
  if(event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')

  }
  
 }
 
  return (
    <div className="app">
      <div className='search'>
        <input className='input' value={location} 
        type='text' 
        placeholder='Enter City or Country Name' 
        onChange={event=>setLocation(event.target.value)} 
        onKeyPress={searchlocation} />
      </div>
      <div className='container'>
        
        <div className='top'>
          <div className='location'>
            <p className='bold'>{data.name}</p>
          </div>

          <div className='temp'>
             {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>:null}
           </div>
           {data.name !== undefined &&
            <div className='clouds'>
              <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>

              <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}

          </div>
          </div>

          }
        </div>


        {data.name !== undefined &&

<div className='bottom'>
<div className='feels'>
  {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
  <p>Feels like</p>

</div>

<div className='humidity'>
{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
  <p>Humidity</p>
</div>

<div className='wind'>
{data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
  <p>Wind Speed</p>
</div>
</div>
        
        
        
        
        }
      
      </div>
    </div>
  );
}

export default App;
