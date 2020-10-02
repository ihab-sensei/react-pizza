import React, { useState } from "react";

const PizzaForm = ({
  topping,
  size,
  isVegetarian,
  setTopping,
  setSize,
  setIsVegetarian,
}) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          onChange={(e) => setTopping(e.target.value)}
          value={
            //Pizza Topping Should Go Here
            topping
          }
        />
      </div>
      <div className="col">
        <select
          onChange={(e) => setSize(e.target.value)}
          value={size}
          className="form-control"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="veg"
            value="Vegetarian"
            checked={isVegetarian.veg}
            //onChange={(e) => se}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="veg"
            value="Not Vegetarian"
            checked={isVegetarian.notVeg}
            //oncHANGE={(e) => }
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={console.log}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
