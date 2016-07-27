import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Bar } from 'react-chartjs';
import TeamGraph from './TeamGraph';



const TeamContainer = React.createClass({

    componentWillMount () {
        this.props.fetchTeams();
    },

    handleClick() {
        this.props.fetchTeams();
    },

    render() {
    return (
			 <div>
                <button onClick={this.handleClick}> Reload </button>
                <TeamGraph teamData = {this.props.teams}/>
			</div>
		)
	}
});

export default TeamContainer;