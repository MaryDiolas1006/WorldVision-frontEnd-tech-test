import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const UpdateGame = () => {

    const { id } = useParams();

    const [game, setGame] = useState({
         name: "",
        quantity: "",
        copies: "",
        time:"",
        image: ""
    });

    useEffect(() => {
        fetch(`https://gameInventory.com/games/${id}`)
            .then(res => res.json())
            .then(data => {
                setGame(data)
            })
    },[])


    return (
        <div id="edit-container" className="ui container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
                    <h1 id="edit-text" className="text-center">Edit Movie</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    
                    <UpdateGameForm game={game}/>
                    
                 </div> 
            </div>
        </div>
    );
}

export default UpdateGame;