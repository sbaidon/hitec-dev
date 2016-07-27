
function ui(state = {}, action) {
	switch(action.type) {
		case 'SELECT_ALUMN':
			return {
				...state, selectedAlumn: action.alumn
			}
		case 'UPDATE_ALUMN':
			return {
				...state, selectedAlumn: action.alumn
			}
 		default:
		  return state;
	}
}

export default ui;