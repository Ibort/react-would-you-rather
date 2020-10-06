import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return (
      <div className='headerNav'>
        <NavLink to='/' className='headerNavBtn' exact activeClassName='headerNavBtnActive'>Home</NavLink>
        <NavLink to='/new' className='headerNavBtn' activeClassName='headerNavBtnActive'>New Question</NavLink>
        <NavLink to='/leaderboard' className='headerNavBtn' activeClassName='headerNavBtnActive'>Leader Borad</NavLink>

      </div>
    );
  }
}

export default Header;
