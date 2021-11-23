import {ADD_PERSON, DELETE_PERSON} from './pActionTypes'
import { v4 as uuidv4 } from 'uuid'

// action creator
export const addPerson= ()=>{
    return{
         // action type
        type: ADD_PERSON,
        payload:{
            id: uuidv4(),
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