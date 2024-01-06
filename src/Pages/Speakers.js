import React from 'react'
import SpeakerCard from '../Components/speakerCard';
import "./Speakers.css"
function Speakers() {
    return (
      <div className="speakers-section-three">
      <div class="sec-title text-center"><h2 >Speakers</h2></div>
      <div className='row'>
       <SpeakerCard name="naman" url=""/>
       <SpeakerCard name="naman" url="https://res.cloudinary.com/duo4nvalj/image/upload/v1704537618/nemo_tjz4tw.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
       <SpeakerCard name="naman" url="https://i.ibb.co/8x9xK4H/team.jpg"/>
      </div>
      </div>
    );
  }
  
  export default Speakers;