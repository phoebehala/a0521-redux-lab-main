import React from 'react'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux'
import { addPerson, deletePerson } from '../redux'


const MyPeople = (props) => {
    return (
        <div>
            <AddPerson personAdded={props.addPerson} />
            {props.people && props.people.map(person => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => props.deletePerson(person.id)}/>
            ))}
        </div>
    );
};

// the state from the redux store is mapped to the component props
const mapStateToProps = (state) =>{
    return {
        people: state.people
    }
}

// map dispatch of an action creator to a prop in the component
const mapDispatchToProps = dispatch =>{
    return{
        addPerson: () => dispatch(addPerson()),
        deletePerson:(id) => dispatch(deletePerson(id))
    }
}

 
 
export default connect(
    mapStateToProps, mapDispatchToProps
    )(MyPeople)