import React, { Component } from 'react'

export default class ChildComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        const{name,age,gender}=this.props.value;
        return (
            <div>
                <p style={{fontWeight: 'bold', color:'green'}}>This is Child Component:</p>
                <p>Child name: {name}</p>
                <p>Child age: {age}</p>
                <p>Child gender: {gender}</p>
            </div>
        )
    }
}
