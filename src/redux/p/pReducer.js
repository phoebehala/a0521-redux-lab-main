import {ADD_PERSON, DELETE_PERSON} from './pActionTypes'

// (previousState, action) => newState
// reducer s/b  pure function
const initialState = {
    people:[]
 }
  
const pReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_PERSON:  
            // not mutating but return a new function
            return{
                // copy the state object
                //...state,
                people: [...state.people,action.payload]
            }

        case DELETE_PERSON:  
            // not mutating but return a new function
            return{
                
            }
        
        default:
            return state;
    }
  
}

export default pReducer