import React from 'react'
import "./speakerCard.css"

function SpeakerCard({url,name}) {
  return (
    <div className='speakercard'>
    <div className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
    <div className="inner-box">
      <div className="image-box">
        <figure className="image"><a href="#"><img src={url} alt=""/></a></figure>
      </div>
      <div className="info-box">
        <h4 className="name"><a href="#">{name}</a></h4>
      </div>
    </div>
  </div>
    
    </div>
  )
}

export default SpeakerCard