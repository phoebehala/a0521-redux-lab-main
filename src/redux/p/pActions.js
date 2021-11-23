import {ADD_PERSON, DELETE_PERSON} from './pActionTypes'

// action creator
export const addPerson= ()=>{
    return{
         // action type
        type: ADD_PERSON,
        payload:{
            id: Math.random(), // not really unique but good enough here!
            name: 'John',
            age: Math.floor( Math.random() * 40 )
        }
        
    }
 }
 
 export const deletePerson= (personId) =>{ 
     return{
          // action type
         type: DELETE_PERSON,
         payload:personId
         
     }
  }