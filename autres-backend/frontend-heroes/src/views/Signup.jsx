import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { postSignup } from '../utils/network';

const Signup = () => {
    let history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("2");

    const [formErrors, setFormErrors] = useState([]);

    const [userCreated, setUserCreated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            history.push("/admin")
        }
    }, [])

    const validateForm = () => {
        const errors = []

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email.toLowerCase())) {
            errors.push("Email is not valid")
        }

        if (password !== confirmPassword) {
            errors.push("Passwords are not the same")
        }

        const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/
        if (!regexPassword.test(password)) {
            errors.push("Passwords must have at least 4 characters, 1 number, 1 upper and 1 lowercase")
        }

        if (!(role === "1" || role === "2")) {
            errors.push("Role must be Admin or Student")
        }

        if (firstName === "") {
            errors.push("Please enter First Name")
        }

        if (lastName === "") {
            errors.push("Please enter Last Name")
        }

        return errors
    }

    const signup = async () => {
        try {
            const validationErrors = validateForm()

            if (validationErrors.length === 0) {
                const result = await postSignup({
                    email,
                    password,
                    firstName,
                    lastName,
                    role
                })

                if (result) {
                    setUserCreated(true)
                } else {
                    alert("There was a problem")
                }
            } else {
                setFormErrors(validationErrors)
            }
        } catch (error) {
            alert("There was a problem")
        }
    }

    if (userCreated) {
        return ("User created!")
    } else {

        return (
            <>
                <div className="row">
                    <div className="offset-3 col-6 mx-auto">
                        {
                            formErrors.map(elem => {
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        {elem}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row">

                    <div className="offset-3 col-6 mx-auto">
                        <div className="mb-3 row">
                            <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputConfirmPassword" className="col-sm-4 col-form-label">Confirm Password</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="inputConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputRole" className="col-sm-4 col-form-label">Role</label>
                            <div className="col-sm-8">
                                <select className="form-select" onChange={(e) => setRole(e.target.value)}>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Student</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="lastName" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <button type="submit" className="btn btn-primary mb-3" onClick={signup}>Signup</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;
