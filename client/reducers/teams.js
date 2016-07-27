
function teams(state = [], action) {
	switch(action.type) {
		case 'REQUEST_TEAMS' : 
		  return state;
		case 'RECEIVE_TEAMS' :
			return [
			   ...action.teams
			]
 		default:
		  return state;
	}
}

export default teams;