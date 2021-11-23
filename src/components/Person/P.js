//console.log("From index.js");
 
import './Person.css';
import React from 'react'
import {connect} from 'react-redux'
import { addPerson, deletePerson } from '../../redux'




const P = (props) => (
    <div className="Person">
        <h1>Name: {props.people['name']}</h1>
        <p>Age: {props.people['age']}</p>
    </div>
);

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
        deletePerson:() => dispatch(deletePerson())
    }
}

 
 
export default connect(
    mapStateToProps, mapDispatchToProps
    )(P)