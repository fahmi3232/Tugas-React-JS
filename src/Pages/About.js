import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.nama}</h2>
                <h2>{this.props.alamat}</h2>
            </div>
        )
    }
}
