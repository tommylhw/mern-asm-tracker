import React from 'react';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import '../NavItem/NavItem.css';

const NavItem = (props) => {
  return (
    <div>
        <Link to={props.route}>
            <p>{props.text}</p>
        </Link>
        
    </div>
  )
}

export default NavItem;