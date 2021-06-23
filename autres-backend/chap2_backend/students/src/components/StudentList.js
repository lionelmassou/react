import { useState, useEffect } from 'react'
import axios from 'axios'

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {

        const url = "http://localhost:8000/students"

        axios.get(url)
            .then(response => {
                setStudents(response.data)
            })

    }, []);

    return (
        <div className="col-6">

            <h2>List Students</h2>

            <ul>
                {
                    students.map(elem => {
                        return <li>{elem.name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default StudentList;