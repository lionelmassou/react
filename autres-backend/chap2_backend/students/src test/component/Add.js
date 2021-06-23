import React, { Component } from 'react'

export class Add extends Component {

    render() {
        return (
            <div>
                <h1> Add student</h1>
                <div>
                    <label>Student Name:</label>
                    <input type="text" name="studentName" onChange = {(e) => e.target.value)}/>
                </div>
                
                <button className = "btn btn-primary" onClick={}></button>
            </div>
        )
    }
}

export default Add
