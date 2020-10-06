import React from 'react';

class Contestant extends React.Component {
  render(){
    const { name, answers, questions, avatarURL} = this.props.user;
    const totalAns = Object.keys(answers).length;
    const totalQuest = questions.length;
    const place = this.props.place+1;
    const placeColor = () => {
      switch(place) {
        case 1:
          return 'edgeArrowGold'
        case 2:
          return 'edgeArrowSilver'
        case 3:
          return 'edgeArrowBronze'
        default:
          return 'edgeArrow'

      }}

    return (
      <div className='contestant'>
            <div className={placeColor()}><div className='edgeArrow-text'> {place} </div></div>
            <div className='contestant-avatar'>
                <img src={avatarURL} alt='avatar' width='100%' />
            </div>
            <div className='contestant-text'>
                <h2>{name} </h2>
                <p>Answered Questions: {totalAns} </p>
                <hr/>
                <p>Created Questions: {totalQuest} </p>

            </div>
            <div className='contestant-score'>
                <h2>Score :</h2>
                <span> {totalAns+totalQuest} </span>
            </div>

      </div>
    );
  }
}

export default Contestant;