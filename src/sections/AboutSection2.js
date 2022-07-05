import React from 'react'

import './AboutSection2.css'

function AboutSection2() {
  return (
    <section id='about-2' className='l-section about-2'>
        <div className='about-dp-left'>
          <img className='dp-groups-img' src={process.env.PUBLIC_URL + '/images/dp-group-1.png'}/>
        </div>
        <div className='about-dp-right'>
          <div className='dp-title-text'>
            <h3>ABOUT</h3>
            <h1>ダンプリング<span className='span-h2'>とは？</span></h1>
          </div>
          <div className='desc-wrapper'>
            <img className='gyoza-icon' src={process.env.PUBLIC_URL + '/icons/gyoza-icon.svg'}/>
            <p className='about-dp-desc'>
              <b>ダンプリング</b>( 英語: dumpling )とは、小麦粉を水で練って<br/>
              団子状にしたもので、世界各国で食べられています。<br/>
              パスタの一種であるニョッキの様に団子を形成したものら、<br/>
              <b>焼き餃子</b> ( pan-fried dumpling ) や<b>点心</b> ( Chinese dumpling ) <br/>
              の様にダンプリングで具を包んだものまで世界各国には様々<br/>
              なダンプリングが存在します。<br/><br/>
            </p>
          </div>
          
          <div className='desc-wrapper'>
            <img className='gyoza-icon' src={process.env.PUBLIC_URL + '/icons/gyoza-icon.svg'}/>
            <p className='about-dp-desc'>
              蒸したり、スープに入れたり焼いたりと調理法も様々です。<br/>
              果物を丸ごと練り込み、パイの生地で包んで焼いた<br/>
              デザートもダンプリングの一種です。日本食では、そば<br/>
              がきやすいとんなどがダンプリングに当たります。
            </p>
          </div>
        </div>
      
    </section>
  )
}

export default AboutSection2