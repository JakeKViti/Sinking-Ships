import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
        <NavLink to="/Sinking-Squids/" style={{paddingRight: '10px'}}>Home</NavLink>
        <NavLink to="/Sinking-Squids/game" style={{paddingRight: '10px'}}>Play</NavLink>
        <NavLink to="/Sinking-Squids/rules" style={{paddingRight: '10px'}}>Rules</NavLink>
        <NavLink to="/Sinking-Squids/leaderboard" >Leaderboard</NavLink>
        </div>
        )
    }
}