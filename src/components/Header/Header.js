import React from 'react';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import {NavLink, Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search.js';

class Header extends React.Component {
  render(){
    return (
      <header className = {styles.component}>
        <Container>
          <div className = {styles.wrapper}>
            <Link to='/' className = {styles.logo} >
              <Icon name= {settings.headerIcon} />
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;