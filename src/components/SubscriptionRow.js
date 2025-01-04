import React from 'react'
import Live from './assets/live.png'
import './SubscriptionRow.css'

const SubscriptionRow = (props) => {
  return (
    <div className='subscriptionRow'>
           <div className='left'>
                <img className='channelLogo' src={props.img}/>
                <p className='channelName' >{props.name}</p>
           </div>
           <div className='right'>
                <img className='liveImg' src={Live} />
           </div>

    </div>
  )
}

export default SubscriptionRow
