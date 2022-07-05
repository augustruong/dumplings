import { React, useState } from 'react'
import storeData from './StoreData'
import StoreDetail from '../components/StoreDetail'
import StoreImgSlider from '../components/StoreImgSlider'
import Pagination from '../components/Pagination'

import './AllStoreSlider.css'


export default function AllStoreSlider() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const paginate = storeIndex => setCurrentIndex(storeIndex);

    return (
        <div className='all-store-slider'>
            <div className='store-wrapper-ctn'>
                {storeData.map((store,index) => {
                    return (
                        <div key={store.id}
                            className={currentIndex === index+1 ? 'store-wrapper active-store' : 'store-wrapper'}
                        >
                                <div className='store-img-wrapper'>
                                    <img className='store-mask' 
                                    src={process.env.PUBLIC_URL + `/images/stores/${store.id}/01.png`}/>
                                </div>
                                <StoreDetail 
                                    name={store.name} 
                                    address={store.address} 
                                    tel={store.tel} 
                                    openTime={store.openTime}
                                    point={store.point}
                                    gglink={store.gglink}
                                />
                        </div>    
                    )
                })}
            </div>
            
            <Pagination paginate={paginate} currentIndex={currentIndex} />
        </div>
    )
}
