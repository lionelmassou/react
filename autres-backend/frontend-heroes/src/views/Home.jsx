import React, { useEffect, useState } from 'react';

import Card from "../components/Card"

import { getHeroes } from '../utils/network'

const Home = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(async () => {
        try {
            const responseData = await getHeroes()

            if (responseData) {
                setHeroes(responseData)
            } else {
                alert("There was a problem")
            }
        } catch (error) {
            alert("There was a problem")
        }
    }, []);

    return (
        <div className="container">

            <h1>Welcome to Heroes!</h1>

            <div className="row">
                {
                    heroes.map((elem, index) => {
                        return (
                            <div key={index} className="col-6 my-4 d-flex justify-content-center">
                                <Card
                                    nameHero={elem.name}
                                    age={elem.age}
                                    isAlive={elem.isAlive}
                                    powers={elem.powers}
                                    color={elem.color}
                                    image={elem.image}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Home;
