import {ADD_PERSON, DELETE_PERSON} from './pActionTypes'
//import { v4 as uuidv4 } from 'uuid'

// (previousState, action) => newState
// reducer s/b  pure function
const initialState = {
    people:[]
 }
  
const pReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_PERSON:  

            // const newPerson = {
            //     id: uuidv4(),
            //     name: 'John',
            //     age: Math.floor( Math.random() * 40 )
            // } 

            // not mutating but return a new function
            return{
                // copy the state object
                //...state,
                people: [...state.people, action.payload],
                log: console.log(action.payload),
               

            }

        case DELETE_PERSON:  

            // not mutating but return a new function
            return{
                people: [...state.people.filter((person)=>{person.id!==action.payload})],
                
                log: console.log(action.payload),
                log2: console.log(state.people)
            }
    
        default:
            return state;
    }
  
}

export default pReducer