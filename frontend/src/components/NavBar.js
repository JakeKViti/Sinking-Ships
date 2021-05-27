import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
        <NavLink to="/" style={{paddingRight: '10px'}}>Home</NavLink>
        <NavLink to="/game" style={{paddingRight: '10px'}}>Play</NavLink>
        <NavLink to="/rules" style={{paddingRight: '10px'}}>Rules</NavLink>
        <NavLink to="/leaderboard" >Leaderboard</NavLink>
        </div>
        )
    }
}