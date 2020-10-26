import React, {useState} from 'react';
import GameInput from './GameInput';
import { Redirect } from 'react-router-dom';


const GameForm = () => {

    const [redirect, setRedirect] = useState({
        latestId: "",
        success: false
    });

    const [game, setGame] = useState({
        name: "",
        quantity: "",
        copies: "",
        time:"",
        image: {}
    });



    if (redirect.success) {
            return <Redirect to={`/games/${redirect.latestId}`} />
    }

    const handleChange = e => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        });
    };



    const handleChangeFile = e => {
        setGame({
            ...game,
            image: e.target.files[0]
        });
    };

    
    const handleSubmit = e => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', game.name)
        formData.append('quantity', game.quantity)
        formData.append('copies', game.copies)
        formData.append('image', game.image)

        fetch('https://gameInventory.com/games', {
            method: "post",
            body: formData,
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    setRedirect({
                        latestId: data._id,
                        success: true
                    })
                }
                console.log(data)
            })
    }



    return (
        <form onSubmit={handleSubmit}>
            <GameInput
                name="name"
                displayName="Game Name:"
                type="text"
                handleChange={handleChange}
            />

            <GameInput
                name="quantity"
                displayName="Game Quantity:"
                type="number"
                handleChange={handleChange}
            />

            <GameInput
                name="copies"
                displayName="Number of Copy:"
                type="number"
                handleChange={handleChange}
            />

            <GameInput
                name="time"
                displayName="Game Time:"
                type="time"
                handleChange={handleChange}
            />
            
            <GameInput
                name="image"
                displayName="Game Image:"
                type="file"
                handleChange={handleChangeFile}
            />

    	<br /> 
        <button className="submit btn-primary  btn-sm">Add Game</button>
    </form>
    );
}

export default GameForm;
