import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <div className='headerNav'>
        <span className='headerNavBtn'>Home</span>
        <span className='headerNavBtn'>New Question</span>
        <span className='headerNavBtn'>Leader Borad</span>

      </div>
    );
  }
}

export default Header;
