import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import FatherComponent from './FatherComponent'

export default class GrandFatherComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <FatherComponent 
                    value={{
                        name: 'JoaQuin',
                        age: '45',
                        gender: 'Male'
                    }}
                />
                <ChildComponent 
                    value={{
                        name: 'Cait',
                        age: '15',
                        gender: 'Female'
                    }}
                />
            </div>
        )
    }
}
