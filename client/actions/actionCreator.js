import fetch from 'isomorphic-fetch'



 export function fetchTeams() {
      
       const newHeaders = new Headers({
          "Content-Type": "application/json",
          "X-Parse-Application-Id": "GND8xkckLAJGY4Lo0lFyWeLUBMJnSzW5u6i9NEiZ",
          "X-Parse-REST-API-Key": "x4SeesMbgYnPzZEdcVQsNn7W9WPpaO8o8iAFxgxM"
      });

      const init = { 
           method: 'GET',
           headers: newHeaders,
           mode: 'cors'
     };

     return (dispatch) => {
         dispatch(requestTeams())
         return fetch(`https://api.parse.com/1/classes/Puntuacionesv2`, init)
           .then((response) => response.json())
           .then((json) => dispatch(receiveTeams(json)))
       }
}

 export function receiveTeams(json) {
    return {
        type: 'RECEIVE_TEAMS',
        teams: json.results,
        receivedAt: Date.now()
    }
 } 

 export function requestTeams() {
   return {
     type: 'REQUEST_TEAMS'
   }
 }


export function fetchAlumni() {

   const myHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Parse-Application-Id": "4J8YjMmfjGfPpSJfbWhVVkdROiI7Dvjrzh6dYuCs",
    "X-Parse-REST-API-Key": "wrSloSR4hxcRhYChEru897eqJyL166Z2KeQF7AL2"
  });


	 const myInit = { 
	 			method: 'GET',
	      headers: myHeaders,
	      mode: 'cors'
	};

	return (dispatch) => {
	    dispatch(requestAlumni())
	    return fetch(`https://api.parse.com/1/classes/Alumni?limit=1000`, myInit)
	      .then((response) => response.json())
	      .then((json) => dispatch(receiveAlumni(json)))
	  }
}



export function requestAlumni() {
  return {
    type: 'REQUEST_ALUMNI'
  }
}

export function receiveAlumni(json) {
  return {
    type: 'RECEIVE_ALUMNI',
    alumni: json.results,
    receivedAt: Date.now()
  }
}

export function registerAlumn(alumn) {

   const myHeaders = new Headers({
    "Content-Type": "application/json",
    "X-Parse-Application-Id": "4J8YjMmfjGfPpSJfbWhVVkdROiI7Dvjrzh6dYuCs",
    "X-Parse-REST-API-Key": "wrSloSR4hxcRhYChEru897eqJyL166Z2KeQF7AL2"
  });


	const equipo = assignTeam(alumn.numero);
	alumn.equipo = equipo;
	alumn.asistio = true;

	return (dispatch) => {
			 const myInit = { 
			 			method: 'PUT',
			      headers: myHeaders,
			      mode: 'cors',
			      cache: 'default',
			      body: JSON.stringify({
					    asistio: true,
					    equipo: equipo,
					    numero: alumn.numero
					  })
			};

			return fetch(`https://api.parse.com/1/classes/Alumni/${alumn.objectId}`, myInit)
			  .then(() => dispatch(updateAlumn(alumn)))
	}
}

export function selectAlumn(alumn) {
	return {
		type: 'SELECT_ALUMN',
		alumn
	}
}

export function updateAlumn(alumn) {
	return {
		type: 'UPDATE_ALUMN',
		alumn
	}
}

function assignTeam(number) {
    switch (number % 16) {
        case 0:
            return 'ENH-AMARILLO';
            break;
        case 1:
            return  'CIT-MORADO';
            break;
        case 2:
            return 'CIT-VERDE';
            break;
        case 3:
            return 'CIT-ROJO';
            break;
        case 4:
            return  'CIT-AMARILLO';
            break;
        case 5:
            return 'INGE-MORADO';
            break;
        case 6:
            return 'INGE-VERDE';
            break;
        case 7:
            return 'INGE-ROJO';
            break;
        case 8:
            return  'INGE-AMARILLO';
            break;
        case 9:
            return  'PIT-MORADO';
            break;
        case 10:
            return 'PIT-VERDE';
            break;
        case 11:
            return 'PIT-ROJO';
            break;
        case 12:
            return 'PIT-AMARILLO';
            break;
        case 13:
            return 'ENH-MORADO';
            break;
        case 14:
            return 'ENH-VERDE';
            break;
        case 15:
            return 'ENH-ROJO';
            break;
    }
}