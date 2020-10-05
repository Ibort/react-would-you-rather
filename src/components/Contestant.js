import React from 'react';
import av1 from '../img/avatar/boy.png'

class Contestant extends React.Component {
  render(){
    return (
      <div className='contestant'>
            <div className='edgeArrow'><div className='edgeArrow-text'>1</div></div>
            <div className='contestant-avatar'>
                <img src={av1} alt='avatar' width='100%' />
            </div>
            <div className='contestant-text'>
                <h2>Your name</h2>
                <p>Answered Questions: 7</p>
                <hr/>
                <p>Created Questionss: 3</p>

            </div>
            <div className='contestant-score'>
                <h2>Score :</h2>
                <span>5</span>
            </div>

      </div>
    );
  }
}

export default Contestant;