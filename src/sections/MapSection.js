import React from 'react'

import './MapSection.css'


function MapSection() {
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
          <img className='map-img' src={process.env.PUBLIC_URL + '/images/map.png'}
               title='Click to view in Google Map'/>
        </a>
    </section>
  )
}

export default MapSection