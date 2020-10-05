import React from 'react';
import av1 from '../img/avatar/boy.png'
import QResult from './QResult';
import { connect } from 'react-redux';


class Question extends React.Component {
  render(){
    return (
      <div className='question question-big'> 
        <header className='question-header'>Name Asks</header>
        <div className='question-cont'>
            <div className='question-cont-avatar'>
                <img src={av1} alt='avatar' width='120px' />
            </div>
            <div className='question-cont-text'>
                <h2>Would you Rather ...</h2>
                <form className='question-from'>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label><br/><br/>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label><br/><br/>
                    <input className='question-submitBtn' type='submit' value='Submit'/>
                </form>
            </div>
            {/* <div className='question-cont-text'>
                <h2>Results...</h2>
                <QResult />
                <QResult />
            </div> */}
        </div>
      </div>
    );
  }
}



export default connect()(Question);