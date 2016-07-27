import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Bar } from 'react-chartjs';



const TeamGraph = React.createClass({

    getScoresByColor () {
       const data = [];
       const scoresByTeam = this.getScoresByTeam();

       while(scoresByTeam.length > 0) {
       data.push(scoresByTeam.splice(0,4).reduce((prev, current) => prev+current));
       }

       return data;
    },

    getScoresByTeam() {
        const data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        const teamNames = ['CITMORADO', 'EIMORADO', 'PITMORADO', 'ENHMORADO', 
                           'CITROJO', 'EIROJO', 'ENHROJO', 'PITROJO', 
                           'CITVERDE', 'EIVERDE', 'ENHVERDE', 'PITVERDE',
                           'CITNARANJA', 'EINARANJA', 'ENHNARANJA' , 'PITNARANJA']
        const { teamData } = this.props;

        teamData.forEach((team) => teamNames.forEach((name, jindex) => {
            data[jindex]+= parseInt(team[name]);
        }));

        return data;
    },

	render() {
        const dataByColor = {
            labels: ['Morado', 'Rojo' , 'Verde' , 'Naranja'],
            datasets: [{
                label: 'Puntos por Color',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'   
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                data: this.getScoresByColor()
            }, ]
        };

        const dataByTeam = {
            labels: ['CITMORADO', 'EIMORADO', 'PITMORADO', 'ENHMORADO', 
                     'CITROJO', 'EIROJO', 'ENHROJO', 'PITROJO', 
                     'CITVERDE', 'EIVERDE', 'ENHVERDE', 'PITVERDE',
                     'CITNARANJA', 'EINARANJA', 'ENHNARANJA' , 'PITNARANJA'],
            datasets: [{
                label: 'Puntos por Equipo',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)', 
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',    
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
                data: this.getScoresByTeam()
            }, ]
        };

		return (
			<div className="graph-container">
			    <h1>Colores</h1>
                <Bar data={dataByColor} width='600' height='200'/>
                <h1>Equipos</h1>
                <Bar data={dataByTeam} width='600' height='200'/>
			</div>
		)
	}
});

export default TeamGraph;