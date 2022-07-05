import React from 'react'
import AllStoreSlider from '../components/AllStoreSlider'


import './StoreSection.css'


function StoreSection() {
  return (
    <section className='l-section store' id='stores'>
      <AllStoreSlider />
      <div className='c-title--store__wrap'>
          <div className='c-title--store'> 
            <h3>STORES</h3>
            <h1>店舗紹介</h1>
            <h2>ダンプリング・中華店舗</h2>
          </div>
      </div>
    </section>
  )
}

export default StoreSection