import React, { Component, useEffect, useState } from "react";
import Pizza from "../components/Pizza";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const fetchPizzas = async () => {
    const response = await fetch("http://localhost:3000/pizzas");
    const pizzaData = await response.json();
    console.log(pizzaData);
    setPizzas(pizzaData);
  };
  useEffect(() => fetchPizzas(), []);

  const pizzaTable = () => {
    return pizzas.map((pizza) => <Pizza {...pizza} />);
  };
  return (
    <table onClick={fetchPizzas} className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>{pizzaTable().length === 0 ? "loading..." : pizzaTable()}</tbody>
    </table>
  );
}

export default PizzaList;
