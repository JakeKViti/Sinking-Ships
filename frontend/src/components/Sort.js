import React from 'react';
import Highscore from './Highscore.js'


export default class Sort extends React.Component {

    state = {
        sort : "ASC"
    }

    handleClick = (entries) => {
        let sorted
        if (this.state.sort === "ASC"){
            this.setState ({sort: "DESC"})
            sorted = entries.sort((a,b) => b.clicks - a.clicks) 
            console.log(sorted)
            this.renderHighscores(sorted)
        } else {
            this.setState ({sort: "ASC"})
            sorted = entries.sort((b,a) => b.clicks - a.clicks)
            console.log(sorted)
            this.renderHighscores(sorted)
        }
        this.forceUpdate();
    }

    renderHighscores = (sorted) => {
        return (
            <div>
               return <Highscore entries={sorted} />
            </div>
        )
    }

    render(){
        return(
            <button onClick={() => this.handleClick(this.props.entries)}>
                Order Shots {this.state.sort}?
            </button>
        )
    }
}