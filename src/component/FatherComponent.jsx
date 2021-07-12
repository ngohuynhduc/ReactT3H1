import React, { Component } from 'react'

export default class FatherComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        const{name,age,gender}=this.props.value;
        return (
            <div>
                <p style={{fontWeight: 'bold', color:'red'}}>This is Father Component:</p>
                <p>Father name: {name}</p>
                <p>Father age: {age}</p>
                <p>Father gender: {gender}</p>
            </div>
        )
    }
}
