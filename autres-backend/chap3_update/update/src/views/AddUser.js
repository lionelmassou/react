import React, { useState } from 'react';
import axios from 'axios'

const AddUser = () => {
    const [userAdded, setUserAdded] = useState(false);
    const [nameUser, setNameUser] = useState("");
    const [imageUser, setImageUser] = useState("");

    const send = async () => {

        try {

            const newUserForm = new FormData()

            newUserForm.append("name", nameUser)
            newUserForm.append("new-image", imageUser)

            const response = await axios.post("http://localhost:9000/users/add", newUserForm)

            console.log("response", response);

            if (response.status === 200) {
                setUserAdded(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="row">

            {userAdded 
                ? <h2>User a été ajouté correctement!</h2>
                : <>
                    <h2>Ajouter un nouvel user</h2>

                    <div class="mb-3">
                        <label class="form-label">Nom d'user</label>
                        <input type="text" onChange={(event) => setNameUser(event.target.value)} class="form-control" name="name" placeholder="Nom d'user" />
                    </div>

                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image d'user</label>
                        <input type="file" onChange={(event) => setImageUser(event.target.files[0])} class="form-control" name="new-image" />
                    </div>

                    <div class="mb-3">
                        <button class="btn btn-primary" onClick={send}>Envoyer</button>
                    </div>
                </>
            }
        </div>
    );
}

export default AddUser;