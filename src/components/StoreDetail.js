import React, { Component } from 'react'
import ReactStars from 'react-rating-stars-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './StoreDetail.css'

class StoreDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='store-detail-wrapper'>
          <h1 className='store-name'>{this.props.name}</h1>
          <div className='desc-wrapper'>
            <img className='mappin-icon' src={process.env.PUBLIC_URL + '/icons/mappin.svg'}/>
            <p className='store-address'>{this.props.address}</p>
          </div>
          <div className='desc-wrapper'>
            <img className='phone-icon' src={process.env.PUBLIC_URL + '/icons/phone.svg'}/>
            <p className='store-tel'>{this.props.tel}</p>
          </div>

          <table>
              <thead>
                <tr>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                  <th>日</th>
                </tr>
              </thead>
              <tbody>
                <tr className='open-time'>
                  <th>{this.props.openTime[0][0]}</th>
                  <th>{this.props.openTime[1][0]}</th>
                  <th>{this.props.openTime[2][0]}</th>
                  <th>{this.props.openTime[3][0]}</th>
                  <th>{this.props.openTime[4][0]}</th>
                  <th>{this.props.openTime[5][0]}</th>
                  <th>{this.props.openTime[6][0]}</th>
                </tr>
                <tr className='close-time'>
                  <th>{this.props.openTime[0][1]}</th>
                  <th>{this.props.openTime[1][1]}</th>
                  <th>{this.props.openTime[2][1]}</th>
                  <th>{this.props.openTime[3][1]}</th>
                  <th>{this.props.openTime[4][1]}</th>
                  <th>{this.props.openTime[5][1]}</th>
                  <th>{this.props.openTime[6][1]}</th>
                </tr>
              </tbody>
          </table>

          <div className='rating-container'>
            <div className='point-stars-wrapper'>
              <p className='store-point'>{this.props.point} </p>
              <ReactStars 
                classNames='stars-container'
                value={this.props.point} 
                isHalf={true} 
                emptyIcon={<img src={process.env.PUBLIC_URL + `/icons/star-empty.svg`} />}
                halfIcon={<img src={process.env.PUBLIC_URL + `/icons/star-half.svg`} />}
                filledIcon={<img src={process.env.PUBLIC_URL + `/icons/star-full.svg`} />}
              />
            </div>
            <small>(Googleによるレビュー)</small>
          </div>

        <button className='view-more-btn'>
          <a 
            href={`${this.props.gglink}`}
            target='_blank'
            >
            View More
          </a>
        </button>
          
        </div>
    )
  }
}

export default StoreDetail