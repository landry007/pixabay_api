import React, { Component } from 'react';
import NavBar from '../navbar/navbar'
import { createStore } from 'redux'

const initialState = {
    recipes : [],
    ingredients : []
}

const reducer = (state = initialState , action={} )=> {
    switch (action.type) {
        case 'ADD_RECIPE':
           let recipes =[...state.recipes , action.recipe]
            return Object.assign({} , state ,{recipes:recipes})
    
        default:
            return state
    }
}

const store = createStore(reducer )

const action = {type : 'ADD_RECIPE',recipes : 'chocolat'}
store.dispatch(action)

const onStoreChange = () => console.log(store)
store.subscribe(onStoreChange);
console.log(store.getState )


class Register extends Component {
    render() {
        return (
            <div>
                <NavBar />
               <h1> I am an register Page</h1>
            </div>
        );
    }
}

export default Register;
