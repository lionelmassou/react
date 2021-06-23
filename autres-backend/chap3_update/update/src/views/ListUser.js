import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ListUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(async () => {

        try {
            const response = await axios.get("http://localhost:9000/users")

            if (response.status === 200) {

                setUsers(response.data)

            }

        } catch (error) {
            console.error(error)
        }

    }, []);

    return (
        <div className="row">
            <h2>Liste d'users</h2>

            {users.map(elem => {
                return <>
                    <div className="col-6">
                        <h3>{elem.name}</h3>
                    </div>
                    <div className="col-6">
                        <img class="img-fluid" src={`http://localhost:9000/uploads/${elem.profilePicture}`} alt="" />
                    </div>
                </>
            })}
        </div>
    );
}

export default ListUser;