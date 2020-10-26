import React, {useState, useEffect} from 'react';
import GameInput from './GameInput';
import {Link, Redirect} from 'react-router-dom';

const UpdateGameForm = (props) => {

    const [game, setGame] = useState({});

    const [redirect, setRedirect] = useState(false);


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

        if (game.image) {
            formData.append('image', game.image);
        }

        fetch(`https://gameInventory.com/games/${props.game._id}`, {
            method: "put",
            headers: {
                "Authorization" : `Bearer ${localStorage['appState']}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRedirect(true)
            })
    }


    useEffect(() => {
        setGame({
            ...game,
            ...props.game,
            image: ""
        })
    }, [props.game])

    if (redirect) {
        return <Redirect to={`/games/${props.game._id}`} />
    }


    return (
        <form onSubmit={handleSubmit}>
           <GameInput
                name="name"
                displayName="Game Name:"
                type="text"
                value={game.name}
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
        <button className="submit btn-primary  btn-sm">Update Game</button>
    </form>
    );
}

export default UpdateGameForm;