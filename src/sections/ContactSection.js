import React, { useState, useEffect }  from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import './ContactSection.css'

export default function ContactSection() {
    useEffect(()=> {
        Aos.init();
      })
      
    return(
        <section id='contact' className='l-section contact'>
            <div className='l-section__inner contact'>
                <div className='contact-left-wrap'>
                    <div className='contact-title-wrap'>
                        <h3>CONTACT</h3>
                        <h1>おすすめしたい</h1>
                        <h2>他のいい店舗が知りますか？</h2>
                    </div>
                    <img className='dpgroup-img-pc' src={process.env.PUBLIC_URL + '/images/dp-group-2.gif'}/>
                </div>
                <div className='contact-form-wrap'>
                    <p className='form-title'>Contact Form</p>
                    <form action="/action_page.php">
                        <div className='row'>
                            <div className='col-25'>
                                <label  for="st-name">店舗の名前</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="st-name"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-25'>
                                <label for="st-add">店舗の住所</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="st-add"/>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col-25'>
                                <label for="st-tel">電話番号</label>
                            </div>
                            <div className='col-75'>
                                <input type="text" id="st-tel"/>
                            </div>
                        </div>

                        <label for="comment">評価・コメント</label>
                        <textarea id="comment"></textarea>

                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <img className='dpgroup-img-mob' src={process.env.PUBLIC_URL + '/images/dp-group-2.gif'}/>

            </div>
            

        </section>
    )
}