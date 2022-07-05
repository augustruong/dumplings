import React, { useState, useEffect }  from 'react'

import './MapSection.css'


const MapSection = () => {
  var initDevice;
  if (window.innerWidth > 1100) { initDevice = "pc" } 
  else if (window.innerWidth > 512) { initDevice = "tablet"}
  else { initDevice = "mobile" }
  const [device,setDevice] = useState(initDevice);
    
  useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1100) { setDevice("pc")} 
            else if (window.innerWidth > 512) {setDevice("tablet")}
            else {setDevice("mobile")}
        }
        window.addEventListener('resize',handleResize);
  })

  return (
    <section id='map' className='l-section map'>
        <div className='c-title--map__wrap'>
            <h3>MAP</h3>
            <h1>お茶の水で</h1>
            <h2>ダンブリング店舗地図</h2>
        </div>

        <a className='map-img__wrap'
          href="https://www.google.com/maps/d/u/0/edit?hl=en&mid=1IyCQEMin3vMeQNMxCFa-WirF0WI4aF0&ll=35.69416784714046%2C139.7611319225108&z=16"
          target='_blank'
          aria-label='Google Map'
          
        >
          <img className='map-img' src={process.env.PUBLIC_URL + `/images/map/map-${device}.png`}
               title='Click to view in Google Map'/>
          
        </a>
    </section>
  )
}

export default MapSection