import React from 'react';

const DeleteGame = ({setDeletedGame}) => {
    
    const handleClick = () => {
        fetch(`https://gameInventory.com/games/${id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (setDeletedGame) {
                    setDeletedGame({_id: id})
                }
            })
    }

    return (
    <>    
        <div className="col col-md-6">
            <button id="delete"
                className="btn btn-danger my-1 w-100"
                onClick={handleClick}>
                Delete Game
            </button>
        </div>        
    </>
    );
}

export default DeleteGame;