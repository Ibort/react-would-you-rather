import React from 'react';
import { NavLink , withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';


class Header extends React.Component {

  logout = (e) => {
    const { dispatch } = this.props;

    e.preventDefault()
     dispatch(setAuthedUser(null))
     this.props.history.push(`/`)
  }

  render(){
    const { authedUser, users } = this.props;
   const loggedUser = (authedUser) ? users[authedUser].name : '';
   const avatar = (authedUser) ? users[authedUser].avatarURL : '';

    return (
      <div className='headerNav'>
        <NavLink to='/' className='headerNavBtn' exact activeClassName='headerNavBtnActive'>Home</NavLink>
        <NavLink to='/new' className='headerNavBtn' activeClassName='headerNavBtnActive'>New Question</NavLink>
        <NavLink to='/leaderboard' className='headerNavBtn' activeClassName='headerNavBtnActive'>Leader Borad</NavLink>
        {authedUser !== null && (
        <div className='headerNav-logout'>
          <span>Hello,{loggedUser} </span>
          <img src={avatar} alt='' width='20px'/>
          <NavLink to='/' className='headerNav-logout-btn' onClick={this.logout}>Logout</NavLink>
        </div>)}
       
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }){
  return {
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Header));
