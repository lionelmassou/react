import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AddStudent = ({ changeStudentAdded }) => {
    const history = useHistory()
    const [studentName, setStudentName] = useState("");

    const sendStudent = () => {
        // console.log("sendStudent ça rentre, valeur studentName", studentName);
        const url = "http://localhost:8000/students"


        axios.post(url, {
            name: studentName
        })
            .then(response => {
                console.log("response axios post", response);
                changeStudentAdded(studentName)
        
                history.push("/studentAdded")
            })


    }

    return (
        <div className="col-6">

            <h2>Add student</h2>

            <div>
                <label>Student Name:</label>
                <input type="text" name="studentName" onChange={(e) => setStudentName(e.target.value)} />
            </div>

            <button className="btn btn-primary" onClick={sendStudent}>Send</button>

        </div>
    );
}

export default AddStudent;