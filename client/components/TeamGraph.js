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

        teamData.forEach((team) => teamNames.forEach((name, index) => {
            data[index]+= parseInt(team[name]);
        }));

        return data;
    },

	render() {
        const dataByColor = {
            labels: ['Morado', 'Rojo' , 'Verde' , 'Naranja'],
            datasets: [{
                label: 'Puntos por Color',
                backgroundColor: [
                    'rgba(60, 24, 160, 1)',
                    'rgba(177, 27, 27, 1)',
                    'rgba(24, 160, 40, 1)',
                    'rgba(230, 137, 15, 1)'   
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
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
            fontColor: 'rgba(255,255,255,1)',
            datasets: [{
                label: 'Puntos por Equipo',
                backgroundColor: [
                    'rgba(60, 24, 160, 1)',
                    'rgba(60, 24, 160, 1)',
                    'rgba(60, 24, 160, 1)',
                    'rgba(60, 24, 160, 1)',
                    'rgba(177, 27, 27, 1)',
                    'rgba(177, 27, 27, 1)',
                    'rgba(177, 27, 27, 1)',
                    'rgba(177, 27, 27, 1)',
                    'rgba(24, 160, 40, 1)',
                    'rgba(24, 160, 40, 1)',
                    'rgba(24, 160, 40, 1)',
                    'rgba(24, 160, 40, 1)',
                    'rgba(230, 137, 15,1)',
                    'rgba(230, 137, 15,1)',
                    'rgba(230, 137, 15,1)',
                    'rgba(230, 137, 15,1)'  
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 1,
                data: this.getScoresByTeam()
            }, ]
        };

        const chartOptions = {
            legend: {
                        labels: {
                            fontColor: 'rgba(255, 255, 255, 1)'
                        }
                    },
            scales: {
                xAxes:[{
                    gridLines:{
                      color:'rgba(255,255,255,1)',
                      zeroLineColor:'rgba(255,255,255,1)',
                    },
                    ticks: {
                        fontColor:'rgba(255,255,255,1)'
                    }
                  }],
                yAxes:[{
                    gridLines:{
                      color:'rgba(255,255,255,0.5)',
                      zeroLineColor:'rgba(255,255,255,1)'
                    },
                    ticks: {
                        fontColor:'rgba(255,255,255,1)'
                    }
                  }]
            }
        };

		return (
			<div className="graph-container">
			    <h1>Colores</h1>
                <Bar data={dataByColor} options= {chartOptions} width='500' height='150'/>
                <h1>Equipos</h1>
                <Bar data={dataByTeam} options= {chartOptions} width='500' height='150'/>
			</div>
		)
	}
});

export default TeamGraph;