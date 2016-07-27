
function alumni(state = [], action) {
	switch(action.type) {
		case 'RECEIVE_ALUMNI' :
			return [
				...action.alumni
			]
 		default:
		  return state;
	}
}

export default alumni;