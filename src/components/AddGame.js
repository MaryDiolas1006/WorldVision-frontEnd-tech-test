import React from 'react';
import GameForm from './GameForm';

const AddGame = () => {
    return (
         <div className="ui container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
                    <h1 id="adding" className="text-center">Adding Movie</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    
                    <GameForm/>
                    
                 </div> 
            </div>
        </div>
    );
}

export default AddGame;
