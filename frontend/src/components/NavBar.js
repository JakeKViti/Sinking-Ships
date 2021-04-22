import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        </div>
        )
    }
}