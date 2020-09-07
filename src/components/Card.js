import React from 'react';

const Card = (props) => {
  return (
    <div className="container">
      <div className="row mt-3">
  	    <div class="col-12 col-sm-6 col-md-4 col-lg-4 mx-auto">
          <div class="card">
            <img src="https://fratellowatches.imgix.net/2019/04/Rolex-Submariner-2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rolex</h5>
            <p>Price: <span>&#8369;100000</span></p>
            <label>Quantity:</label>
            <br />
            <input type="number" name="quantity" id="quantity" min="1" />
          <div className="row">
       	    <button className="col-12 col-md-5 submit d-block btn-success mt-3 mx-auto">Add to Cart</button>

       	    <button className=" col-12 col-md-5 submit d-block mt-3 btn-info mx-auto">View</button>
          </div>
          <div className="row">
       	    <button className="col-12 col-md-5 submit d-block btn-warning mt-3 mx-auto">Edit</button>

            <button className=" col-12 col-md-5 submit d-block mt-3 btn-danger mx-auto">Delete</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;